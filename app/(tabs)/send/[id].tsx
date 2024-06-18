import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import CustomButton from "@/components/CustomButton";
import { useLocalSearchParams, useRouter } from "expo-router";
import NumberPad from "@/components/NumberPad";

const Send = () => {
    const router = useRouter();
    const params = useLocalSearchParams();

    const userID = params.id;
    // TODO - add a method to get a single user

    const [amount, setAmount] = useState("0");

    const handleSend = () => {
        router.navigate(`/success/${amount}`);
    };

    return (
        <ScrollView
            className="max-h-[100dvh]"
            showsVerticalScrollIndicator={false}
        >
            <View className="h-screen" style={{ backgroundColor: colors.main }}>
                <View className="items-center justify-center mt-6">
                    <Image
                        source={require("@/assets/images/profile.png")}
                        resizeMode="contain"
                        className="w-96 h-24"
                    />
                    <Text
                        className="mt-4 text-2xl"
                        style={{ fontFamily: fonts.IbmPlexBold }}
                    >
                        Nayantara V
                    </Text>
                    <Text
                        className="text-base text-gray-500 mt-1"
                        style={{ fontFamily: fonts.RobotoMedium }}
                    >
                        +254 712345678
                    </Text>
                </View>
                <View
                    className="w-full min-h-1/2 flex-1 mt-6 px-4 pb-4"
                    style={{ backgroundColor: colors.white }}
                >
                    <NumberPad onValueChange={setAmount} />
                    <CustomButton
                        btnClassNames="bg-black"
                        textClassNames="text-white"
                        title="Send"
                        onPress={handleSend}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Send;
