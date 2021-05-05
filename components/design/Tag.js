import React from "react";
import { View, Text } from "react-native";

export default function Tag() {
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
      <Text style={{ color: "white" }}>Post</Text>
    </View>
  );
}
