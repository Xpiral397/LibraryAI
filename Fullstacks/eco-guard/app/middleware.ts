import {NextRequest, NextResponse} from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const publicPath = ['/login', '/register']

    const token = request.cookies.get('token')?.value

    if(path in publicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    else if(!(path in publicPath) && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

export const config = {
    matcher: [
        '/',
        '/login',
        '/cross-platform',
        "/register"
    ]
}