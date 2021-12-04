import {Request, Response} from 'express';
import SendForgotPasswordEmailService from '../services/SendForgotPasswordEmailService';
export default class ForgotPasswordController {
    public async index(request: Request, response: Response):  Promise<Response> {
        const {email} = new request.body;

        const sendForgotPasswordEmailService = new SendForgotPasswordEmailService();

        await SendForgotPasswordEmailService.execute({
            email, 
        });
        

        return response.status(204).json();

    }

}