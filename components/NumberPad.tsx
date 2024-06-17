import fonts from "@/constants/fonts";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface NumberPadProps {
    onValueChange: React.Dispatch<React.SetStateAction<string>>;
}

const numPadKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "0",
    "bksp",
];

const NumberPad: React.FC<NumberPadProps> = ({ onValueChange }) => {
    const [inputValue, setInputValue] = useState("");

    const handleKeyPress = (value: string) => {
        let newValue = inputValue;
        if (value === "bksp") {
            newValue = inputValue.slice(0, -1);
        } else {
            newValue = inputValue + value;
        }
        setInputValue(newValue);
        onValueChange(newValue);
    };

    return (
        <View className="flex-1 items-center justify-center">
            <Text
                className="text-4xl mb-8"
                style={{ fontFamily: fonts.IbmPlexBold }}
            >
                ${inputValue}
            </Text>
            <View className="flex-row flex-wrap justify-center">
                {numPadKeys.map((key) => (
                    <TouchableOpacity
                        key={key}
                        // Adjust the width and margin if necessary to fit three items per row
                        className={`w-[30%] h-16 flex items-center justify-center border-gray-200 border-r border-b ${
                            ["3", "6", "9", "bksp"].includes(key)
                                ? "border-r-0"
                                : ""
                        } ${
                            [".", "0", "bksp"].includes(key) ? "border-b-0" : ""
                        }`}
                        onPress={() => handleKeyPress(key)}
                    >
                        <Text
                            className="text-2xl"
                            style={{ fontFamily: fonts.RobotoMedium }}
                        >
                            {key === "bksp" ? (
                                <Ionicons size={30} name="backspace-outline" />
                            ) : (
                                key
                            )}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default NumberPad;
