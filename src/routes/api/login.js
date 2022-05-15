const target = "https://github.com/login/oauth/authorize"
const clientID = process.env.GH_CLIENT_ID
export const get = async () => {
    return {
        status: 302,
        headers: {
            location:
                `${target}?client_id=${clientID}`
        }
    }
}