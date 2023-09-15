import Elysia from "elysia";

import { registerController } from "../controllers/auth.controller";
import { getUsers } from "../controllers/user.controller";

/**
 * User Module
 */
const usersRoute = new Elysia()
    .get('/users', getUsers)
    .get('/users/:id', (req) => `User ${req.params.id}`)
    .post('/users', registerController)
    .put('/users/:id', (req) => `Update User ${req.params.id}`)
    .delete('/users/:id', (req) => `Delete User ${req.params.id}`)


export default usersRoute;