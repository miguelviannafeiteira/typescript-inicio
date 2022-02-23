import {Request, Response} from 'express';
import EmailService from '../services/EmailService';


const users = [
  {
    name: 'Miguel',
    email: 'asdasiojdasiojd'
  },
  {
    name: 'Daniel',
    email: 'asdasidsadojdasiojd'
  },
  {
    name: 'Lourenço',
    email: 'asdasiojdasiojdsda'
  }
]

export default {
  async index(req:Request,res:Response){
    return res.json(users);
  },

  async create(req:Request, res:Response){
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'Miguel',
        email:'miguel@gmail.com'},
      message: {
        subject: 'Bem-vindo', 
        body: 'Seja bem-vindo'}
    });
    return res.send();
  }
};