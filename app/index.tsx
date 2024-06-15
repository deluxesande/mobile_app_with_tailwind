import CustomButton from "@/components/CustomButton";
import fonts from "@/constants/fonts";
import colors from "@constants/colors";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { SafeAreaView, ScrollView, Image, Text, View } from "react-native";

const WelcomeScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView
            className="flex-1"
            style={{ backgroundColor: colors.white }}
        >
            <Stack.Screen
                options={{
                    headerShadowVisible: false,
                    headerTitle: () => (
                        <Image
                            source={require("@/assets/images/logo.png")}
                            resizeMode="contain"
                            className="h-16 w-32"
                        />
                    ),
                    headerStyle: {
                        backgroundColor: colors.main,
                    },
                    headerTitleAlign: "center",
                }}
            />
            <ScrollView>
                <View>
                    <View
                        className="min-h-1/2 items-center"
                        style={{ backgroundColor: colors.main }}
                    >
                        <Image
                            source={require("@/assets/images/welcome_screen.png")}
                            resizeMode="cover"
                            className="mb-6"
                        />
                    </View>
                    <View className="mx-4 mt-10">
                        <View
                            className="flex w-full items-center justify-center"
                            style={{ backgroundColor: colors.white }}
                        >
                            <View className="flex items-center justify-center">
                                <Text
                                    className="text-[31.5px]"
                                    style={{ fontFamily: fonts.IbmPlexBold }}
                                >
                                    Easy Online Payment
                                </Text>
                                <Text
                                    className="text-center text-base text-gray-500 mt-2"
                                    style={{ fontFamily: fonts.RobotoRegular }}
                                >
                                    Make your payment experience more better
                                    today. No additional admin fee.
                                </Text>
                            </View>

                            <View className="w-full mt-12">
                                <CustomButton
                                    title="Login"
                                    btnClassNames="bg-black my-2"
                                    textClassNames="text-white"
                                    onPress={() => router.navigate("/login")}
                                />
                                <CustomButton
                                    title="Sign Up"
                                    btnClassNames="border-black border-2"
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default WelcomeScreen;
