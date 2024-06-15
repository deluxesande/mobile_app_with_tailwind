import { View, Text, FlatList } from "react-native";
import React from "react";
import fonts from "@/constants/fonts";
import TransactionCard from "./TransactionCards/TransactionCard";

const TransactionSection = () => {
    const transactions = [
        {
            user: {
                username: "Raj K",
                profilePic: "profile.png",
            },
            amount: 240,
            date: "February 24, 2024",
        },
        {
            user: {
                username: "John D",
                profilePic: "profile.png",
            },
            amount: 2420,
            date: "February 25, 2024",
        },
        {
            user: {
                username: "Jane S",
                profilePic: "profile.png",
            },
            amount: 450,
            date: "February 26, 2024",
        },
    ];

    // TODO - check on scroll view and flat list having the same orientation

    return (
        <View className="mt-6">
            <View className="flex-row items-center justify-between">
                <Text
                    className="text-2xl"
                    style={{ fontFamily: fonts.RobotoBold }}
                >
                    Recent Transaction
                </Text>
                <Text
                    className="text-base text-gray-500"
                    style={{ fontFamily: fonts.RobotoMedium }}
                >
                    See All
                </Text>
            </View>

            <View className="mt-4">
                {transactions.map((transaction, index) => (
                    <TransactionCard key={index} transaction={transaction} />
                ))}
            </View>
        </View>
    );
};

export default TransactionSection;
