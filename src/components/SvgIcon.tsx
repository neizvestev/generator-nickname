import React, { useEffect, useState } from "react";

interface SvgIconProps {
  src: string;
  className?: string;
}

export function SvgIcon({ src, className = "h-4 w-4 shrink-0" }: SvgIconProps) {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((text) => {
        setSvgContent(text);
      })
      .catch((err) => console.error(`Error loading SVG ${src}:`, err));
  }, [src]);

  if (!svgContent) {
    return <div className={className} />;
  }

  return (
    <div 
      className={className} 
      dangerouslySetInnerHTML={{ __html: svgContent }} 
    />
  );
}
export default SvgIcon;
