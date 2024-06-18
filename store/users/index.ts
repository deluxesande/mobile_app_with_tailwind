import { create } from "zustand";
import { createSelectors } from "../utils/createSelectors";

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
    findUserByUsername: (username: string) => User | undefined;
}

export const useUsersStore = create<UserStore>((set) => ({
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
    findUserByUsername(username) {
        return this.users.find((user) => user.username === username);
    },
}));

export const useUsersStoreSelectors = createSelectors(useUsersStore);