import React, { useState, useEffect, useCallback } from "react";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";
import * as Font from "expo-font";
//import store from "./store/store";
import * as link from "./components/connections/apliLinks";
import CheckConnectivity from "./components/connections/CheckConnectivity";

import MainNavigator from "./navigation/MainNavigator";
//import * as UserActions from "./store/userDetail";
import { useDispatch, useSelector } from "react-redux";

enableScreens();

function App() {
  // const dispatch = useDispatch();
  const [fontLoaded, setFontLoaded] = useState(false);

  async function loadIDs() {
    // Checks for net connectivity, calls api, if successful -> passes onto state. Throws error otherwise.
    const netStatus = await CheckConnectivity();
    if (netStatus) {
      let response = await fetch(link.bestStories);
      let data = await response.json();
      const newLink = link.itemDetail + `${data[0]}` + ".json";
      let response1 = await fetch(newLink);
      let data1 = await response1.json();
      console.log(data1);
    }
  }

  async function loadFonts() {
    //Loads custom fonts
    await Font.loadAsync({
      CircReg: require("./assets/fonts/CircReg.ttf"),
      CircBold: require("./assets/fonts/CircBold.ttf"),
      CircItalic: require("./assets/fonts/CircItalic.ttf"),
    });
    setFontLoaded(true);
  }
  //useEffect(() => {
  // Runs at startup to call the loading functions
  loadFonts();
  loadIDs();
  //}, []);

  /* const dispatchUserDetails = useCallback(
    (data) => {
      dispatch(UserActions.mapUser(data));
    },
    [dispatch]
  ); */

  if (fontLoaded) {
    // If font has loaded, will load the app. Else will render nothing until font has loaded.
    return <MainNavigator />;
  } else {
    return null;
  }
}

function AppWrapper() {
  // Wrapper is used as redux dispatch component is present in App body & hence not wrapped in <Provider>
  return (
    //<Provider store={store}>
    <App />
    //</Provider>
  );
}

export default AppWrapper;
