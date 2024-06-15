interface User {
    username: string;
    profilePic: string;
}
interface Transaction {
    user: User;
    amount: number;
    date: string;
}

export default Transaction;
