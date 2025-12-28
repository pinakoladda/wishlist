export interface User {
    id: string
    email: string
    username: string
    name: string
    avatarUrl: string
    createdAt: string
    updatedAt: string
}

type ErrorDetails = {
    message: string
}

export type ApiError = {
    code: string
    message: string
    details?: string[] | ErrorDetails[]
}
