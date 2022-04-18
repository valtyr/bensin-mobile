import { FlatList, StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Slider from "@react-native-community/slider";
import { useCallback, useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import dataProxy from "../proxies/data";
import { useSnapshot } from "valtio";
import calculatorProxy from "../proxies/derived/calculator";
import carProxy from "../proxies/car";
import Logo from "../components/logos/Logo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import formatNumber from "../util/formatNumber";

import { debounce } from "ts-debounce";

type GasvaktinData = {
  stations: {
    bensin95: number;
    bensin95_discount: number;
    diesel: number;
    diesel_discount: number;
    geo: { lat: number; lon: number };
    company: string;
    key: string;
    name: string;
  }[];
};

type DistancesData =
  | { error: string; result: undefined }
  | {
      error: undefined;
      start_coords: [number, number];
      result: {
        destinations: {
          id?: string;
          result?: { distance_km: number; time_ms: number };
        }[];
      };
    };

export type EnrichedGasData = {
  stations: {
    bensin95: number;
    bensin95_discount: number;
    diesel: number;
    diesel_discount: number;
    geo: { lat: number; lon: number };
    company: string;
    key: string;
    name: string;
    distanceKm?: number;
    timeMs?: number;
  }[];
};

const loadData = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    console.error("Permission to access location was denied", status);
    return null;
  }

  const location = await Location.getCurrentPositionAsync({});

  const coords = [location.coords.latitude, location.coords.longitude] as [
    number,
    number
  ];

  const gasPrices: GasvaktinData = await fetch(
    "https://raw.githubusercontent.com/gasvaktin/gasvaktin/master/vaktin/gas.min.json"
  ).then((d) => d.json());

  const distancesBody = {
    from: coords,
    to: gasPrices.stations.map((station) => ({
      id: station.key,
      coords: [station.geo.lat, station.geo.lon],
    })),
  };

  const distances: DistancesData = await fetch(
    "https://routing-api.fly.dev/batch",
    {
      method: "POST",
      body: JSON.stringify(distancesBody),
    }
  ).then((d) => d.json());

  if (distances.error || !distances.result) {
    return null;
  }

  const distanceResultMap: Partial<
    Record<string, { distance_km: number; time_ms: number }>
  > = Object.fromEntries(
    distances.result.destinations.map((res) => [res.id, res.result])
  );

  const responseData: EnrichedGasData = {
    stations: gasPrices.stations.map((s) => ({
      ...s,
      distanceKm: distanceResultMap[s.key]?.distance_km,
      timeMs: distanceResultMap[s.key]?.time_ms,
    })),
  };

  return responseData;
};

const ListHeader: React.FC = () => {
  const fuelLevel = useSnapshot(carProxy).fuelLevel;
  const avgFuelEconomy = useSnapshot(carProxy).avgFuelEconomy;

  const [innerFuelLevel, setInnerFuelLevel] = useState(fuelLevel);
  const [innerFuelEconomy, setInnerFuelEconomy] = useState(avgFuelEconomy);

  const setFuelLevel = useCallback(
    debounce((v) => (carProxy.fuelLevel = v), 400),
    []
  );
  const setFuelEconomy = useCallback(
    debounce((v) => (carProxy.avgFuelEconomy = v), 400),
    []
  );

  return (
    <View>
      <Text>Bensínstaða ({Math.round(innerFuelLevel * 100)}%)</Text>
      <Slider
        minimumValue={0}
        maximumValue={1}
        value={useRef(fuelLevel).current}
        step={0.01}
        onValueChange={(v) => {
          setFuelLevel(v);
          setInnerFuelLevel(v);
        }}
      />

      <Text>Bensíneyðsla ({innerFuelEconomy.toFixed(2)} L/100km)</Text>
      <Slider
        minimumValue={1}
        maximumValue={20}
        value={useRef(avgFuelEconomy).current}
        onValueChange={(v) => {
          setFuelEconomy(v);
          setInnerFuelEconomy(v);
        }}
        step={0.5}
      />
    </View>
  );
};

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [loading, setLoading] = useState(false);

  const stations = useSnapshot(calculatorProxy).stations;

  const reload = useCallback(async () => {
    setLoading(true);
    const data = await loadData();
    dataProxy.data = data;
    setLoading(false);
  }, []);

  useEffect(() => {
    reload();
  }, []);

  return (
    <View lightColor="white" darkColor="black" style={{ flex: 1 }}>
      <FlatList
        style={styles.container}
        refreshing={loading}
        onRefresh={reload}
        ListHeaderComponent={ListHeader}
        data={stations}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={() => (
          <View
            lightColor="#CCCCCC"
            darkColor="#333333"
            style={{
              height: StyleSheet.hairlineWidth,
              marginLeft: 15,
            }}
          />
        )}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "transparent",
                shadowColor: "black",
                shadowOpacity: 0.1,
                shadowRadius: 5,
                shadowOffset: { width: 0, height: 5 },
              }}
            >
              <Logo company={item.company} />
            </View>
            <View
              style={{
                backgroundColor: "transparent",
                flex: 1,
                marginLeft: 15,
              }}
            >
              <Text style={{ fontWeight: "600", marginBottom: 5 }}>
                {item.name}
              </Text>
              <Text lightColor="#AAAAAA" darkColor="#999999">
                {formatNumber(item.distanceKm || 0, 1)} km
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                backgroundColor: "transparent",
                alignItems: "flex-end",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Text
                  style={{
                    fontWeight: "600",
                    marginBottom: 5,
                  }}
                >
                  {formatNumber(Math.round(item.priceToFill))} kr
                </Text>
                <Text
                  lightColor="#C4BBEE"
                  darkColor="#8066A4"
                  style={{ marginLeft: 10 }}
                >
                  <FontAwesome5 name="gas-pump" />
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "baseline" }}>
                <Text lightColor="#AAAAAA" darkColor="#999999">
                  +{formatNumber(Math.round(item.priceToDrive))} kr
                </Text>
                <Text
                  lightColor="#C4BBEE"
                  darkColor="#8066A4"
                  style={{ marginLeft: 10 }}
                >
                  <FontAwesome5 name="road" />
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
