import { useQuery, gql } from '@apollo/client';
import { Ship } from '../generated/graphql';

const GET_SHIPS = gql`
  query GetShips($limit: Int!, $order: String!, $sort: String!) {
    ships(limit: $limit, order: $order, sort: $sort) {
        weight_kg
        type
        roles
        name
        image
        home_port
    }
  }
`

const useGetShips = (order: string): Array<Ship> | undefined => {
    const { data } = useQuery(GET_SHIPS, {
        variables: { limit: 10, sort: 'weight_kg', order: order }
    });
    return data?.ships;
}

export default useGetShips;