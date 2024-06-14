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
                style={{
                    padding: 5,
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "orange",
                    width: "50%",
                }}
                onPress={() => router.push("/home")}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;
