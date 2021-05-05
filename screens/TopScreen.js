import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Colors";
import ListTile from "../components/ListTile";

const TopScreen = () => {
  return (
    <View style={styles.root}>
      <ListTile />
      <ListTile />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
  },
});

export default TopScreen;
