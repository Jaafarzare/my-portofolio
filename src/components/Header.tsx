"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

type HeaderItem = {
  id: number;
  title: string;
  link: string;
};

export default function Header() {
  const pathname = usePathname();
  const headerItems: HeaderItem[] = [
    { id: 1, title: "صفحه اصلی", link: "/" },
    { id: 2, title: "درباره ما", link: "/about" },
    { id: 3, title: "تماس با ما", link: "/contact" },
  ];

  return (
    <header className="container mx-auto">
      <nav className="flex mt-8 items-center justify-between">
        <div className="flex gap-4 text-md md:text-xl">
          {headerItems.map((item) => {
            const isActive = pathname === item.link;
            return (
              <Link
                key={item.id}
                className="flex flex-col gap-1 group"
                href={item.link}
              >
                <div>{item.title}</div>
                <span
                  className={clsx(
                    "h-1 w-0 bg-orange-500 transition-all group-hover:w-full group-hover:rounded-full",
                    {
                      "w-full": isActive,
                      "rounded-full": isActive,
                    }
                  )}
                ></span>
              </Link>
            );
          })}
        </div>
        <div>
          <Image src={"/logo.png"} alt="logo" width={48} height={48} />
        </div>
      </nav>
    </header>
  );
}
