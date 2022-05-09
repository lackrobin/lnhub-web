import { client } from "$lib/graphql-client";
import { gql } from "graphql-request";

export const get = async () => {

    try {
        const query = gql`{
            services {
              title
              abstract
              externalUrl
              logo {
                url
              }
              categories {
                name
              }
            }
          }
          `
        const { services } = await client.request(query)
        return {
            status: 200,
            body: { services }
        }
    } catch (error) {
        console.log(error)
    }
}

export const post = async ( {request} ) => {
    try {
        const data = await request.formData()
        const logoUrl = data.get("logo")
        let response = await fetch(`${process.env.GRAPHQL_ENDPOINT}/upload`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.GRAPHCMS_ASSET_TOKEN}`,
                'Content-Type': 'application/x-www-form-urlencoded'
			},
            body: `url=${encodeURIComponent(
                logoUrl
              )}`,
		});
        let assetMeta = await response.json()

        let newService = {
            title: data.get("title"),
            externalUrl: data.get("externalUrl"),
            abstract: data.get("abstract"),
            logo: {
                id: assetMeta.id
            },
            categories: [{ name: data.get("category") }]
        };
    
        return {
            status: 201
        }

    } catch (error) {
        console.log(error)
    }
}