import colors from "@constants/colors";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";

const WelcomeScreen = () => {
    const router = useRouter();

    setTimeout(() => {
        router.navigate("/login");
    }, 2000);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.blueFill }}>
            <Stack.Screen
                options={{
                    headerTitle: "",
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: colors.blueFill,
                    },
                }}
            />
            <ScrollView style={{ marginVertical: 10, marginHorizontal: 10 }}>
                <Text>Welcome screen</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default WelcomeScreen;
