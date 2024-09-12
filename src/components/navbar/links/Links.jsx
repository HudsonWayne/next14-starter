import Link from "next/link";


const Links = () => {
    const links =[
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/posts"
        }

    ];
  return (
    <div>
        {Links.map((links=>(
            <Link href={links.path}key={}>{link.title}</Link>
        )))}
    </div>
  )
}

export default Links
