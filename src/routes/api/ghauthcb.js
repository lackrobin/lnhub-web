import  fetch  from "node-fetch";

const clientID = process.env.GH_CLIENT_ID
const clientSecret = process.env.GH_CLIENT_SECRET
const tokenURL = "https://github.com/login/oauth/access_token"
const userURL = "https://api.github.com/user"


export const get = async (request) => {
    const code = request.url.searchParams.get("code")

    const token = await getToken(code)

    const user = await getUser(token)
    request.locals.user = user.login
    
    return {
        status: 302,
        headers: {
            location: '/'
        }
    }
}

function getToken(code) {
    return fetch(tokenURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json"
        },
        body: JSON.stringify({
            client_id: clientID,
            client_secret: clientSecret,
            code
        })
    }).then(r => r.json()).then(r => r.access_token)
}

function getUser(token) {
    return fetch(userURL, {
        headers: {
            accept:"application/json",
            Authorization: `Bearer ${token}`
        }
    }).then(r => r.json())
}