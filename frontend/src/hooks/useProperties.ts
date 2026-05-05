import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import { graphqlClient } from '../api/graphqlClient';
import type { PropertiesResponse } from '../types/property';

const GET_PROPERTIES = gql`
  query GetProperties {
    properties {
      id
      title
      description
      city
      image
      pricePerNight
      amenities {
        name
      }
    }
  }
`;

export const useProperties = () => {
  return useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      const data = await graphqlClient.request<PropertiesResponse>(GET_PROPERTIES);
      return data.properties;
    },
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
