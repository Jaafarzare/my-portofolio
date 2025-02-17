import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./SocialLinks";

export default function Introduction() {
  return (
    <div className="flex flex-col gap-4 p-2 ">
      {/* Introduction */}
      <div className="flex gap-6">
        <div className="flex flex-col gap-4 pl-20 pt-20 flex-auto">
          <div className="flex flex-col gap-2">
            <p>سلام</p>
            <p className="text-orange-500 text-lg">من جعفر زارع هستم</p>
            <p className="text-7xl font-bold">برنامه نویس</p>
            <p className="text-7xl font-bold">Next.js</p>
          </div>

          <div>
            <p className="text-xl">
              رابط کاربری (UI) بخشی از وب سایت، برنامه یا دستگاهی است که با آن
              در تعامل هستید. این شامل صفحه نمایش، دکمه ها، کلیدها، نمادها،
              منوهای ناوبری و سایر عناصر بصری است. تجربه کاربر (UX) به کل تعامل
              شما با یک محصول، از جمله احساس شما در مورد تعامل اشاره دارد.
            </p>
          </div>

          <div>
            <Link href={"contact"}>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                با من تماس بگیر
              </button>
            </Link>
          </div>

          <SocialIcons />
        </div>

        <div className="relative xl:w-[600px] xl:h-[600px]  lg:w-[500px] lg:h-[500px] aspect-square">
          <Image
            fill
            src={"/mejob.png"}
            alt="avatar"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
