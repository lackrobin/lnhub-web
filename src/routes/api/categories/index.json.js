import { client } from "$lib/graphql-client";
import { gql } from "graphql-request";
export const get = async () => {

    try {
        const query = gql`{
            categories {
              name
            }
          }
          `
        const { categories } = await client.request(query)
        return {
            status: 200,
            body: { categories }
        }
    } catch (error) {
        console.log(error)
    }
}