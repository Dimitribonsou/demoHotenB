import type { PropertyInput } from "./validators.js";
export declare function getProperties(): Promise<({
    amenities: {
        name: string;
        id: string;
    }[];
} & {
    title: string;
    description: string;
    city: string;
    pricePerNight: number;
    id: string;
    createdAt: Date;
    updatedAt: Date;
})[]>;
export declare function createProperty(input: PropertyInput): Promise<{
    amenities: {
        name: string;
        id: string;
    }[];
} & {
    title: string;
    description: string;
    city: string;
    pricePerNight: number;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare function getPropertyById(id: string): Promise<({
    amenities: {
        name: string;
        id: string;
    }[];
} & {
    title: string;
    description: string;
    city: string;
    pricePerNight: number;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}) | null>;
//# sourceMappingURL=property.service.d.ts.map