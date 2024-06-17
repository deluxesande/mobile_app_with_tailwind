import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import FormField from "@/components/FormField/FormField";
import fonts from "@/constants/fonts";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { useAuth } from "../store/store";

const Login = () => {
    const router = useRouter();
    const logUser = useAuth((state) => state.logUser);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (username != "" && password != "") {
            if (logUser({ username, password })) router.push("/home");
        }
    };

    return (
        <ScrollView className="px-4">
            <View className="w-full h-screen items-center justify-center">
                <View className="w-full">
                    <Text
                        className="text-2xl"
                        style={{ fontFamily: fonts.RobotoMedium }}
                    >
                        Login
                    </Text>
                    <CustomText
                        styles="text-gray-500 text-base"
                        text="Get started"
                    />

                    {/* INPUTS */}
                    <FormField
                        title="Username"
                        placeholder="John Doe"
                        setValue={setUsername}
                    />
                    <FormField
                        title="Password"
                        placeholder="Min. of 8 characters"
                        setValue={setPassword}
                    />
                    <CustomButton
                        btnClassNames="bg-black my-6"
                        textClassNames="text-white"
                        title="Log In"
                        onPress={handleLogin}
                    />
                    <View className="flex-row items-center">
                        <CustomText
                            styles="text-base"
                            text="Do not have an account?"
                        />
                        <TouchableOpacity className="ml-2">
                            <CustomText
                                styles="text-base text-blue-500 underline"
                                text="Sign Up"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Login;
