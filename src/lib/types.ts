
export interface Location {
    name: string;
}

// DB Record Types
export interface Profile {
    userID: number;
    name: string;
}

export interface Transaction {
    id: string;
    amount: number;
    location: string;
    host: User["id"];
    guest: User["id"];
    date: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;

}