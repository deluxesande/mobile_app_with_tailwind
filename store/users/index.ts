import { create } from "zustand";

export type User = {
    id: number;
    username: string;
    email: string;
    phone: string;
    balance: number;
    password: string;
};

interface UserStore {
    users: User[];
}

// STORES
export const useUsersStore = create<UserStore>(() => ({
    users: [
        {
            id: 1,
            username: "John D",
            balance: 0.0,
            password: "1234",
            email: "john@gmail.com",
            phone: "+254 712345678",
        },
        {
            id: 2,
            username: "Sarah S",
            balance: 0.0,
            password: "1234",
            email: "sarah@gmail.com",
            phone: "+254 712345678",
        },
    ],
}));
