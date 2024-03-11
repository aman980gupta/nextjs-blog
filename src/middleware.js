import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    //const isPublic = ,"/blog/:path*"
    let cookie = request.cookies.get('token')
    console.log(cookie)
  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ["/","/movies/:path*","/dynamic/:path*","/logout/:path*"]
}