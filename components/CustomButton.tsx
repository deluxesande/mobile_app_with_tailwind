import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import React from "react";
import fonts from "@/constants/fonts";

interface ButtonProps {
    title: string;
    btnClassNames?: string;
    textClassNames?: string;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const CustomButton = ({
    title,
    btnClassNames = "",
    textClassNames = "",
    onPress,
}: ButtonProps) => {
    return (
        <TouchableOpacity
            className={`w-full px-4 py-4 rounded-md ${btnClassNames}`}
            onPress={onPress}
        >
            <Text
                className={`text-base text-center font-medium ${textClassNames}`}
                style={{ fontFamily: fonts.RobotoRegular }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
