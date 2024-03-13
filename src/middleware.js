import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside

export function middleware(request) {
  const  token = request.cookies.get('token')?.value || ""
  //const reuwstURlOF = request.nextUrl.path
  console.log("middleware is runnig")
  const path = request.nextUrl.pathname
  console.log(path)
  const isPublicPathName = path === "/login" || path === "/register";
  const isPrivate = path === "/blog/:path*" || path === "/contact/:path*" || path === "/movies/:path*" || path === "/" || path === "/logout";
  if(!isPublicPathName && !token ){
    return NextResponse.redirect(new URL("/login",request.nextUrl))
  }
  if(token && isPublicPathName ){
    return NextResponse.redirect(new URL("/contact",request.nextUrl))
  }
 
  }


export const config = {
  matcher: ["/", "/movies/:path*", "/dynamic/:path*", "/logout", "/contact", "/about","/blog","/login","/register"],

}
