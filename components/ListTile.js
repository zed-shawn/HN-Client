import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Octicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Tag from "./design/Tag";
import Stat from "./design/Stat";
import * as Scale from "../constants/Scale";

const vs = Scale.verticalScale;

let textColor;
export default function ListTile(props) {
  /*   id, username, time, status, unread, imageUrl, text; */
  const username = "username";
  const unread = "unread";

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          console.log("press");
        }}
      >
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.titleText}>
            {username}
          </Text>
        </View>

        <View style={styles.userTimeContainer}>
          <Text style={styles.usernameText}>text</Text>
          <Text style={styles.timeText}>12:24</Text>
        </View>

        <View style={styles.statusContainer}>
          <Tag />
          <Stat />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: "13%",
    marginTop: "2%",
    backgroundColor: "#2b2b2b",
    width: "98%",
    elevation: 5,
  },
  touch: {
    height: 65,
    flex: 1,
  },
  userTimeContainer: {
    flex: 2,
    justifyContent: "space-between",
    marginLeft: 10,
    flexDirection: "row",
  },
  statusContainer: {
    flex: 2,
    justifyContent: "space-between",
    marginLeft: 10,
    flexDirection: "row",
    marginBottom: 5,
  },
  titleText: {
    fontFamily: "CircBold",
    fontSize: vs(19),
    marginRight: 5,
    color: Colors.unreadText,
  },
  usernameText: {
    fontFamily: "CircItalic",
    fontSize: 16,
    color: Colors.unreadText,
  },
  timeText: {
    color: Colors.unreadText,
    fontFamily: "CircReg",
    fontSize: 12,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
  },
});
