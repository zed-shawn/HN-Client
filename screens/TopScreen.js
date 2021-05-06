import React, { useEffect, useCallback, useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CheckConnectivity from "../components/connections/CheckConnectivity";
import { Fontisto } from "@expo/vector-icons";

import * as link from "../components/connections/apliLinks";
import * as dataActions from "../store/dataStore";

import ListTile from "../components/ListTile";
import Colors from "../constants/Colors";

const TopScreen = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  const topIDs = useSelector((state) => state.data.topIDs);
  const readIDs = useSelector((state) => state.read.readIDs);

  const dispatchTopLinks = useCallback(
    (data) => {
      dispatch(dataActions.addTopIDs(data));
    },
    [dispatch]
  );

  async function loadTopIDs() {
    // Checks for net connectivity, calls api, if successful -> passes onto state. Throws error otherwise.
    const netStatus = await CheckConnectivity();
    if (netStatus) {
      let response = await fetch(link.topStories);
      let data = await response.json();
      dispatchTopLinks(data);
    }
  }

  const onRefresh = () => {
    setLoaded(false);
    loadTopIDs();
  };

  useEffect(() => {
    loadTopIDs();
  }, []);
  useEffect(() => {
    if (topIDs.length > 7) {
      setLoaded(true);
    }
  }, [topIDs]);

  const renderItems = (itemData) => {
    const data = itemData.item;
    return (
      <ListTile
        username={data.username}
        time={data.time}
        title={data.title}
        type={data.type}
        upvotes={data.upvotes}
        url={data.url}
        comments={data.comments}
        id={data.key}
      />
    );
  };

  return (
    <View style={styles.root}>
      {loaded ? (
        <FlatList
          renderItem={renderItems}
          data={topIDs}
          keyExtractor={(item) => item.key.toString()}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={10}
          onRefresh={onRefresh}
          refreshing={!loaded}
          extraData={readIDs}
        />
      ) : (
        <View style={styles.loadingView}>
          <Fontisto name="hacker-news" size={40} color="white" />
          <Text
            style={{
              fontFamily: "CircItalic",
              color: "white",
              fontSize: 18,
              marginTop: 20,
            }}
          >
            Loading...
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default TopScreen;
