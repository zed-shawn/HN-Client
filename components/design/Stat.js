import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

export default function Stat(props) {
  return (
    <View style={styles.root}>
      <View style={styles.child}>
        <Entypo name="arrow-up" size={24} color="white" />
        <Text style={styles.childText}>{props.upvotes}</Text>
      </View>
      <View style={styles.child}>
        <FontAwesome name="comments" size={24} color="white" />
        <Text style={styles.childText}>{props.comments}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "40%",
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
    color: Colors.unreadText,
    marginHorizontal: 5,
  },
});
