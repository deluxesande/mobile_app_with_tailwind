import CustomButton from "@/components/CustomButton";
import fonts from "@/constants/fonts";
import colors from "@constants/colors";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const WelcomeScreen = () => {
    const router = useRouter();

    return (
        <ScrollView style={{ backgroundColor: colors.white }}>
            <View
                className="items-center justify-center"
                style={{ backgroundColor: colors.main }}
            >
                <Image
                    source={require("@/assets/images/logo.png")}
                    resizeMode="contain"
                    className="h-16 w-32"
                />
            </View>
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
                <View className="mt-10 w-full">
                    <View
                        className="flex w-full px-4 items-center justify-center"
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
                                Make your payment experience more better today.
                                No additional admin fee.
                            </Text>
                        </View>

                        <View className="w-full mt-12 mb-6">
                            <CustomButton
                                title="Login"
                                btnClassNames="bg-black my-2"
                                textClassNames="text-white"
                                onPress={() => router.navigate("/login")}
                            />
                            <CustomButton
                                title="Sign Up"
                                btnClassNames="border-black border"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default WelcomeScreen;
