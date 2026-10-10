import Link from "next/link";

interface Nav {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );



  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await res.json();
  const navs: Nav[] = data;

  
  return (
    <div className="flex gap-4">
      {navs.map((n) => (
        <Link key={n.id} href={`/${n.slug}`}>
          {n.icon} {n.nameBn}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
