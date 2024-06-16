import PromotionSection from "@/components/home/PromotionSection";
import ServicesSection from "@/components/home/ServicesSection";
import TransactionSection from "@/components/home/TransactionSection";
import WelcomeSection from "@/components/home/welcomeSection";
import React from "react";
import { ScrollView } from "react-native";

const Home = () => {
    return (
        <ScrollView className="mx-4" showsVerticalScrollIndicator={false}>
            <WelcomeSection />

            <ServicesSection />

            <PromotionSection />

            <TransactionSection />
        </ScrollView>
    );
};

export default Home;
