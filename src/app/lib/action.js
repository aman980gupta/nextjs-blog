import { NextResponse,NextRequest } from "next/server"; 

const signIn = ()=> {
    const responce = NextRequest.json()
    console.log(responce)
}
// export async function authenticate(_currentState, formData) {
    
//     try {
//       await signIn('credentials', formData)
//     } catch (error) {
//       if (error) {
//         switch (error.type) {
//           case 'CredentialsSignin':
//             return 'Invalid credentials.'
//           default:
//             return 'Something went wrong.'
//         }
//       }
//       throw error
//     }
//   }