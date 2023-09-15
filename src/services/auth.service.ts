import UserModel from "../models/User";


const registerNewUser = async (user: any) => {
    const newUser = await UserModel.create(user);
    return newUser;
}

export {
    registerNewUser,
}