// import * as cookie from 'cookie';
// export async function handle({event, resolve}){
        
//         const cookies = cookie.parse(event.request.headers.get('cookie') || "")

//         event.locals.user = cookies.user

//         // before
//         const response = await resolve(event)
//         //after

//         response.headers.set("set-cookie", `user=${event.locals.user || ''}; path=/; secure; HttpOnly`)

//         return response
// }   


// export async function getSession(event){
// return {
//     user: event.locals.user
// }
// }