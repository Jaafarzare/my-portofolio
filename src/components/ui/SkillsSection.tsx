import SkillCircle from "./SkillCircle";

export default function SkillsSection() {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-bold">مهارت های من</h2>
      </div>
      <div className="flex flex-wrap gap-8 justify-center p-8">
        <SkillCircle
          imageSrc="/icons/css.png"
          skillName="CSS"
          percentage={80}
        />
        <SkillCircle
          imageSrc="/icons/ts.png"
          skillName="TipeScript"
          percentage={90}
        />
        <SkillCircle
          imageSrc="/icons/html.png"
          skillName="HTML"
          percentage={70}
        />
        <SkillCircle
          imageSrc="/icons/next.png"
          skillName="Next.Js"
          percentage={70}
        />
      </div>
    </div>
  );
}
