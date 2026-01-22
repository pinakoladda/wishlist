import { cookies } from 'next/headers'
import { ApiOptions } from '@/lib/api'

export const getServerApiOptions = async (): Promise<ApiOptions> => {
    const token = await getAuthToken()

    return {
        headers: {
            authorization: `Bearer ${token}`,
        },
    }
}

export const getAuthToken = async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    return token
}
