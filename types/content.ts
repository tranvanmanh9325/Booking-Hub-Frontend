export interface Content {
    id: string | number;
    name: string;
    type: string;
    price: string;
    description?: string;
    thumbnail?: string;
    images?: string; // JSON string of array
    status: 'active' | 'inactive';
}