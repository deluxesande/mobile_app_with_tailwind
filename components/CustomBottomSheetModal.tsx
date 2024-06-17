import { View, Text } from "react-native";
import React, { useMemo } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

const CustomBottomSheetModal = () => {
    const snapPoints = useMemo(() => ["50%"], []);

    return (
        <BottomSheet snapPoints={snapPoints}>
            <View>
                <Text>CustomBottomSheetModal</Text>
            </View>
        </BottomSheet>
    );
};

export default CustomBottomSheetModal;
