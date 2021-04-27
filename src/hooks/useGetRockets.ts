import { useQuery, gql } from '@apollo/client';
import { Rocket } from '../generated/graphql';

const GET_ROCKETS = gql`
  query GetRockets($limit: Int!) {
    rockets(limit: $limit) {
        company
        cost_per_launch
        country
        description
        first_flight
        mass {
            kg
        }
        success_rate_pct
        wikipedia
        name
    }
  }
`

const useGetRockets = (): Array<Rocket> | undefined => {
    const { data } = useQuery(GET_ROCKETS, {
        variables: { limit: 10 }
    });
    console.log("QUERY data", data)
    return data?.rockets;
}

export default useGetRockets;