
export interface Location {
    name: string;
    photo: string;
    id: string;
}

// DB Record Types
export interface Profile {
    userID: number;
    name: string;
}

export interface Transaction {
    id: number;
    date: string;
    amount: number;
    location: Location;
    host: User;
    guest: User;
}

export interface User {
    id: number;
    name: string;
    email: string;
    password: string;

}