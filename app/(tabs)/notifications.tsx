import CustomText from "@/components/CustomText";
import NotificationCard from "@/components/Notifications/NotificationCard";
import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const notifications = [1, 2, 3, 4];

const Notifications = () => {
    return (
        <ScrollView
            className="px-4"
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: colors.white }}
        >
            <View className="flex-row items-center justify-between w-full my-4">
                <Text
                    className="text-3xl"
                    style={{ fontFamily: fonts.RobotoBold }}
                >
                    Notifications
                </Text>
                <CustomText styles="text-base text-gray-500" text="Clear all" />
            </View>
            {notifications.map((notification, index) => (
                <NotificationCard key={index} />
            ))}
        </ScrollView>
    );
};

export default Notifications;
