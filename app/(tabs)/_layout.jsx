import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "./HomeTab";
import Journey from "./Journey";
import Subscription from "./Subscription";
import Profile from "./Profile";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Or another icon library

const Tab = createBottomTabNavigator();

const TabsLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Journey") {
            iconName = focused ? "map" : "map-outline";
          } else if (route.name === "Subscription") {
            iconName = focused ? "subscriptions" : "subscriptions-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        // tabBarStyle: { paddingBottom: 1, paddingTop: 5 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Journey" component={Journey} />
      <Tab.Screen name="Subscription" component={Subscription} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabsLayout;
