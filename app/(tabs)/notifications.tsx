import NotificationCard from "@/components/Notifications/NotificationCard";
import React from "react";
import { ScrollView } from "react-native";

const notifications = [1, 2, 3];

const Notifications = () => {
    return (
        <ScrollView className="mx-4">
            {notifications.map((notification, index) => (
                <NotificationCard key={index} />
            ))}
        </ScrollView>
    );
};

export default Notifications;
