import fonts from "@/constants/fonts";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import CustomText from "@/components/CustomText";

const WelcomeSection = () => {
    return (
        <View>
            <View>
                <Image
                    source={require("@/assets/images/logo.png")}
                    resizeMode="contain"
                    className="h-16 w-32"
                />
            </View>
            <View className="flex flex-row items-center justify-between">
                <View>
                    <Text
                        className="text-xl"
                        style={{ fontFamily: fonts.RobotoBold }}
                    >
                        Hi, Samantha
                    </Text>
                    <Text
                        className="text-base text-gray-500"
                        style={{ fontFamily: fonts.RobotoRegular }}
                    >
                        Your available balance
                    </Text>
                </View>
                <View>
                    <Text
                        className="text-2xl"
                        style={{ fontFamily: fonts.IbmPlexBold }}
                    >
                        $4,590.00
                    </Text>
                </View>
            </View>
            <View className="w-full h-24 bg-black mt-6 px-8 rounded-md flex-row items-center justify-between">
                {/* Top Up */}
                <TouchableOpacity
                    className="items-center space-y-2"
                    onPress={() => {}}
                >
                    <Ionicons
                        name="add-circle-outline"
                        size={25}
                        style={{ color: "white" }}
                    />
                    <CustomText styles="text-white mt-3" text="Top Up" />
                </TouchableOpacity>

                {/* Send */}
                <TouchableOpacity
                    className="items-center space-y-2"
                    onPress={() => {}}
                >
                    <FontAwesome
                        name="send-o"
                        size={23}
                        style={{ color: "white" }}
                    />
                    <CustomText styles="text-white mt-3" text="Send" />
                </TouchableOpacity>

                {/* Withdraw */}
                <TouchableOpacity
                    className="items-center space-y-2"
                    onPress={() => {}}
                >
                    <FontAwesome
                        name="money"
                        size={25}
                        style={{ color: "white" }}
                    />
                    <CustomText styles="text-white mt-3" text="Withdraw" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default WelcomeSection;
