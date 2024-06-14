import { Tabs, useRouter } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/MaterialIcons";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Image } from "react-native";
import colors from "@constants/colors";

export default function TabLayout() {
    const router = useRouter();

    // TODO - make the header icons a custom component

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.subtleCtaColor,
                tabBarInactiveTintColor: "#777",
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                },
                headerShadowVisible: false,
                headerTitle: "",
                headerStyle: {
                    backgroundColor: "transparent",
                },
                headerRight: () => (
                    <Ionicons
                        name="menu"
                        size={28}
                        style={{ marginHorizontal: 10 }}
                        onPress={() => {}}
                    />
                ),
                headerLeft: () => (
                    <Image
                        source={require("../../assets/images/react-logo.png")}
                        resizeMode="contain"
                        style={{ width: 40, marginHorizontal: 10 }}
                    />
                ),
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "home" : "home-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="projects"
                options={{
                    title: "Projects",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "cube" : "cube-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "person" : "person-outline"}
                            color={color}
                        />
                    ),
                    headerRight: () => (
                        <Ionicons
                            name="share"
                            size={28}
                            style={{ marginHorizontal: 10 }}
                            onPress={() => {}}
                        />
                    ),
                }}
            />
        </Tabs>
    );
}
