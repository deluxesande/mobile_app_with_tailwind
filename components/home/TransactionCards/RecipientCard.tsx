import CustomText from "@/components/CustomText";
import fonts from "@/constants/fonts";
import Transaction from "@/constants/objectTypes";
import React from "react";
import { Image, Text, View } from "react-native";

const RecipientCard = () => {
    return (
        <View className="h-20 flex-row items-center justify-between bg-white rounded-md my-1 px-4">
            <View className="flex-row items-center space-x-2">
                <Image
                    source={require("@/assets/images/profile.png")}
                    resizeMode="contain"
                    className="w-10"
                />
                <View className="flex-col flex-1">
                    <View>
                        <CustomText styles="text-base" text="Nayantara V" />
                    </View>
                    <View className="w-full justify-between flex-row items-center mt-2">
                        <CustomText
                            styles="text-xs text-gray-500"
                            text="+254 712345678"
                        />
                        <CustomText
                            styles="text-xs text-gray-500"
                            text="3:02"
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default RecipientCard;
