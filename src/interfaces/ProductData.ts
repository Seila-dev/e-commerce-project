export interface Size {
    id: number;
    name: string;
}

export interface Color {
    id: number;
    name: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface Item {
    id: number;
    name: string;
}

export interface ProductData {
    id: number;
    name: string;
    image: string;
    sizes: Size;
    colors: Color;
    categories: Category;
    price: number;
    description: string;
    created_at: string;
    updated_at: string;
    highlight: boolean;
    ean: string;
}

