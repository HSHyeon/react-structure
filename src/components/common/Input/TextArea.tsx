import { forwardRef, memo } from "react";

import type { TextAreaProps } from "@/types/input";

const TextArea = memo(forwardRef<HTMLTextAreaElement, TextAreaProps>(({
	error,
	helper,
	label,
	required,
	variant = "filled",
	validationState = "default",
	fullWidth = true,
	className,
	containerClassName,
	disabled,
	maxLength,
	rows = 4,
	...props
}, ref) => {
	const getTextAreaStyles = () => {
		const baseStyles = `
      w-full
      bg-gray-700
      text-white
      text-body
      rounded-xl
      transition-all
      duration-200
      outline-none
      resize-none
      px-4
      py-3
      placeholder:text-gray-400
    `;

		const stateStyles = {
			default: "border-2 border-transparent focus:border-primary-500",
			invalid: "border-2 border-error-500",
			valid: "border-2 border-success-500",
		}[validationState];

		const variantStyles = {
			filled: "bg-gray-700",
			outlined: "bg-transparent border-2 border-gray-700",
		}[variant];

		const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

		return `${baseStyles} ${stateStyles} ${variantStyles} ${disabledStyles} ${className || ""}`;
	};

	return (
		<div className={`relative ${fullWidth ? "w-full" : "w-auto"} ${containerClassName || ""}`}>
			{label && (
				<label className="block mb-2 text-body text-gray-300">
					{label}
					{required && <span className="text-error-500 ml-5">*</span>}
				</label>
			)}

			<textarea
				ref={ref}
				rows={rows}
				disabled={disabled}
				maxLength={maxLength}
				className={getTextAreaStyles()}
				{...props}
			/>

			{(error || helper) && (
				<p className={`mt-1 text-body-small ${error ? "text-error-500" : "text-gray-400"}`}>
					{error || helper}
				</p>
			)}
		</div>
	);
}));

TextArea.displayName = "TextArea";

export default TextArea;