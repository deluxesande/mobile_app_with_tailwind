import CustomButton from "@/components/CustomButton";
import CustomText from "@/components/CustomText";
import colors from "@/constants/colors";
import fonts from "@/constants/fonts";
import { Alert, Image, ScrollView, Text, View } from "react-native";

const Profile = () => {
    const user = {
        username: "Amanda Jane",
        email: "amanda@gmail.com",
        phone: "+254 712 345 678",
    };

    const handleDelete = () => {
        Alert.alert(
            "Delete Account",
            "Are you sure you want to delete account?",
            [
                {
                    text: "Cancel",
                    onPress: () => {},
                    style: "cancel",
                },
                { text: "Yes", onPress: () => {}, style: "destructive" },
            ]
        );
    };

    return (
        <>
            <ScrollView
                className="px-4 py-6"
                style={{ backgroundColor: colors.main }}
            >
                <View
                    className="items-center rounded-md p-4"
                    style={{ backgroundColor: colors.white }}
                >
                    <View className="my-2 justify-center items-center">
                        <View className="w-32 h-32 justify-center items-center rounded-full mb-2">
                            <Image
                                source={require("@/assets/images/profile.png")}
                                resizeMode="contain"
                                className="w-full h-full rounded-full"
                            />
                        </View>
                    </View>

                    {/* User details */}
                    <View className="flex-1 my-2 justify-center items-center">
                        <View className="flex-row w-full my-2 h-20 px-4 justify-between items-center border border-slate-300 rounded-md">
                            <Text
                                className="text-lg text-black"
                                style={{ fontFamily: fonts.RobotoBold }}
                            >
                                Username
                            </Text>
                            <CustomText
                                styles="text-gray-500 text-base"
                                text={user.username}
                            />
                        </View>

                        <View className="flex-row w-full my-2 h-20 px-4 justify-between items-center border border-slate-300 rounded-md">
                            <Text
                                className="text-lg text-black"
                                style={{ fontFamily: fonts.RobotoBold }}
                            >
                                Email
                            </Text>
                            <CustomText
                                styles="text-gray-500 text-base"
                                text={user.email}
                            />
                        </View>

                        <View className="flex-row w-full my-2 h-20 px-4 justify-between items-center border border-slate-300 rounded-md">
                            <Text
                                className="text-lg text-black"
                                style={{ fontFamily: fonts.RobotoBold }}
                            >
                                Phone
                            </Text>
                            <CustomText
                                styles="text-gray-500 text-base"
                                text={user.phone}
                            />
                        </View>
                    </View>
                    {/* Delete Button */}
                    <View className="w-full">
                        <CustomButton
                            btnClassNames="bg-red-500 w-full"
                            textClassNames="text-white"
                            title="Delete"
                            onPress={handleDelete}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

export default Profile;
