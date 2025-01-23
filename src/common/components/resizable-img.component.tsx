import { useEffect, useState } from "react";

type ResizableImgProps = {
  initialSize: number;
  maxSize: number;
  src: string;
  alt: string;
};

export const ResizableImg = ({
  initialSize,
  maxSize,
  src,
  alt,
}: ResizableImgProps) => {
  const [width, setWidth] = useState(initialSize);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementHeight = windowHeight / 7;

      const newWidth = Math.min(
        Math.max((scrollPosition / elementHeight) * initialSize, initialSize),
        maxSize
      );
      setWidth(newWidth);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialSize, maxSize]);

  return (
    <img
      className=""
      src={src}
      alt={alt}
      style={{
        width: `${width}px`,
        height: "auto",
        display: "block",
        margin: "auto",
      }}
    />
  );
};
