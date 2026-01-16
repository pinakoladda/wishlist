import { api } from './index'

interface AddWishBody {
    name: string
    description: string
    price: string
    currency: 'USD' | 'EUR' | 'Zl'
    priority: 'high' | 'low'
    status: 'available' | 'unavailable'
    url: string
    imageUrl: string
}

export const addWish = (body: AddWishBody) => {
    return api('POST', '/wishlists', { body })
}
