import { z } from "zod";
export const PropertyInputSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    city: z.string().min(2, "City must be at least 2 characters"),
    pricePerNight: z.number().positive("Price must be positive"),
});
export const AmenityInputSchema = z.object({
    name: z.string().min(2, "Amenity name must be at least 2 characters"),
});
//# sourceMappingURL=validators.js.map