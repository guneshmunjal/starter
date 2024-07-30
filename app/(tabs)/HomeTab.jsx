import React, { useState, ues } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import useFetch from "../useFetch";
import axios from "axios";

const HomeTab = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: `Javascript developer in INdia`,
    num_pages: 1,
  });
  console.log("data is coming bro", data);
  console.log("the error iss ", error);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScrollView className="bg-white h-screen flex-1">
      <View className="bg-blue-400 w-full h-[220px] items-start justify-center rounded-xl p-4">
        <Text className="text-white font-semibold mt-[30px] text-2xl">
          Hi, John
        </Text>
        <Text className="text-white mt-1 text-lg">Let's find Jobs!</Text>
        <TextInput
          className="bg-white mt-2 w-[250px] h-10 p-2 rounded-lg"
          placeholder="Search"
        />
      </View>

      <View className="px-4">
        <Text className="text-black text-xl font-bold mt-3">Categories</Text>
        {/* Add categories content here */}
      </View>

      <View className="px-4">
        <Text className="text-black text-xl font-bold mt-3">New Jobs</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="mt-3"
        >
          <View className="flex-row space-x-4">
            {[...Array(5)].map((_, index) => (
              <TouchableOpacity key={index}>
                <View className="bg-white w-[200px] h-[120px] border-black border-2 rounded-2xl"></View>
                <View className="flex-row mt-2 items-center">
                  <Icon name="person-circle" size={40} color="#000" />
                  <Text className="ml-2">Robert Green</Text>
                </View>
                <Text className="text-blue-500 text-lg font-bold mt-2">
                  $500
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>

      <View className="px-4">
        <Text className="text-black text-xl font-bold mt-3">Nearby Jobs</Text>
        <ScrollView>
          <View className="mt-3 space-y-4 items-center">
            {[...Array(4)].map((_, index) => (
              <TouchableOpacity key={index}>
                <View className="bg-white border-black border-2 w-[340px] h-[120px] rounded-lg mb-4">
                  <Text className="text-sm ml-2">google</Text>
                  <Text className="text-sm ml-2 mt-2">Portugal</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeTab;
