import faunadb from "faunadb";


export var client = new faunadb.Client({
  secret: process.env["FAUNADB_USER_KEY"],
  domain: 'db.fauna.com',
  // NOTE: Use the correct domain for your database's Region Group.
  port: 443,
  scheme: 'https',
})

export var query = faunadb.query