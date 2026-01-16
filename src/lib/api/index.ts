import Cookies from 'js-cookie'

const API_HOST = 'https://api.wishlist.shtepcell.com'

export interface ApiOptions {
    body?: unknown
    headers?: Record<string, string>
}

export const api = async (method: string, url: string, opts?: ApiOptions) => {
    const fetchParams: RequestInit = { method }

    if (opts?.body) {
        fetchParams.body = JSON.stringify(opts.body)
        fetchParams.headers = {
            'content-type': 'application/json',
        }
    }

    if (opts?.headers) {
        fetchParams.headers = {
            ...(fetchParams.headers || {}),
            ...opts.headers,
        }
    }

    const token = Cookies.get('token')

    if (token) {
        fetchParams.headers = {
            ...(fetchParams.headers || {}),
            authorization: `Bearer ${token}`,
        }
    }

    const response = await fetch(API_HOST + url, fetchParams)
    if (!response.ok) {
        const data = await response.json()
        throw data
    }

    const data = await response.json()

    return data
}
