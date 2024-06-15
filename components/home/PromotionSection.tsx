import { FlatList, View } from "react-native";
import PromotionCard from "@/components/home/PromotionCards/PromotionCard";

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
                renderItem={({ item }) => <PromotionCard color={item.color} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default PromotionSection;
