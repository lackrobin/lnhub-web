import { client, query as q } from "$lib/fauna-client";
export const get = async () => {

    try {
        const categories = await client.query(q.Distinct(q.Paginate(q.Match(q.Index("categories")))))

        return {
            status: 200,
            body: { categories }
        }
    } catch (error) {
        console.log(error)
    }
}