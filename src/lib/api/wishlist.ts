import { api, ApiOptions } from './index'
import { Wish } from './wish'

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
    wishes: Wish[]
}

export const getAllWishlists = (
    userId: string,
    opts?: ApiOptions
): Promise<Wishlist[]> => {
    return api('GET', `/users/${userId}/wishlists`, opts)
}

export const getWishlist = (
    wishlistId: string,
    opts?: ApiOptions
): Promise<Wishlist> => {
    return api('GET', `/wishlists/${wishlistId}`, opts)
}

export const deleteWishlist = (wishlistId: string) => {
    return api('DELETE', `/wishlists/${wishlistId}`)
}
