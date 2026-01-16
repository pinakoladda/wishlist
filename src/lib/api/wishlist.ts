import { api, ApiOptions } from './index'

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
    wishIds: []
}

export const getAllWishlists = (userId: string): Promise<Wishlist[]> => {
    return api('GET', `/users/${userId}/wishlists`)
}

export const getWishlist = (
    wishlistId: string,
    opts?: ApiOptions
): Promise<Wishlist> => {
    return api('GET', `/wishlists/${wishlistId}`, opts)
}
