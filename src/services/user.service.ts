import UserModel from "../models/User";

const getAllUsers = async () => {
    const dataUsers = await UserModel.find().sort({ createdAt: -1 });
    console.log(dataUsers);
    return dataUsers;
}

export {
    getAllUsers,
}