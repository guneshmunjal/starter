import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

const WelcomeOne = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("WelcomeTwo");
  };

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar hidden={true} />

      <View
        style={{ borderBottomRightRadius: 50 }}
        className="w-full h-[170px] bg-green-300 justify-center items-center"
      ></View>
      <View className="justify-center items-center">
        <Image
          source={require("../../assets/sound.png")}
          className="mt-11 w-[200px] h-[180px]"
        />
      </View>
      <View className="justify-center items-center">
        <Text style={{ fontFamily: "Roboto_700Bold" }} className="mt-5 text-lg">
          Hello!
        </Text>
        <Text style={{ fontFamily: "Roboto_700Bold" }} className="text-lg">
          Welcome to JobTree
        </Text>
        <Text style={{ fontFamily: "Roboto_400Regular" }} className="text-sm">
          An app for whatever you want,{"\n"}and whenever you want
        </Text>
      </View>
      <TouchableOpacity
        onPress={handlePress}
        className="items-center justify-center
      "
      >
        <View className="bg-yellow-400 items-center justify-center w-[250px] h-[50px] mt-8 rounded-2xl">
          <Text style={{ fontFamily: "Roboto_700Bold" }} className="text-lg">
            Next
          </Text>
        </View>
      </TouchableOpacity>
      <View className="flex-row justify-center mt-8">
        <View className="w-2.5 h-2.5 bg-gray-400 rounded-full mx-1"></View>
        <View className="w-2.5 h-2.5 bg-gray-400 rounded-full mx-1"></View>
        <View className="w-2.5 h-2.5 bg-gray-400 rounded-full mx-1"></View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeOne;
