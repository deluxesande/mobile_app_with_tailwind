import CustomText from "@/components/CustomText";
import fonts from "@/constants/fonts";
import { useAuthSelectors } from "@/store/auth";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomBottomSheetModal from "../CustomBottomSheetModal";

const WelcomeSection = () => {
    const user = useAuthSelectors.use.user();

    if (!user) return null;

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const handlePresentModal = () => bottomSheetModalRef.current?.present();
    const handleDismissModal = () => bottomSheetModalRef.current?.dismiss();

    const handleSend = () => {
        handlePresentModal();
    };

    return (
        <View>
            {/* BOTTOM SHEET */}
            <CustomBottomSheetModal
                ref={bottomSheetModalRef}
                handleDismiss={handleDismissModal}
            />
            {/* SECTION CODE */}
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
                        Hi, {user.username}
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
                        ${user.balance}
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
                    onPress={handleSend}
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
