import clsx from "clsx";

import { BUTTON_SIZE, BUTTON_VARIANT } from "./constants";

interface ButtonProps {
  label: string; // 버튼 안에 들어가는 텍스트
  onClick?: () => void;
  variant?: keyof typeof BUTTON_VARIANT;
  size?: keyof typeof BUTTON_SIZE;
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
}

// 디폴트로 적용되는 css
const baseClasses =
  "rounded-md font-semibold transition-all duration-200 focus:outline-none";

// varaint에 따라 적용되는 css
const variantClasses: Record<keyof typeof BUTTON_VARIANT, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

// size에 따라 적용되는 css
const sizeClasses: Record<keyof typeof BUTTON_SIZE, string> = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

export const Button = ({
  label,
  onClick,
  variant = BUTTON_VARIANT.primary,
  size = BUTTON_SIZE.medium,
  disabled = false,
  fullWidth = false,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(baseClasses, variantClasses[variant], sizeClasses[size], {
        "opacity-50 cursor-not-allowed": disabled || loading,
        "w-full": fullWidth,
      })}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};
