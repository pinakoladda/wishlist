import { cookies } from 'next/headers'
import { ApiOptions } from '@/lib/api'

export const getServerApiOptions = async (): Promise<ApiOptions> => {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    return {
        headers: {
            authorization: `Bearer ${token}`,
        },
    }
}
