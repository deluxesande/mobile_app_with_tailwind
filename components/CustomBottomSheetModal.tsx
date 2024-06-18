import React, { useMemo, useRef } from "react";
import { View, Text } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const CustomBottomSheetModal = React.forwardRef((props, ref) => {
    const snapPoints = useMemo(() => ["50%"], []);

    // Use the forwarded ref to allow parent components to control this modal
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    React.useImperativeHandle(ref, () => ({
        present: () => {
            bottomSheetModalRef.current?.present();
        },
        dismiss: () => {
            bottomSheetModalRef.current?.dismiss();
        },
    }));

    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
        >
            <View>
                <Text>CustomBottomSheetModal</Text>
            </View>
        </BottomSheetModal>
    );
});

export default CustomBottomSheetModal;
