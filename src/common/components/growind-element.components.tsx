import type React from "react";
import { useRef, useState, useEffect } from "react";

interface GrowingElementProps {
  minSize: number;
  maxSize: number;
  children: React.ReactNode;
  className?: string;
}

export const GrowingElement = ({
  minSize,
  maxSize,
  children,
  className = "",
}: GrowingElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [childSize, setChildSize] = useState(minSize);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersectionRatio = entry.intersectionRatio;
          const newSize =
            minSize + (maxSize - minSize) * Math.min(intersectionRatio * 2, 1);
          setChildSize(newSize);
        });
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [minSize, maxSize]);

  return (
    <div
      ref={elementRef}
      className={`${className}`}
      style={{
        width: `${maxSize}px`,
        height: `${maxSize}px`,
      }}
    >
      <div
        className="transition-all flex items-center justify-center"
        style={{
          width: `${childSize}px`,
          height: `${childSize}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
