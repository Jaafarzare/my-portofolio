export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export const projectCategories: { [key: string]: Project[] } = {
  "طراحی رابط کاربری (UI/UX)": [
    {
      id: "project1",
      title: "پروژه UI/UX 1",
      description: "توضیحات برای پروژه UI/UX 1",
      imageUrl: "/images/uiux_project-1.jpg",
    },
    {
      id: "project2",
      title: "پروژه UI/UX 2",
      description: "توضیحات برای پروژه UI/UX 2",
      imageUrl: "/images/uiux_project-1.jpg",
    },
    {
      id: "project3",
      title: "پروژه UI/UX 3",
      description: "توضیحات برای پروژه UI/UX 3",
      imageUrl: "/images/uiux_project-1.jpg",
    },
  ],
  "طراحی وب": [
    {
      id: "project4",
      title: "پروژه طراحی وب 1",
      description: "توضیحات برای پروژه طراحی وب 1",
      imageUrl: "/images/uiux_project-1.jpg",
    },
    {
      id: "project5",
      title: "پروژه طراحی وب 2",
      description: "توضیحات برای پروژه طراحی وب 2",
      imageUrl: "/images/uiux_project-1.jpg",
    },
    {
      id: "project6",
      title: "پروژه طراحی وب 3",
      description: "توضیحات برای پروژه طراحی وب 3",
      imageUrl: "/images/uiux_project-1.jpg",
    },
  ],
  "طراحی اپلیکیشن": [
    {
      id: "project7",
      title: "پروژه طراحی اپلیکیشن 1",
      description: "توضیحات برای پروژه طراحی اپلیکیشن 1",
      imageUrl: "/images/uiux_project-1.jpg",
    },
    {
      id: "project8",
      title: "پروژه طراحی اپلیکیشن 2",
      description: "توضیحات برای پروژه طراحی اپلیکیشن 2",
      imageUrl: "/images/uiux_project-1.jpg",
    },
    {
      id: "project9",
      title: "پروژه طراحی اپلیکیشن 3",
      description: "توضیحات برای پروژه طراحی اپلیکیشن 3",
      imageUrl: "/images/uiux_project-1.jpg",
    },
  ],
  "طراحی گرافیک": [
    {
      id: "project10",
      title: "پروژه طراحی گرافیک 1",
      description: "توضیحات برای پروژه طراحی گرافیک 1",
      imageUrl: "/images/uiux_project-1.jpg",
    },
    {
      id: "project11",
      title: "پروژه طراحی گرافیک 2",
      description: "توضیحات برای پروژه طراحی گرافیک 2",
      imageUrl: "/images/uiux_project-1.jpg",
    },
    {
      id: "project12",
      title: "پروژه طراحی گرافیک 3",
      description: "توضیحات برای پروژه طراحی گرافیک 3",
      imageUrl: "/images/uiux_project-1.jpg",
    },
  ],
};

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  comment: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial1",
    name: "کاربر اول",
    avatar: "/avatars/user1.png",
    comment:
      "رابط کاربری (UI) بخشی از وب سایت، برنامه یا دستگاهی است که با آن در تعامل هستید. این شامل صفحه نمایش، دکمه ها، کلیدها، نمادها، منوهای ناوبری و سایر عناصر بصری است. تجربه کاربر (UX) به کل تعامل شما با یک محصول، از جمله احساس شما در مورد تعامل اشاره دارد.",
  },
  {
    id: "testimonial2",
    name: "کاربر دوم",
    avatar: "/avatars/user2.png",
    comment:
      "رابط کاربری (UI) بخشی از وب سایت، برنامه یا دستگاهی است که با آن در تعامل هستید. این شامل صفحه نمایش، دکمه ها، کلیدها، نمادها، منوهای ناوبری و سایر عناصر بصری است. تجربه کاربر (UX) به کل تعامل شما با یک محصول، از جمله احساس شما در مورد تعامل اشاره دارد.",
  },
  {
    id: "testimonial3",
    name: "کاربر سوم",
    avatar: "/avatars/user3.png",
    comment:
      "رابط کاربری (UI) بخشی از وب سایت، برنامه یا دستگاهی است که با آن در تعامل هستید. این شامل صفحه نمایش، دکمه ها، کلیدها، نمادها، منوهای ناوبری و سایر عناصر بصری است. تجربه کاربر (UX) به کل تعامل شما با یک محصول، از جمله احساس شما در مورد تعامل اشاره دارد.",
  },
  {
    id: "testimonial4",
    name: "کاربر چهارم",
    avatar: "/avatars/user4.png",
    comment:
      "رابط کاربری (UI) بخشی از وب سایت، برنامه یا دستگاهی است که با آن در تعامل هستید. این شامل صفحه نمایش، دکمه ها، کلیدها، نمادها، منوهای ناوبری و سایر عناصر بصری است. تجربه کاربر (UX) به کل تعامل شما با یک محصول، از جمله احساس شما در مورد تعامل اشاره دارد.",
  },
];
