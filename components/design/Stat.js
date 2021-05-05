import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";

export default function Stat() {
  return (
    <View style={styles.root}>
      <View style={styles.child}>
        <Entypo name="arrow-up" size={24} color="white" />
        <Text style={styles.childText}>32</Text>
      </View>
      <View style={styles.child}>
        <FontAwesome name="comments" size={24} color="white" />
        <Text style={styles.childText}>32</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "30%",
    alignItems: "center",
    height: "90%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  child: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  childText: {
    color: "white",
    marginHorizontal: 5,
  },
});
