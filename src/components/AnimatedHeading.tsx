import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedHeadingProps {
  lines: (string | ReactNode)[];
  className?: string;
  as?: "h1" | "h2" | "h3";
  delayBase?: number;
}

/**
 * Reveals each line word by word with fade + slide up when entering viewport.
 */
export function AnimatedHeading({ lines, className = "", as: Tag = "h2", delayBase = 0 }: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  let wordCount = 0;

  return (
    <div ref={ref}>
      <Tag className={className}>
        {lines.map((line, li) => (
          <span key={li} className="block overflow-hidden pb-[0.15em]">
            <span className="inline-block">
              {typeof line === "string"
                ? line.split(" ").map((word, wi) => {
                    const idx = wordCount++;
                    return (
                      <span
                        key={wi}
                        className="inline-block transition-all duration-700 ease-out"
                        style={{
                          opacity: visible ? 1 : 0,
                          transform: visible ? "translateY(0)" : "translateY(100%)",
                          transitionDelay: `${delayBase + idx * 70}ms`,
                        }}
                      >
                        {word}
                        {wi < line.split(" ").length - 1 ? "\u00A0" : ""}
                      </span>
                    );
                  })
                : (
                  <span
                    className="inline-block transition-all duration-700 ease-out"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(100%)",
                      transitionDelay: `${delayBase + li * 150}ms`,
                    }}
                  >
                    {line}
                  </span>
                )}
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
