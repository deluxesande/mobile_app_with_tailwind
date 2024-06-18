import { create } from "zustand";
import { createSelectors } from "../utils/createSelectors";
import { users } from "@/data/users";

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
    users: users,
    // To be used only in another store
    findUserByUsername(username) {
        return this.users.find((user) => user.username === username);
    },
}));

export const useUsersStoreSelectors = createSelectors(useUsersStore);
