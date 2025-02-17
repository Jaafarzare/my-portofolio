import MyProjectsTabs from "./MyProjectsTabs";

export default function MyProjects() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center flex flex-col gap-4">
        <div className="text-center text-5xl font-bold">
          <h3>پروژه های من</h3>
        </div>
        <div>
          <p>
            رابط کاربری (UI) بخشی از وب سایت، برنامه یا دستگاهی است که با آن در
            تعامل هستید. <br /> این شامل صفحه نمایش، دکمه ها، کلیدها، نمادها،
            منوهای ناوبری و سایر عناصر بصری است.
          </p>
        </div>
      </div>
      <MyProjectsTabs />
    </div>
  );
}
