import React from "react";

type Props = React.HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export default function RoundedBadge({
  children,
  className = "",
  ...props
}: Props) {
  const hasBg = className.includes("bg-");
  const hasDir = className.includes("top");
  const finalClassName = [
    "absolute  text-[10px] text-white px-1.5 py-0.5 rounded-full",
    hasBg ? className : `bg-red-600 ${className}`,
    hasDir ? className : `-top-1 -right-1 ${className}`,
  ].join(" ");

  return (
    <span {...props} className={finalClassName}>
      {children}
    </span>
  );
}
