import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
    return (
        <View className="mx-4">
            <Text>Home</Text>
            <Ionicons size={30} name="wifi" />
        </View>
    );
};

export default Home;
