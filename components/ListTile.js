import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import Tag from "./design/Tag";
import Stat from "./design/Stat";
import * as Scale from "../constants/Scale";
import * as Linking from "expo-linking";

import { getTimeTileFromMillis } from "./timeHandler";

const vs = Scale.verticalScale;

export default function ListTile(props) {
  const username = props.username;
  const title = props.title;
  const time = getTimeTileFromMillis(props.time * 1000);
  const type = props.type;
  const upvotes = props.upvotes;
  const url = props.url;
  const comments = props.comments;

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          Linking.openURL(url);
        }}
      >
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.titleText}>
            {title}
          </Text>
        </View>

        <View style={styles.userTimeContainer}>
          <Text style={styles.usernameText}>by {username}</Text>
          <Text style={styles.timeText}>{time}</Text>
        </View>

        <View style={styles.statusContainer}>
          <Tag type={type} />
          <Stat upvotes={upvotes} comments={comments} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    //height: "13%",
    marginTop: "2%",
    backgroundColor: "#2b2b2b",
    marginHorizontal: "1%",
    elevation: 5,
  },
  touch: {
    height: 100,
    flex: 1,
  },
  userTimeContainer: {
    flex: 2,
    justifyContent: "space-between",
    marginHorizontal: "1%",
    flexDirection: "row",
  },
  statusContainer: {
    flex: 2,
    justifyContent: "space-between",
    marginHorizontal: "1%",
    flexDirection: "row",
    marginBottom: 5,
  },
  titleText: {
    fontFamily: "CircBold",
    fontSize: vs(18),
    marginRight: 5,
    color: Colors.unreadText,
  },
  usernameText: {
    fontFamily: "CircItalic",
    fontSize: vs(16),
    color: Colors.unreadText,
  },
  timeText: {
    color: Colors.unreadText,
    fontFamily: "CircReg",
    fontSize: vs(14),
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 2,
  },
});
