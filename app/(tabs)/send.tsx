import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";

const Send = () => {
    const router = useRouter();

    return (
        <ScrollView
            className="max-h-[100dvh]"
            showsVerticalScrollIndicator={false}
        >
            <View className="h-screen" style={{ backgroundColor: colors.main }}>
                <View className="items-center justify-center mt-10">
                    <Image
                        source={require("@/assets/images/profile.png")}
                        resizeMode="contain"
                        className="w-96 h-40"
                    />
                    <Text
                        className="mt-4 text-3xl"
                        style={{ fontFamily: fonts.IbmPlexBold }}
                    >
                        Nayantara V
                    </Text>
                    <Text
                        className="text-lg text-gray-500 mt-1"
                        style={{ fontFamily: fonts.RobotoMedium }}
                    >
                        +254 712345678
                    </Text>
                </View>
                <View
                    className="w-full h-1/2 flex-1 mt-6 px-4 pb-4 justify-end"
                    style={{ backgroundColor: colors.white }}
                >
                    <CustomButton
                        btnClassNames="bg-black"
                        textClassNames="text-white"
                        title="Send"
                        onPress={() => router.navigate("/success")}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Send;
