import { View, Text, Image } from "react-native";
import React from "react";
import fonts from "@/constants/fonts";
import CustomText from "@/components/CustomText";

interface cardProps {
    color?: string;
}

const PromotionCard = ({ color = "bg-pink-200" }: cardProps) => {
    return (
        <View
            className={`mt-6 w-80 mr-4 flex flex-row h-40 rounded-md px-6 py-8 ${color}`}
        >
            <View className="w-1/2">
                <Text
                    className="text-2xl"
                    style={{ fontFamily: fonts.RobotoBold }}
                >
                    50% OFF
                </Text>
                <Text
                    className="text-md"
                    style={{ fontFamily: fonts.RobotoMedium }}
                >
                    Summer special deal
                </Text>
                <CustomText
                    styles="mt-4"
                    text="Get discount for every transaction"
                />
            </View>
            <View className="w-1/2">
                <Image
                    source={require("@/assets/images/cart.png")}
                    resizeMode="cover"
                    className="w-[190px]"
                />
            </View>
        </View>
    );
};

export default PromotionCard;
