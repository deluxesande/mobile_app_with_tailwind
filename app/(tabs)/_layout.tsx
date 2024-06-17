import { Tabs, useRouter } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import colors from "@constants/colors";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import fonts from "@/constants/fonts";

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
                    title: "",
                    tabBarButton: () => null,
                    headerShown: true,
                    headerShadowVisible: false,
                    headerStyle: {
                        backgroundColor: colors.main,
                    },
                    headerStatusBarHeight: 0,
                    headerLeft: () => (
                        <View className="ml-4 flex-row items-center">
                            <TouchableOpacity
                                className=""
                                onPress={() => router.back()}
                            >
                                <Ionicons name="arrow-back" size={25} />
                            </TouchableOpacity>
                            <Text
                                className="text-2xl ml-4 mt-[-4px]"
                                style={{ fontFamily: fonts.IbmPlexMedium }}
                            >
                                Send Money
                            </Text>
                        </View>
                    ),
                    headerRight: () => (
                        <View className="mr-4 items-center">
                            <Ionicons size={25} name="search" />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="success/[id]"
                options={{
                    title: "",
                    tabBarButton: () => null,
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: colors.main,
                    },
                    headerStatusBarHeight: 0,
                    headerLeft: () => (
                        <View className="ml-4 flex-row items-center">
                            <TouchableOpacity
                                className=""
                                onPress={() => router.back()}
                            >
                                <Ionicons name="arrow-back" size={25} />
                            </TouchableOpacity>
                            <Text
                                className="text-2xl ml-4 mt-[-4px]"
                                style={{ fontFamily: fonts.IbmPlexMedium }}
                            >
                                Transfer Receipt
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}
