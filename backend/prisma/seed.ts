import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    console.log(" Starting database seeding...");

    // Clear existing data
    await prisma.property.deleteMany({});
    await prisma.amenity.deleteMany({});

    // Create amenities
    const wifi = await prisma.amenity.create({
      data: { name: "Wi-Fi" },
    });

    const pool = await prisma.amenity.create({
      data: { name: "Piscine" },
    });

    const jacuzzi = await prisma.amenity.create({
      data: { name: "Jacuzzi" },
    });

    // Create property with amenities
    const property = await prisma.property.create({
      data: {
        title: "Maison les Lièvres",
        description: "Oasis de détente climatisée avec piscine et jacuzzi",
        city: "Panazol",
        image: "https://images.unsplash.com/photo-1663192365267-bc14704f5855?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pricePerNight: 120,
        amenities: {
          connect: [
            { id: wifi.id },
            { id: pool.id },
            { id: jacuzzi.id }
          ],
        },
      },
      include: {
        amenities: true,
      },
    });

    console.log("✅ Seeding completed successfully!");
    console.log("📍 Created property:", property);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main();
