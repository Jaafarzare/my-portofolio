"use client";

import { Project, projectCategories } from "@/data/data";
import Image from "next/image";
import { useState } from "react";

export default function MyProjectsTabs() {
  const categories = Object.keys(projectCategories);
  const [activeTab, setActiveTab] = useState<string>(categories[0]);

  return (
    <div className="w-full">
      <div className="flex justify-center border-b">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-4 ${
              activeTab === category
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projectCategories[activeTab].map((project: Project) => (
            <div
              key={project.id}
              className="border rounded-lg p-4 flex flex-col items-center gap-2"
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                className="object-cover rounded-md"
                width={400}
                height={600}
              />
              <h3 className=" text-lg font-semibold">{project.title}</h3>
              <p className=" text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
