export interface ILogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    token: string;
}

export interface IUser {
    id: number
    name: string
    email: string
    image: string
    exp: number
}

export interface IUserState {
    user: IUser | null
    token: string | null
}
