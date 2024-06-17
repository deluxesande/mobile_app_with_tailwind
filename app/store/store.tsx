import { create } from "zustand";

type User = {
    id: number;
    username: string;
    balance: number;
    password: string;
};

interface UserStore {
    users: User[];
    addUser: (user: User) => void;
}

export const useUsersStore = create<UserStore>(() => ({
    users: [
        { id: 1, username: "John D", balance: 0, password: "1234" },
        { id: 2, username: "Sarah S", balance: 0, password: "1234" },
    ],
    addUser(user) {
        console.log(user);
    },
}));
