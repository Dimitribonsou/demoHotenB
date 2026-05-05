import { getProperties, createProperty } from "./property.service.js";
import { PropertyInputSchema } from "./validators.js";
import { ValidationError } from "../../utils/errors.js";

export const resolvers = {
  Query: {
    properties: async () => {
      try {
        return await getProperties();
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    createProperty: async (
      _parent: unknown,
      args: { input: unknown }
    ) => {
      try {
        const validatedInput = PropertyInputSchema.parse(args.input);
        return await createProperty(validatedInput);
      } catch (error) {
        if (error instanceof Error) {
          throw new ValidationError(error.message);
        }
        throw error;
      }
    },
  },
};
