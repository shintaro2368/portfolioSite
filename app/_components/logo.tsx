import Link from "next/link"

export default function Logo() {
    return(
        <div className="">
            <Link key="Home" href="/">
                <h1 className="text-4xl">SHINTARO</h1>
            </Link>
        </div>
    )
}