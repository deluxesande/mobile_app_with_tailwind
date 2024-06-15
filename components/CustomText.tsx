import fonts from "@/constants/fonts";
import React from "react";
import { Text } from "react-native";

interface customTextProps {
    styles?: string;
    text: string;
}

const CustomText = ({ text, styles }: customTextProps) => {
    return (
        <Text className={styles} style={{ fontFamily: fonts.RobotoRegular }}>
            {text}
        </Text>
    );
};

export default CustomText;
