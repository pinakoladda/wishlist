import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const publicRoutes = ['/sign-in', '/sign-up', '/']

export async function proxy(req: NextRequest) {
    const path = req.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)

    if (!isPublicRoute) {
        const cookie = (await cookies()).get('token')?.value

        if (!cookie) {
            return NextResponse.redirect(new URL('/', req.nextUrl))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/((?!api|_next/static|_next/image|.*\\.png$).*)',
}
