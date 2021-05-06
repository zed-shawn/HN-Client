import React from "react";
import { View, Text } from "react-native";
import Colors from "../../constants/Colors";

export default function Tag(props) {
  return (
    <View
      style={{
        borderRadius: 3,
        width: "10%",
        elevation: 1,
        backgroundColor: "gray",
        alignItems: "center",
        height: "90%",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: Colors.unreadText }}>{props.type}</Text>
    </View>
  );
}
