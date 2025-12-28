import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { getCurrentUser } from './lib/api/auth'
import { ApiError } from './types'

const publicRoutes = ['/sign-in', '/sign-up', '/']

export async function proxy(req: NextRequest) {
    console.log(req.nextUrl)
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const cookieStore = await cookies()
    const cookie = cookieStore.get('token')?.value

    if (!isPublicRoute) {
        if (!cookie) {
            return NextResponse.redirect(new URL('/', req.nextUrl))
        }
        try {
            const user = await getCurrentUser(cookie)
            console.log(user)
        } catch (error) {
            const apiError = error as ApiError

            if (apiError.code === 'UNAUTHORIZED') {
                cookieStore.delete('token')
                return NextResponse.redirect(new URL('/', req.nextUrl))
            }

            return NextResponse.redirect(new URL('/', req.nextUrl))
        }
    }
    if (isPublicRoute && cookie) {
        return NextResponse.redirect(new URL('/profile', req.nextUrl))
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|.*\\.png$).*)',
}
