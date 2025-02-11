import { memo, forwardRef, useMemo } from "react";

import type { BaseButtonProps } from "@/types/button";

import { BASE_BUTTON_STYLES, BUTTON_SIZE_STYLES, BUTTON_VARIANT_STYLES } from "./styles";

const BaseButton = memo(forwardRef<HTMLButtonElement, BaseButtonProps>(({
	type = "button",
	size = "md",
	variant = "filled",
	color = "primary",
	leftIcon,
	rightIcon,
	isLoading,
	disabled,
	className,
	children,
	...props
}, ref) => {
	const buttonStyles = useMemo(() => {
		const loadingStyles = isLoading ? "cursor-wait" : "";
		return `${BASE_BUTTON_STYLES} ${BUTTON_SIZE_STYLES[size]} ${BUTTON_VARIANT_STYLES[variant]?.[color] || ""} ${loadingStyles} ${className || ""}`;
	}, [size, variant, color, isLoading, className]);

	return (
		<button
			ref={ref}
			type={type}
			disabled={disabled || isLoading}
			className={buttonStyles}
			{...props}
		>
			{leftIcon && <span className="inline-flex">{leftIcon}</span>}
			{isLoading ? (
				<span className="inline-flex items-center gap-2">
					<svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							strokeWidth="4"
							fill="none"
						/>
						<path
							className="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
						/>
					</svg>
          로딩중...
				</span>
			) : (
				children
			)}
			{rightIcon && <span className="inline-flex">{rightIcon}</span>}
		</button>
	);
}));

BaseButton.displayName = "BaseButton";

export default BaseButton;