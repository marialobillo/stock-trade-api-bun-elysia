import { getAllUsers } from "../services/user.service";

import { Context } from 'elysia';

type RequestUserContext = Context<{ 
    body: unknown; 
    params: Record<never, string>; 
    query: undefined; 
    headers: undefined; 
    response: unknown; 
}, {}>


const getUsers = async (req: RequestUserContext) => {
    try {
        const users = await getAllUsers();
        return users;
    } catch (error) {
        console.log("XXX : Error on getting Users", error)
    }
}

export {
    getUsers,
}