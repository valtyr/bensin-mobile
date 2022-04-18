import React from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet } from "react-native";
import { useSnapshot } from "valtio";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import settings from "../proxies/settings";
import Plate from "../components/Plate";

export default function ModalScreen() {
  const cars = useSnapshot(settings).carList;

  return (
    <FlatList
      style={styles.container}
      data={cars}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text>Engir bílar skráðir</Text>}
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
          <Plate plate={item.plate} />
          <Text>{item.description}</Text>
        </View>
      )}
    />
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
