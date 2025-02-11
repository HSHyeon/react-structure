import { BaseButtonProps } from "@/types/button";
import { memo, forwardRef } from "react";

type IconButtonProps = Omit<BaseButtonProps, "leftIcon" | "rightIcon" | "children"> & {
  icon: React.ReactNode;
  label: string;  // aria-label용
};

const IconButton = memo(forwardRef<HTMLButtonElement, IconButtonProps>(({
	size = "icon",
	variant = "icon",
	color = "gray",
	icon,
	label,
	className,
	...props
}, ref) => {
	const getButtonStyles = () => {
		const baseStyles = `
      inline-flex
      items-center
      justify-center
      transition-all
      duration-200
      disabled:opacity-50
      disabled:cursor-not-allowed
    `;

		const sizeStyles = {
			icon: "p-2",  // 기본 아이콘 버튼
			sm: "p-1",    // 작은 아이콘
			md: "p-3",    // 중간 아이콘
			lg: "p-4",    // 큰 아이콘
			full: "p-4 w-full",  // 전체 너비
		}[size];

		const variantStyles = {
			icon: "hover:bg-black-100 rounded-lg",
			"icon-round": "hover:bg-black-100 rounded-full",
			filled: "bg-gray-800 hover:bg-gray-700 rounded-xl",
			text: "hover:bg-black-100 rounded-lg",
		}[variant];

		const colorStyles = {
			primary: "text-primary hover:text-primary-600",
			"primary-500": "text-primary-500 hover:text-primary-600",
			"primary-400": "text-primary-400 hover:text-primary-500",
			gray: "text-gray-400 hover:text-gray-300",
			white: "text-white hover:text-white-750",
			icon: "",
		}[color];

		return `${baseStyles} ${sizeStyles} ${variantStyles} ${colorStyles} ${className || ""}`;
	};

	return (
		<button
			ref={ref}
			aria-label={label}
			className={getButtonStyles()}
			{...props}
		>
			{icon}
		</button>
	);
}));

IconButton.displayName = "IconButton";

export default IconButton;