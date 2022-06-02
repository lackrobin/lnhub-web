import { client } from "$lib/graphql-client";
import { gql } from "graphql-request";
export const get = async ({url}) => {
    const type = url.searchParams.get("type")
    const username = url.searchParams.get("username")
    const serviceID = url.searchParams.get("serviceID")
    const variables =
    {
        "Vote": {
            "type": type,
            "username": username,
            "service": { "connect": { "id": serviceID } }
        }
    }

    try {
        const { services } = await client.request(
            gql`mutation CreateVoteForService($Vote: VoteCreateInput!) {
        createVote(data: $Vote) {
          type
          username
          id
          service {
            id
            title
          }
        }
      }
          `, variables
        )
        return {
            status: 200,
            body: { services }
        }
    } catch (error) {
        console.log(error)
    }
}