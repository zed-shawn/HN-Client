import React from "react";
import { Dimensions } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as prop from "../components/design/TopTabProperties";

import BestScreen from "../screens/BestScreen";
import NewScreen from "../screens/NewScreen";
import TopScreen from "../screens/TopScreen";
import Colors from "../constants/Colors";

const screenWidth = Dimensions.get("screen").width;

const defaultStackNav = {
  title: "HackerNews",
  headerStyle: {
    backgroundColor: Colors.background,
  },
  headerTitleAlign: "center",
  headerTintColor: "white",

  headerTitleStyle: {
    fontFamily: "CircBold",
  },
};

const defaultTopTab = {
  activeTintColor: Colors.primary,
  inactiveTintColor: Colors.inactiveIcon,
  indicatorStyle: { backgroundColor: Colors.primary },
  showIcon: true,
  showLabel: false,
  style: {
    backgroundColor: "black",
  },
  labelStyle: {
    fontSize: 12,
    fontFamily: "CircBold",
  },
};

const TopTabNavigator = createMaterialTopTabNavigator();
export const TopTab = () => {
  return (
    <TopTabNavigator.Navigator tabBarOptions={defaultTopTab} lazy={true}>
      <TopTabNavigator.Screen
        name="Best"
        component={BestScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? prop.activeTabBest : prop.inactiveTabBest;
          },
        }}
      />
      <TopTabNavigator.Screen
        name="Top"
        component={TopScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? prop.activeTabTop : prop.inactiveTabTop;
          },
        }}
      />
      <TopTabNavigator.Screen
        name="New"
        component={NewScreen}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return focused ? prop.activeTabNew : prop.inactiveTabNew;
          },
        }}
      />
    </TopTabNavigator.Navigator>
  );
};

const FinalStackNavigator = createStackNavigator();
export const FinalStack = () => {
  return (
    <FinalStackNavigator.Navigator screenOptions={defaultStackNav}>
      <FinalStackNavigator.Screen name="Final" component={TopTab} />
    </FinalStackNavigator.Navigator>
  );
};
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <FinalStack />
    </NavigationContainer>
  );
};

export default MainNavigator;
