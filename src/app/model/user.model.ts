export interface user {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: {
        street: string;
        locality: string;
        city: string;
        state: string;
        zip: string;
    }

}
