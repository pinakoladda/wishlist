import { api } from './index'

interface AddWishlistBody {
    name: string
    description: string
    visibility: 'public' | 'private'
}

export const addWishlist = (body: AddWishlistBody) => {
    return api('POST', '/wishlists', { body })
}
