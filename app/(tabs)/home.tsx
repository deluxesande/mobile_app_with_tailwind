import CustomBottomSheetModal from "@/components/CustomBottomSheetModal";
import PromotionSection from "@/components/home/PromotionSection";
import ServicesSection from "@/components/home/ServicesSection";
import TransactionSection from "@/components/home/TransactionSection";
import WelcomeSection from "@/components/home/welcomeSection";
import colors from "@/constants/colors";
import React from "react";
import { ScrollView } from "react-native";

const Home = () => {
    return (
        <ScrollView
            className="px-4"
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: colors.white }}
        >
            <WelcomeSection />

            <ServicesSection />

            <PromotionSection />

            <TransactionSection />
        </ScrollView>
    );
};

export default Home;
