import { create } from "zustand";

interface UserStore {
    users: object;
}

interface User {
    user: object;
}

export const useUsersStore = create<UserStore>(() => ({
    users: [
        { id: 1, username: "John D", balance: 0, password: "1234" },
        { id: 2, username: "Sarah S", balance: 0, password: "1234" },
    ],
}));

export const useLoggedUser = create<User>((set) => ({
    user: {},
}));
