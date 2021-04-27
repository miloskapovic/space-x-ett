import { useQuery, gql } from '@apollo/client';
import { Launchpad } from '../generated/graphql';

const GET_LAUNCH_PADS = gql`
  {
    launchpads {
        location {
            longitude
            latitude
            name
            region
        }
        name
        status
        details
    }
  }
`

const useGetLaunchPads = (): Array<Launchpad> | undefined => {
    const { data } = useQuery(GET_LAUNCH_PADS);
    return data?.launchpads;
}

export default useGetLaunchPads;