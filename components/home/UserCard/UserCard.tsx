import CustomText from "@/components/CustomText";
import colors from "@/constants/colors";
import React from "react";
import { Image, View } from "react-native";
import { User } from "@/store/users";

interface Props {
    user: User;
}

const UserCard = ({ user }: Props) => {
    return (
        <View
            className="h-20 flex-row items-center justify-between rounded-md my-1 px-4 shadow"
            style={{ backgroundColor: colors.white }}
        >
            <View className="flex-row items-center space-x-2">
                <Image
                    source={require("@/assets/images/profile.png")}
                    resizeMode="contain"
                    className="w-10"
                />
                <View className="flex-col flex-1 items-center">
                    <View className="flex-row w-full items-center justify-between">
                        <CustomText styles="text-base" text={user.username} />
                        <CustomText
                            styles="text-xs text-gray-500"
                            text={user.phone}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default UserCard;
