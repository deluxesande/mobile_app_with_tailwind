import { FlatList, View } from "react-native";
import PromotionCards from "@/components/home/PromotionCards/PromotionCards";

const PromotionSection = () => {
    const data = [
        { color: "bg-blue-200" },
        { color: "bg-pink-200" },
        { color: "bg-yellow-200" },
    ];
    return (
        <View className="w-full">
            <FlatList
                data={data}
                renderItem={({ item }) => <PromotionCards color={item.color} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default PromotionSection;
