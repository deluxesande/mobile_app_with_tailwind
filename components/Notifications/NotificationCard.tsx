import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import CustomText from "../CustomText";
import colors from "@/constants/colors";

const NotificationCard = () => {
    return (
        <View
            className="w-full h-20 flex-1 flex-row items-center justify-between mb-2 px-4 rounded-md shadow shadow-slate-400"
            style={{ backgroundColor: colors.main }}
        >
            <View className="">
                <Image
                    source={require("@/assets/images/profile.png")}
                    resizeMode="contain"
                    className="w-10 h-16"
                />
            </View>
            <View className="flex-1 flex-row ml-4 items-center justify-between">
                <View className="items-start flex-1">
                    <Text>Zoe sent you $20</Text>
                </View>
                <View className="flex-row items-center justify-end">
                    <MaterialCommunityIcons
                        name="timer-outline"
                        size={15}
                        color={"#777"}
                    />
                    <CustomText styles="text-sm ml-2" text="Just now" />
                </View>
            </View>
        </View>
    );
};

export default NotificationCard;
