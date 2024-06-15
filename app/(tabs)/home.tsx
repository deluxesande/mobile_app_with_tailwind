import PromotionSection from "@/components/home/PromotionSection";
import ServicesSection from "@/components/home/ServicesSection";
import TransactionSection from "@/components/home/TransactionSection";
import WelcomeSection from "@/components/home/welcomeSection";
import colors from "@/constants/colors";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";

const Home = () => {
    return (
        <SafeAreaView
            className="flex-1"
            style={{ backgroundColor: colors.white }}
        >
            <ScrollView className="mx-4" showsVerticalScrollIndicator={false}>
                <WelcomeSection />

                <ServicesSection />

                <PromotionSection />

                <TransactionSection />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
