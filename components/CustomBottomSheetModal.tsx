import colors from "@/constants/colors";
import { useUsersStoreSelectors } from "@/store/users";
import {
    BottomSheetBackdrop,
    BottomSheetFlatList,
    BottomSheetModal,
    BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import UserCard from "./home/UserCard/UserCard";
import { useRouter } from "expo-router";
import fonts from "@/constants/fonts";
import RecentRecipient from "@/components/home/UserCard/RecentRecipient";
import CustomText from "./CustomText";

type Ref = BottomSheetModal;
interface Props {
    handleDismiss: () => void;
}

const CustomBottomSheetModal = React.forwardRef<Ref, Props>((props, ref) => {
    const snapPoints = useMemo(() => ["70%"], []);

    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                appearsOnIndex={0}
                disappearsOnIndex={-1}
                {...props}
            />
        ),
        []
    );

    const users = useUsersStoreSelectors.use.users();
    const router = useRouter();

    // TODO - Figure out the scroll views not working
    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={{ backgroundColor: colors.gray }}
            backgroundStyle={{ backgroundColor: colors.main }}
        >
            <BottomSheetScrollView>
                <View className="px-4 pt-2 flex-col items-center">
                    <View className="mb-4 w-full items-start">
                        <Text
                            className="text-2xl"
                            style={{ fontFamily: fonts.RobotoBold }}
                        >
                            Send To
                        </Text>
                    </View>

                    <View className="w-full h-12">
                        <TextInput
                            className="bg-slate-200 h-full px-4 rounded-md"
                            placeholder="Search for a recipient"
                        />
                    </View>

                    <View className="mt-4 h-32">
                        <Text
                            className="text-2xl text-gray-500 mb-2"
                            style={{ fontFamily: fonts.RobotoBold }}
                        >
                            Recent
                        </Text>
                        <BottomSheetFlatList
                            data={users}
                            renderItem={({ item }) => (
                                <RecentRecipient
                                    user={item}
                                    handlePress={() => {
                                        props.handleDismiss();
                                        router.push(`send/${item.id}`);
                                    }}
                                />
                            )}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        />
                    </View>

                    <View className="mt-4">
                        {users.map((user, index) => (
                            <UserCard
                                key={index}
                                user={user}
                                handlePress={() => {
                                    props.handleDismiss();
                                    router.push(`send/${user.id}`);
                                }}
                            />
                        ))}
                    </View>
                </View>
            </BottomSheetScrollView>
        </BottomSheetModal>
    );
});

export default CustomBottomSheetModal;
