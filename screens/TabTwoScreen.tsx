import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSnapshot } from "valtio";

import EditScreenInfo from "../components/EditScreenInfo";
import Logo from "../components/logos/Logo";
import { Text, View } from "../components/Themed";
import calculatorProxy from "../proxies/derived/calculator";

export default function TabTwoScreen() {
  const data = useSnapshot(calculatorProxy);

  return (
    <View style={styles.container}>
      <MapView style={{ flex: 1 }} showsUserLocation>
        {data.stations.map((station) => (
          <Marker
            key={station.key}
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude,
            }}
          >
            <View
              style={{
                backgroundColor: "transparent",
                shadowColor: "black",
                shadowOffset: { width: 2, height: 5 },
                shadowRadius: 10,
                shadowOpacity: 0.3,
              }}
            >
              <Logo size={30} company={station.company} />
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
