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

  const LoginAndSIghnup = ( ) => <>
  <Link className="px-2" href="/login"><button>login</button></Link>
    <Link className="px-2" href="/register"><button>signup</button></Link>
  </>
  const LogoutAndAdmin = ( ) => <>
  <Link className="px-2" href="/login"><button>logOut</button></Link>
    <Link className="px-2" href="/admin"><button>Admin</button></Link>
  </>


  const pageRouteName = usePathname()
  // console.log(pageRouteName) pageRouteName===item.path ? "p-2 bg-red-700" : "p-2"
  return (
    <nav className="navLinks flex justify-between " >
        <li className="px-7 flex items-center  "> <Link href="/">Logo</Link></li>
      <ul >
        <li className="px-7 rihtList">
          {navLinks.map(item => <Link key={item.titel} href={item.path}
            className={`p-2 rounded-md ${pageRouteName === item.path ? "bg-[#f5f5dc] " : ""}`} >
            {item.titel}</Link>)}
        </li>
            {
              isLogin ? <li><LogoutAndAdmin/></li> : <li><LoginAndSIghnup/></li>
            }
      </ul>

    </nav>
  )
}

export default Navbar