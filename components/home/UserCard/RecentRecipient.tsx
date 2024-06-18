import CustomText from "@/components/CustomText";
import { User } from "@/store/users";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";

interface Props {
    user: User;
    handlePress: () => void;
}

const RecentRecipient = ({ user, handlePress }: Props) => {
    return (
        <TouchableOpacity
            className="mx-2 flex-col items-center h-20"
            onPress={handlePress}
        >
            <View className="w-14 h-14 rounded-full bg-gray-700 p-0">
                <Image
                    source={require("@/assets/images/profile.png")}
                    resizeMode="contain"
                    className="w-full h-full"
                />
            </View>
            <CustomText
                styles="mt-1 text-sm text-gray-500"
                text={user.username}
            />
        </TouchableOpacity>
    );
};

export default RecentRecipient;
