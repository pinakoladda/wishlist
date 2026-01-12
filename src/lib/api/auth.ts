import { api } from './index'
import { User } from '@/types'

interface SignUpBody {
    email: string
    username: string
    password: string
    name: string
}

interface SignUpResponse {
    token: {
        accessToken: string
        expiresIn: number
        tokenType: string
    }
    user: User
}

export const signUp = (body: SignUpBody): Promise<SignUpResponse> => {
    return api('POST', '/auth/register', { body })
}

interface SingInBody {
    email: string
    password: string
}

interface SignInResponse {
    token: {
        accessToken: string
        expiresIn: number
        tokenType: string
    }
    user: User
}

export const signIn = (body: SingInBody): Promise<SignInResponse> => {
    return api('POST', '/auth/login', { body })
}

export const getCurrentUser = (token?: string): Promise<User> => {
    return api(
        'GET',
        '/users/me',
        token
            ? {
                  headers: { authorization: `Bearer ${token}` },
              }
            : undefined
    )
}
