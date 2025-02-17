import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { href: "/", src: "/icons/insta.png", alt: "insta" },
  { href: "/", src: "/icons/lindin.png", alt: "lindin" },
  { href: "/", src: "/icons/whatsup.png", alt: "whatsup" },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-2">
      {socialLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="hover:transform hover:-translate-y-1 transition-transform"
        >
          <Image
            src={link.src}
            alt={link.alt}
            width={48}
            height={48}
            className="hover:transform hover:-translate-y-1 transition-transform"
          />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
