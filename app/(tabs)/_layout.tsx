import { Tabs, useRouter } from "expo-router";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function TabLayout() {
    const router = useRouter();

    // TODO - make the header icons a custom component

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#777",
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
                }}
            >
                <Tabs.Screen
                    name="index"
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
                    name="profile"
                    options={{
                        title: "Profile",
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                name={focused ? "person" : "person-outline"}
                                color={color}
                            />
                        ),
                        headerLeft: () => (
                            <Ionicons
                                name="chevron-back"
                                size={28}
                                style={{ marginHorizontal: 10 }}
                                onPress={() => router.back()}
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
        </>
    );
}
