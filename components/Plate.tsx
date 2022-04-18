import React from "react";
import { View, Text } from "./Themed";

const PlateText: React.FC<{ plate: string }> = ({ plate }) => {
  const isStandardPlate = /^[A-Z]{2}[0-9]{3}$|^[A-Z]{3}[0-9]{2}$/.test(plate);

  if (isStandardPlate)
    return (
      <>
        <Text
          lightColor="#0043bf"
          darkColor="#0043bf"
          style={{
            fontWeight: "800",
            fontSize: 18,
            textShadowColor: "rgba(0,0,0,0.2)",
            textShadowRadius: 1,
            textShadowOffset: { height: 1, width: 0 },
          }}
        >
          {plate.substring(0, 3)}
        </Text>
        <View>
          <View style={{ height: 12, width: 10, backgroundColor: "#42a7f5" }} />
          <View style={{ height: 4, width: 10, backgroundColor: "#8bc4f0" }} />
        </View>
        <Text
          lightColor="#0043bf"
          darkColor="#0043bf"
          style={{
            fontWeight: "800",
            fontSize: 18,
            textShadowColor: "rgba(0,0,0,0.2)",
            textShadowRadius: 1,
            textShadowOffset: { height: 1, width: 0 },
          }}
        >
          {plate.substring(3)}
        </Text>
        <View />
      </>
    );

  return (
    <>
      <View>
        <View style={{ height: 12, width: 10, backgroundColor: "#42a7f5" }} />
        <View style={{ height: 4, width: 10, backgroundColor: "#8bc4f0" }} />
      </View>
      <Text
        lightColor="#0043bf"
        darkColor="#0043bf"
        style={{
          fontWeight: "800",
          fontSize: 18,
          textShadowColor: "rgba(0,0,0,0.2)",
          textShadowRadius: 1,
          textShadowOffset: { height: 1, width: 0 },
        }}
      >
        {plate}
      </Text>
      <View />
    </>
  );
};

const Plate: React.FC<{ plate: string }> = ({ plate }) => {
  const isStandardPlate = /^[A-Z]{2}[0-9]{3}$|^[A-Z]{3}[0-9]{2}$/.test(plate);
  const formattedPlate = isStandardPlate
    ? `${plate.substring(0, 3)} ${plate.substring(3)}`
    : plate;

  return (
    <View
      lightColor="white"
      darkColor="white"
      style={{
        width: 110,
        height: 40,
        borderColor: "#0043bf",
        borderWidth: 2,
        borderRadius: 8,
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 8,

        flexDirection: "row",
      }}
    >
      <PlateText plate={plate} />
    </View>
  );
};

export default Plate;
