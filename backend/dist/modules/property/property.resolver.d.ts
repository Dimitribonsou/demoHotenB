export declare const resolvers: {
    Query: {
        properties: () => Promise<({
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
    };
    Mutation: {
        createProperty: (_parent: unknown, args: {
            input: unknown;
        }) => Promise<{
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
    };
};
//# sourceMappingURL=property.resolver.d.ts.map