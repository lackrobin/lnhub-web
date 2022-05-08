import { client } from "$lib/graphql-client";
import { gql } from "graphql-request";
export const get = async (req) => {
  const category = req.params.category
  const variables = {category} 
  console.log(variables)
  try {
    const { services } = await client.request(
      gql`query getServices($category: String!){
            services (where: {categories_every: {name_in: [$category]}}) {
              title
              abstract
              externalUrl
              logo {
                url
              }
              categories{
                name
              }
            }
          }
          `, variables
    )
    return {
      status: 200,
      body: {services} 
    }
  } catch (error) {
    console.log(error)
  }
}