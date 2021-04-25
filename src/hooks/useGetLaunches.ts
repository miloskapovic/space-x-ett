import { useQuery, gql } from '@apollo/client';

interface PageQueryOptions {
    limit: number
}

const GET_LUNCHES = gql`
  query GetLunchesPast($limit: Int!) {
    launchesPast(limit: $limit) {
        mission_name
        launch_date_local
        launch_site {
          site_name_long
        }
        links {
          article_link
          video_link
        }
        rocket {
          rocket_name
          first_stage {
            cores {
              flight
              core {
                reuse_count
                status
              }
            }
          }
          second_stage {
            payloads {
              payload_type
              payload_mass_kg
              payload_mass_lbs
            }
          }
        }
        ships {
          name
          home_port
          image
        }
    }
  }
`

// interface Links {
//     article_link: string,
//     video_link: string,
// }

// interface LaunchSite {
//     article_link: string,
//     video_link: string,
// }

// interface Core {
//     reuse_count: string,
//     status: string,
// }

// interface FirstStage {
//     flight: string,
//     core: Core,
// }

// interface Payloads {
//     payload_type: string,
//     payload_mass_kg: string,
//     payload_mass_lbs: string
// }

// interface SecondStage {
//     payloads: Payloads
// }

// interface Rocket {
//     rocket_name: string,
//     first_stage: FirstStage,
//     second_stage: SecondStage
// }

// interface Ships {
//     name: string,
//     home_port: string,
//     image: string
// }

// interface Lunches {
//     mission_name: string,
//     launch_date_local: string,
//     launch_site: LaunchSite,
//     links: Links,
//     rocket: Rocket,
//     ships: Ships
// }

const useGetLunches = (): undefined => {
    const { data } = useQuery(GET_LUNCHES, {
        variables: { options: { limit: 10 }}
    });
    return data.launchesPast.data;
}

export default useGetLunches;