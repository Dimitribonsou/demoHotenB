import { z } from "zod";
export declare const PropertyInputSchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    city: z.ZodString;
    pricePerNight: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    city: string;
    pricePerNight: number;
}, {
    title: string;
    description: string;
    city: string;
    pricePerNight: number;
}>;
export declare const AmenityInputSchema: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type PropertyInput = z.infer<typeof PropertyInputSchema>;
export type AmenityInput = z.infer<typeof AmenityInputSchema>;
//# sourceMappingURL=validators.d.ts.map