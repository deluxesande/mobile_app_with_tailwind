import { View, Text, Image } from "react-native";
import React from "react";
import Transaction from "@/constants/objectTypes";
import colors from "@/constants/colors";
import CustomText from "@/components/CustomText";
import fonts from "@/constants/fonts";

interface cardProps {
    transaction: Transaction;
}

const TransactionCard = ({ transaction }: cardProps) => {
    return (
        <View className="h-16 flex-row items-center justify-between bg-white rounded-md my-1 px-4">
            <View className="flex-row items-center w-1/2 space-x-2">
                <Image
                    source={require("@/assets/images/profile.png")}
                    resizeMode="contain"
                    className="w-10"
                />
                <View className="flex-col justify-between">
                    <CustomText
                        styles="text-base"
                        text={transaction.user.username}
                    />
                    <CustomText
                        styles="text-xs text-gray-500 mt-1"
                        text={transaction.date}
                    />
                </View>
            </View>
            <View className="w-1/2 justify-end items-end">
                <Text
                    className="text-base"
                    style={{ fontFamily: fonts.IbmPlexBold }}
                >
                    ${transaction.amount}
                </Text>
            </View>
        </View>
    );
};

export default TransactionCard;
