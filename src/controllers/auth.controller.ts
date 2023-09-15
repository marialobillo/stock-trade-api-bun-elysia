import { registerNewUser } from "../services/auth.service";
import { Context } from 'elysia';

type RequestUserContext = Context<{ 
    body: unknown; 
    params: Record<never, string>; 
    query: undefined; 
    headers: undefined; 
    response: unknown; 
}, {}>


const registerController = async ({ body }: RequestUserContext) => {
    try {
        const registeredUser = await registerNewUser(body);
        return registeredUser;
    } catch (error) {
        console.log("XXX Error on register new user: ", error)
    }
}

export {
    registerController,
}