import React, { useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import Tag from "./design/Tag";
import Stat from "./design/Stat";
import * as Scale from "../constants/Scale";
import * as Linking from "expo-linking";
import { useDispatch, useSelector } from "react-redux";

import * as readActions from "../store/readHandler";

import { getTimeTileFromMillis } from "./timeHandler";

const vs = Scale.verticalScale;

export default function ListTile(props) {
  const dispatch = useDispatch();
  const readIDs = useSelector((state) => state.read.readIDs);

  const username = props.username;
  const title = props.title;
  const time = getTimeTileFromMillis(props.time * 1000);
  const type = props.type;
  const upvotes = props.upvotes;
  const url = props.url;
  const comments = props.comments;
  const id = props.id;

  const dispatchReadID = useCallback(
    (id) => {
      dispatch(readActions.addReadIDs(id));
    },
    [dispatch]
  );
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => {
          dispatchReadID(id);
          Linking.openURL(url);
        }}
      >
        <View style={styles.titleContainer}>
          <Text
            numberOfLines={1}
            style={
              readIDs.includes(id)
                ? styles.readTitleText
                : styles.unreadTitleText
            }
          >
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
  unreadTitleText: {
    fontFamily: "CircBold",
    fontSize: vs(18),
    marginRight: 5,
    color: Colors.unreadText,
    marginHorizontal: "1%",
  },
  readTitleText: {
    fontFamily: "CircBold",
    fontSize: vs(18),
    marginRight: 5,
    color: Colors.readText,
    marginHorizontal: "1%",
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
