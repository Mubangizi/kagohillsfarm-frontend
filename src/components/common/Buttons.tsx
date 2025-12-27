import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const buttonVariants = {
  primary:
    "rounded-md bg-primary-color-light px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500",
  secondary: "text-sm/6 font-semibold primary-color",
};

const motionVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

export default function AnimatedButton({
  href,
  children,
  variant = "primary",
  className = "",
  type,
  disabled,
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      variants={motionVariants}
      className="cursor-pointer"
    >
      {href ? (
        <Link href={href} className={`${buttonVariants[variant]} ${className}`}>
          {children}
        </Link>
      ) : type ? (
        <button
          type={type}
          className={`${className} ${!disabled && buttonVariants[variant]}`}
          disabled={disabled}
        >
          {children}
        </button>
      ) : (
        children
      )}
    </motion.div>
  );
}
