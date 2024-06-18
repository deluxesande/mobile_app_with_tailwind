import { create } from "zustand";
import { User, useUsersStore } from "../users";
import { createSelectors } from "../utils/createSelectors";
import { produce } from "immer";

interface authUser {
    username: string;
    password: string;
}

function validateCredentials(
    username: string,
    password: string,
    user: User
): boolean {
    return username === user.username && password === user.password;
}

interface AuthStore {
    user: User;
    logUser: (userToLog: authUser) => boolean;
}

const initialState = {
    id: 0,
    username: "",
    balance: 0,
    password: "",
    email: "",
    phone: "",
};

export const useAuth = create<AuthStore>((set) => ({
    user: { ...initialState },
    logUser(userToLog) {
        // Assuming usersStore is accessible and contains an array of user objects
        const userFromStore = useUsersStore
            .getState()
            .findUserByUsername(userToLog.username);

        if (
            userFromStore &&
            validateCredentials(
                userToLog.username,
                userToLog.password,
                userFromStore
            )
        ) {
            set(
                produce((state: AuthStore) => {
                    state.user = userFromStore;
                })
            );
            return true;
        } else {
            return false;
        }
    },
}));

export const useAuthSelectors = createSelectors(useAuth);
