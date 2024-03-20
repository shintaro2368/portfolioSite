import Link from "next/link";

// ナビゲーションのリンクを定義しています
export default function NavLinks(): JSX.Element {

    type link = {
        readonly name: string,
        readonly href: string,
    }

    const links: link[] = [
        {name: "About", href: "/about"},
        {name: "Works", href: "/works"},
        {name: "Skills", href: "/skills"},
        {name: "Contact", href: "/contact"},
    ];

    return(
        <>
            {links.map((link: link) => {
                return(
                    <Link
                        key={link.name}
                        href={link.href}
                    >
                        <p>{link.name}</p>
                    </Link>
                )
            })}
        </>
    );
}