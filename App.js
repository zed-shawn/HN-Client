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
import store from "./store/store";

enableScreens();

function App() {
  // const dispatch = useDispatch();
  const [fontLoaded, setFontLoaded] = useState(false);

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
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrapper;
