import { SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";
import colors from "@/constants/colors";

const Notifications = () => {
    return (
        <SafeAreaView
            className="flex- 1"
            style={{ backgroundColor: colors.white }}
        >
            <ScrollView className="mx-4">
                <Text>Notifications</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Notifications;
