import { api } from './index'

export interface AddWishBody {
    name: string
    description: string
    price: number
    currency: 'USD' | 'EUR' | 'Zl'
    status: 'available' | 'unavailable'
    url: string
    imageUrl?: string
}

export const addWish = (body: AddWishBody) => {
    return api('POST', '/wishes', { body })
}
