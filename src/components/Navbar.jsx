"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Navbar = () => {
  const isLogin = false;

  const navLinks = [
    { titel: "about", path: "/about" },
    { titel: "contact", path: "/contact" },
    { titel: "blog", path: "/blog" },
    { titel: "home", path: "/" },
    { titel: "movies", path: "/movies" },
  ];

  const LoginAndSIghnup = () => <>
    <Link className="px-2" href="/login"><button>Login</button></Link>
    <Link className="px-2" href="/register"><button>Signup</button></Link>
  </>
  const LogoutAndAdmin = () => <>
    <Link className="px-2" href="/login"><button>LogOut</button></Link>
    <Link className="px-2" href="/admin"><button>Admin</button></Link>
  </>


  const pageRouteName = usePathname()
  // console.log(pageRouteName) pageRouteName===item.path ? "p-2 bg-red-700" : "p-2"
  return (
    <nav className="navLinks flex justify-between " >
      <div className="logoDiv">
        <li className="px-7 flex items-center  "> <Link href="/">Logo</Link></li>
      </div>
      <ul className="" >
        <div className="hidden lg:flex">
          {
            navLinks.map(item => <li key={item.titel} className="px-1 "> <Link  href={item.path}
              className={`p-2 rounded-md ${pageRouteName === item.path ? "bg-[#f5f5dc] " : ""}`} >
              {item.titel}</Link></li>)
          }
        </div>

        {isLogin ? <LogoutAndAdmin /> : <LoginAndSIghnup />}
      </ul>

    </nav>
  )
}

export default Navbar