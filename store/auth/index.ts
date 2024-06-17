import { create } from "zustand";
import { User } from "../users";

interface authUser {
    username: string;
    password: string;
}

interface AuthStore {
    user: User;
    logUser: (user: authUser) => boolean;
}

export const useAuth = create<AuthStore>((set) => ({
    user: { id: 0, username: "", balance: 0, password: "" },
    logUser(user) {
        set({
            user: { id: 1, username: "John D", balance: 0, password: "1234" },
        });

        return true;
    },
}));
