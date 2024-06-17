import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import CustomText from "@/components/CustomText";
import RecipientCard from "@/components/home/TransactionCards/RecipientCard";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const Success = () => {
    const router = useRouter();

    return (
        <ScrollView
            className="px-4 py-6"
            style={{ backgroundColor: colors.main }}
            showsVerticalScrollIndicator={false}
        >
            <View
                className="h-screen rounded-md p-4"
                style={{ backgroundColor: colors.white }}
            >
                <View className="w-full items-center">
                    <Image
                        source={require("@/assets/images/super_hero.png")}
                        resizeMode="contain"
                        className="w-full h-52"
                    />
                    <Text
                        className="text-3xl"
                        style={{ fontFamily: fonts.IbmPlexBold }}
                    >
                        Transfer Success
                    </Text>
                    <CustomText
                        styles="text-gray-500  text-center mt-2"
                        text="Your money has been successfully sent to Nayantara V"
                    />
                </View>

                <View className="mt-6 w-full items-center">
                    <CustomText
                        styles="text-gray-500 text-lg"
                        text="Total Transfer"
                    />
                    <Text
                        className="text-4xl mt-2"
                        style={{ fontFamily: fonts.IbmPlexBold }}
                    >
                        $132.00
                    </Text>

                    <View className="border border-dashed border-gray-500 w-full my-4" />
                </View>

                <View>
                    <Text
                        className="text-lg text-gray-500 mb-4"
                        style={{ fontFamily: fonts.RobotoMedium }}
                    >
                        Recipient
                    </Text>
                    <RecipientCard />

                    <View className="mt-6">
                        <CustomButton
                            btnClassNames="bg-black"
                            textClassNames="text-white"
                            title="Done"
                            onPress={() => router.navigate("/home")}
                        />
                        <CustomButton
                            btnClassNames="bg-white mt-2"
                            textClassNames="text-black"
                            title="Transfer more money"
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Success;
