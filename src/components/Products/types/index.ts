export interface ProductData {
    id: string;
    name: string;
    price: number;
    currency:  string;
};

export type FreeProductData = Partial<ProductData>;

export type SomeObject = Record<string, string>;

const myObj: Record<string, unknown> = {
    asd : "1111"
}