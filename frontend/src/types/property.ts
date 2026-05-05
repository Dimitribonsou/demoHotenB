export interface Amenity {
  name: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  city: string;
  image: string;
  pricePerNight: number;
  amenities: Amenity[];
}

export interface PropertiesResponse {
  properties: Property[];
}
