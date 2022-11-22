export interface IFormLogin {
    email: string;
    password: string;
}

export const defaultValues: IFormLogin = {
    email: 'teste@gmail.com',
    password: '123456'
}