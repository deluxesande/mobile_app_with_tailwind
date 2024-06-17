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
            <Text className="text-4xl mb-8">{inputValue}</Text>
            <View className="flex-row flex-wrap justify-center">
                {numPadKeys.map((key) => (
                    <TouchableOpacity
                        key={key}
                        // Adjust the width and margin if necessary to fit three items per row
                        className="m-2 bg-gray-200 w-[25%] h-16 flex items-center justify-center rounded-full"
                        onPress={() => handleKeyPress(key)}
                    >
                        <Text className="text-2xl">
                            {key === "bksp" ? "⌫" : key}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default NumberPad;
