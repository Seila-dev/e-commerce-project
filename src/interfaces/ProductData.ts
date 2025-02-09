export interface Size {
    name: string;
}

export interface Color {
    name: string;
}

export interface Category {
    name: string;
}

export interface ProductData {
    id: number;
    name: string;
    image: string;
    color: string;
    sizes: string;
    colors: string;
    categories: string;
    price: number;
    description: string;
    created_at: string;
    updated_at: string;
    highlight: boolean;
}

