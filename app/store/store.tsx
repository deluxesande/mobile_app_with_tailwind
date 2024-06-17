import { create } from "zustand";

type User = {
    id: number;
    username: string;
    balance: number;
    password: string;
};

interface authUser {
    username: string;
    password: string;
}

interface UserStore {
    users: User[];
}

interface AuthStore {
    user: User;
    logUser: (user: authUser) => boolean;
}

// STORES
export const useUsersStore = create<UserStore>(() => ({
    users: [
        { id: 1, username: "John D", balance: 0.0, password: "1234" },
        { id: 2, username: "Sarah S", balance: 0.0, password: "1234" },
    ],
}));

export const useAuth = create<AuthStore>((set) => ({
    user: { id: 0, username: "", balance: 0, password: "" },
    logUser(user) {
        set({
            user: { id: 1, username: "John D", balance: 0, password: "1234" },
        });

        return true;
    },
}));
