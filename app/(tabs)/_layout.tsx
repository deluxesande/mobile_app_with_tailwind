import { Tabs, useRouter } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import colors from "@constants/colors";
import { View } from "react-native";

export default function TabLayout() {
    const router = useRouter();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.black,
                tabBarInactiveTintColor: colors.gray,
                tabBarStyle: {
                    height: 80,
                    paddingBottom: 5,
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarLabel: ({ focused }) => (
                        <View
                            className={`h-1 w-1 bg-black rounded-full ${
                                focused ? "block mb-4" : "hidden"
                            }`}
                        />
                    ),
                    tabBarLabelPosition: "below-icon",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    title: "Notifications",
                    tabBarLabel: ({ focused }) => (
                        <View
                            className={`h-1 w-1 bg-black rounded-full ${
                                focused ? "block mb-4" : "hidden"
                            }`}
                        />
                    ),
                    tabBarLabelPosition: "below-icon",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={
                                focused
                                    ? "notifications"
                                    : "notifications-outline"
                            }
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarLabel: ({ focused }) => (
                        <View
                            className={`h-1 w-1 bg-black rounded-full ${
                                focused ? "block mb-4" : "hidden"
                            }`}
                        />
                    ),
                    tabBarLabelPosition: "below-icon",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "person" : "person-outline"}
                            color={color}
                        />
                    ),
                }}
            />

            {/* Hidden tabs */}
            <Tabs.Screen
                name="send"
                options={{
                    title: "Send",
                    tabBarButton: () => null,
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name="success"
                options={{
                    title: "Success",
                    tabBarButton: () => null,
                    headerShown: true,
                }}
            />
        </Tabs>
    );
}
