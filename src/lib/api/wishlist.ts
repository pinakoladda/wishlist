import { api } from './index'

type WishlistVisibility = 'public' | 'private'

interface AddWishlistBody {
    name: string
    description: string
    visibility: WishlistVisibility
}

export const addWishlist = (body: AddWishlistBody) => {
    return api('POST', '/wishlists', { body })
}

export interface Wishlist {
    description: string
    name: string
    id: string
    ownerId: string
    visibility: WishlistVisibility
}

export const getAllWishlists = (userId: string): Promise<Wishlist[]> => {
    return api('GET', `/users/${userId}/wishlists`)
}
