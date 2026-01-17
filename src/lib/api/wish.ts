import { api } from './index'

export interface AddWishBody {
    name: string
    description: string
    price: number
    currency: 'USD' | 'EUR' | 'Zl'
    status: 'available' | 'unavailable'
    url: string
    imageUrl?: string
    wishlistId: string
}

export const addWish = (body: AddWishBody) => {
    return api('POST', '/wishes', { body })
}

export interface Wish {
    description: string
    name: string
    id: string
    ownerId: string
}

export const getAllWishes = (userId: string): Promise<Wish[]> => {
    return api('GET', `/users/${userId}/wishes`)
}

export const getWish = (wishId: string) => {
    return api('GET', `/wishes/${wishId}`)
}
