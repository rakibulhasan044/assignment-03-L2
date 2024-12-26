import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";


const userRegistration = catchAsync(async (req, res) => {
    const result = await UserServices.createUserIntoDB(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'User registered successfully',
        data: result
    })
})

export const UserControllers = {
    userRegistration
}