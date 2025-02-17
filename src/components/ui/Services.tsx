import Image from "next/image";

type service = {
  id: string;
  image: string;
  name: string;
  desc: string;
};

export default function Services() {
  const services: service[] = [
    {
      id: "service1",
      image: "/icons/ui.png",
      name: "رابط کاربری",
      desc: "تجربه کاربر (UX) به کل تعامل شما با یک محصول، از جمله احساس شما در مورد تعامل اشاره دارد.",
    },
    {
      id: "service2",
      image: "/icons/web.png",
      name: "طراحی وب",
      desc: "تجربه کاربر (UX) به کل تعامل شما با یک محصول، از جمله احساس شما در مورد تعامل اشاره دارد.",
    },
    {
      id: "service3",
      image: "/icons/app.png",
      name: "طراحی اپلیکیشن",
      desc: "تجربه کاربر (UX) به کل تعامل شما با یک محصول، از جمله احساس شما در مورد تعامل اشاره دارد.",
    },
    {
      id: "service4",
      image: "/icons/graphic.png",
      name: "طراحی گرافیک",
      desc: "تجربه کاربر (UX) به کل تعامل شما با یک محصول، از جمله احساس شما در مورد تعامل اشاره دارد.",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="text-center text-5xl font-bold">
          <h3>خدمات</h3>
        </div>
        <div className="text-center ">
          <p className="px-2">
            رابط کاربری (UI) بخشی از وب سایت، برنامه یا دستگاهی است که با آن در
            تعامل هستید. این شامل صفحه نمایش،
            <br /> دکمه ها، کلیدها، نمادها، منوهای ناوبری و سایر عناصر بصری است.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col w-60 h-64 bg-gray-200 justify-center gap-4 px-4 rounded-lg"
          >
            <Image
              src={service.image}
              alt={service.name}
              width={64}
              height={64}
            />
            <div>
              <h4 className="text-2xl">{service.name}</h4>
            </div>
            <div>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
