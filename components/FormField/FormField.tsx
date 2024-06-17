import { Text, View, TextInput, KeyboardTypeOptions } from "react-native";
import { useState } from "react";
import fonts from "@/constants/fonts";

interface Props {
    title: string;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const FormField = ({
    title,
    keyboardType = "default",
    placeholder,
    setValue,
}: Props) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <View className="my-2">
            <Text
                className="text-base text-gray-500"
                style={{ fontFamily: fonts.RobotoRegular }}
            >
                {title}
            </Text>

            <View className="justify-center items-center flex-row mt-4 h-12">
                <View className="flex-1 mr-2 justify-center items-center rounded-md h-full">
                    <TextInput
                        className="w-full h-full px-4 bg-slate-200 text-black rounded-md"
                        keyboardType={keyboardType}
                        placeholder={placeholder}
                        secureTextEntry={
                            (title.match("Password") && !showPassword) ??
                            undefined
                        }
                        onChangeText={(text) => setValue(text)}
                    />
                </View>
            </View>
        </View>
    );
};

export default FormField;
