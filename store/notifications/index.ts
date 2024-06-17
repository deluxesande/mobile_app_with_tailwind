import { create } from "zustand";

interface Notification {
    message: string;
    title?: string;
    date: string;
    read: boolean;
}

interface NotificationStore {
    notifications: Notification[];
    markAsRead: (notification: Notification) => boolean;
    deleteNotification: (notification: Notification) => boolean;
}

export const useNotification = create<NotificationStore>(() => ({
    notifications: [],
    markAsRead(notification) {
        // TODO - add logic to make notification as read
        return true;
    },
    deleteNotification(notification) {
        return true;
    },
}));
