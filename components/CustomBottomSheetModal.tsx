import colors from "@/constants/colors";
import { useUsersStoreSelectors } from "@/store/users";
import {
    BottomSheetBackdrop,
    BottomSheetFlatList,
    BottomSheetModal,
} from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo } from "react";
import { TextInput, View } from "react-native";
import UserCard from "./home/UserCard/UserCard";
import { useRouter } from "expo-router";

type Ref = BottomSheetModal;
interface Props {
    handleDismiss: () => void;
}

const CustomBottomSheetModal = React.forwardRef<Ref, Props>((props, ref) => {
    const snapPoints = useMemo(() => ["60%"], []);

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

    return (
        <BottomSheetModal
            ref={ref}
            index={0}
            snapPoints={snapPoints}
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={{ backgroundColor: colors.gray }}
            backgroundStyle={{ backgroundColor: colors.main }}
        >
            <View className="px-4 pt-2 flex-col items-center">
                <View className="w-full h-12">
                    <TextInput
                        style={{
                            backgroundColor: "#ddd",
                            height: "100%",
                            paddingHorizontal: 10,
                            borderRadius: 8,
                        }}
                        placeholder="Search for a recipient"
                    />
                </View>

                <View className="mt-4">
                    <BottomSheetFlatList
                        data={users}
                        renderItem={({ item }) => (
                            <UserCard
                                user={item}
                                handlePress={() => {
                                    props.handleDismiss();
                                    router.push(`send/${item.username}`);
                                }}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </BottomSheetModal>
    );
});

export default CustomBottomSheetModal;
