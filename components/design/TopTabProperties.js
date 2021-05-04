import React from "react";
import { Text, View, Dimensions } from "react-native";

import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
const screenWidth = Dimensions.get("screen").width;

export const activeTabTop = (
  <View
    style={{
      flexDirection: "row",
      width: screenWidth * 0.15,
      alignItems: "center",
      justifyContent: "space-evenly",
    }}
  >
    <FontAwesome name="line-chart" size={15} color={Colors.primary} />
    <Text style={{ color: Colors.primary, fontFamily: "CircBold" }}>TOP</Text>
  </View>
);
export const inactiveTabTop = (
  <View
    style={{
      flexDirection: "row",
      width: screenWidth * 0.15,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <FontAwesome name="line-chart" size={20} color={Colors.inactiveIcon} />
  </View>
);
export const activeTabNew = (
  <View
    style={{
      flexDirection: "row",
      width: screenWidth * 0.15,
      alignItems: "center",
      justifyContent: "space-evenly",
    }}
  >
    <MaterialCommunityIcons
      name="timer-sand-full"
      size={15}
      color={Colors.primary}
    />
    <Text style={{ color: Colors.primary, fontFamily: "CircBold" }}>NEW</Text>
  </View>
);
export const inactiveTabNew = (
  <View
    style={{
      flexDirection: "row",
      width: screenWidth * 0.15,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <MaterialCommunityIcons
      name="timer-sand"
      size={20}
      color={Colors.inactiveIcon}
    />
  </View>
);
export const activeTabBest = (
  <View
    style={{
      flexDirection: "row",
      width: screenWidth * 0.15,
      alignItems: "center",
      justifyContent: "space-evenly",
    }}
  >
    <MaterialCommunityIcons
      name="rocket-launch"
      size={15}
      color={Colors.primary}
    />
    <Text style={{ color: Colors.primary, fontFamily: "CircBold" }}>BEST</Text>
  </View>
);
export const inactiveTabBest = (
  <View
    style={{
      flexDirection: "row",
      width: screenWidth * 0.15,
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <MaterialCommunityIcons
      name="rocket-launch-outline"
      size={20}
      color={Colors.inactiveIcon}
    />
  </View>
);
