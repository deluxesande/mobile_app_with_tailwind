import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import React from "react";

const Login = () => {
    const router = useRouter();

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerTitle: "",
                    headerShadowVisible: false,
                }}
            />
            <Text>Login</Text>
            <TouchableOpacity
                className="p-1 items-center justify-center bg-orange-400 w-1/2"
                onPress={() => router.push("/home")}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;
