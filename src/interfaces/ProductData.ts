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
    sizes: Size;
    colors: Color;
    categories: Category;
    price: number;
    description: string;
}

