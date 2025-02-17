"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";

interface SkillCircleProps {
  imageSrc: string;
  skillName: string;
  percentage: number;
}

export default function SkillCircle({
  imageSrc,
  skillName,
  percentage,
}: SkillCircleProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = percentage;
      const duration = 1000;
      const increment = end / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setProgress(start);
      }, 10);
    }
  }, [inView, percentage]);

  return (
    <div
      ref={ref}
      className="w-40 h-40 m-5 relative flex flex-col items-center justify-center"
    >
      <div className="absolute inset-0">
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            pathColor: "#3b82f6",
            trailColor: "#d1d5db",
            pathTransitionDuration: 0.5,
          })}
        />
      </div>
      <div className="absolute flex flex-col items-center">
        <div className="w-16 h-16 relative mb-2">
          <Image
            src={imageSrc}
            alt={skillName}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <p className="text-sm font-medium text-gray-700">{skillName}</p>
        <p className="text-xs font-bold text-gray-500">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}
