import { prisma } from "../../plugins/prisma.js";
import { DatabaseError } from "../../utils/errors.js";
import { logger } from "../../utils/logger.js";
import type { PropertyInput } from "./validators.js";

export async function getProperties() {
  try {
    logger.debug("Fetching all properties");
    return await prisma.property.findMany({
      include: {
        amenities: true,
      },
      orderBy: {
        title: "asc",
      },
    });
  } catch (error) {
    logger.error(error, "Error fetching properties");
    throw new DatabaseError("Failed to fetch properties");
  }
}

export async function createProperty(input: PropertyInput) {
  try {
    logger.debug({ input }, "Creating new property");
    
    const property = await prisma.property.create({
      data: {
        title: input.title,
        description: input.description,
        city: input.city,
        image: input.image,
        pricePerNight: input.pricePerNight,
      },
      include: {
        amenities: true,
      },
    });
    
    logger.info({ propertyId: property.id }, "Property created successfully");
    return property;
  } catch (error) {
    logger.error(error, "Error creating property");
    throw new DatabaseError("Failed to create property");
  }
}

export async function getPropertyById(id: string) {
  try {
    logger.debug({ id }, "Fetching property by ID");
    
    const property = await prisma.property.findUnique({
      where: { id },
      include: {
        amenities: true,
      },
    });
    
    return property;
  } catch (error) {
    logger.error(error, "Error fetching property");
    throw new DatabaseError("Failed to fetch property");
  }
}