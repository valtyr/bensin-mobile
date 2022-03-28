import React from "react";
import { View, Button } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
  withSpring,
  useAnimatedProps,
  useDerivedValue,
} from "react-native-reanimated";
import Svg, { Circle, Rect } from "react-native-svg";

const AnimatedRect = Animated.createAnimatedComponent(Rect);

const Gauge: React.FC = () => {
  const gasStatus = useSharedValue(0.5);

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: withSpring(gasStatus.value),
        },
      ],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Animated.View
        style={[
          { width: 100, height: 80, backgroundColor: "orange", margin: 30 },
          style,
        ]}
      />

      <Button
        title="toggle"
        onPress={() => {
          gasStatus.value = Math.random() * Math.PI;
        }}
      />
    </View>
  );
};

export default Gauge;
