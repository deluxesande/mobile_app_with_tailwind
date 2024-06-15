import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomText from "@/components/CustomText";

const ServicesSection = () => {
    return (
        <View className="w-full h-44 bg-white mt-6 py-8 px-2 rounded-md space-y-10 flex-col items-center justify-center">
            {/* Row 1 */}
            <View className="w-full flex-row items-center justify-between">
                <TouchableOpacity className="flex-1 items-center">
                    <Ionicons
                        size={25}
                        name="globe"
                        style={{ color: "green" }}
                    />
                    <CustomText text="Internet" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 items-center">
                    <Ionicons
                        size={25}
                        name="water"
                        style={{ color: "lightblue" }}
                    />
                    <CustomText text="Water" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 items-center">
                    <MaterialCommunityIcons
                        size={25}
                        name="lightning-bolt"
                        style={{ color: "orange" }}
                    />
                    <CustomText text="Electricity" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 items-center">
                    <MaterialCommunityIcons
                        size={25}
                        name="remote-tv"
                        style={{ color: "purple" }}
                    />
                    <CustomText text="TV cable" />
                </TouchableOpacity>
            </View>
            {/* Row 2 */}
            <View className="w-full flex-row items-center justify-between">
                <TouchableOpacity className="flex-1 items-center">
                    <MaterialCommunityIcons
                        size={25}
                        name="car"
                        style={{ color: "gray" }}
                    />
                    <CustomText text="Vehicle" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 items-center">
                    <Ionicons
                        size={25}
                        name="home"
                        style={{ color: "darkgreen" }}
                    />
                    <CustomText text="Rent Bill" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 items-center">
                    <Ionicons
                        size={25}
                        name="calculator"
                        style={{ color: "darkblue" }}
                    />
                    <CustomText text="Invest" />
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 items-center">
                    <MaterialCommunityIcons size={25} name="cube" />
                    <CustomText text="More" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ServicesSection;
