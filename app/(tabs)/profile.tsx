import colors from "@/constants/colors";
import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

const Profile = () => {
    return (
        <SafeAreaView
            className="flex-1"
            style={{ backgroundColor: colors.white }}
        >
            <ScrollView className="mx-4">
                <Text>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
