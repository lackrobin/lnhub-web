import { client, query as q } from "$lib/fauna-client";
export const get = async (req) => {
  const category = req.params.category
  try {
    const services = await client.query(q.Map(
      q.Paginate(q.Match(q.Index("services_by_category"), category)),
      q.Lambda("X", q.Get(q.Var("X"))))
    )
    
    return {
      status: 200,
      body: { services }
    }
  } catch (error) {
    console.log(error)
  }
}