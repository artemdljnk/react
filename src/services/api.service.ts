const baseUrl = 'https://jsonplaceholder.typicode.com'

// export const userService = {
//     getAllUsers: async ():Promise<IUser[]> => {
//         const users = await fetch(baseUrl + '/users')
//         .then((value) => value.json());
//         console.log(users)
//         return users;
//     }
// }
// const postService = {}
// const commentService = {}

export const getAll = async<T,>(endpoint:string) => {
    const responseResult = await fetch(`${baseUrl}${endpoint}`)
        .then(res => res.json());
    return responseResult as T
}
