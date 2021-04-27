import { useQuery, gql } from '@apollo/client';

const GET_NEXT_LAUNCH = gql`
  {
    launchNext {
        mission_name
        launch_site {
            site_name_long
        }
        launch_date_utc
        launch_date_local
        details
    }
  }
`

const useGetNextLaunch = () => {
  const { data } = useQuery(GET_NEXT_LAUNCH);
  return data?.launchNext;
}

export default useGetNextLaunch;