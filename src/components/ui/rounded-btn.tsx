import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function RoundedBtn({
  children,
  className = "",
  ...props
}: Props) {
  const hasHover = className.includes("hover:");
  const hasCustom = className.includes("custom");
  const finalClassName = [
    "p-2 rounded-full active:bg-black/5 active:scale-90 transition-all duration-300 ease-in-out",
    hasHover ? className : `hover:bg-black/5 ${!hasCustom && className}`,
  ].join(" ");

  return (
    <button {...props} className={hasCustom ? className : finalClassName}>
      {children}
    </button>
  );
}
