import { forwardRef, memo } from "react";

import { BaseInputProps } from "@/types/input";

// memo와 forwardRef를 사용하는 이유:
// 1. memo:
//    - 부모 컴포넌트가 리렌더링될 때마다 자식 컴포넌트도 다시 그려지는 것을 방지해요
//    - props가 변경되지 않았다면, 컴포넌트를 다시 그리지 않아서 성능이 좋아져요
//    - 하지만! props 비교하는 작업도 비용이 들어서, 컴포넌트가 자주 업데이트되면 오히려 성능이 나빠질 수 있어요
//
// 2. forwardRef: React에서 부모 컴포넌트에서 자식 컴포넌트의 DOM 요소에 직접 접근할 수 있게 해주는 기능
//    - 부모 컴포넌트에서 자식 input 요소에 직접 접근할 수 있게 해줘요
//    - 예를 들어, 폼 제출할 때 input에 자동으로 포커스를 주거나, 값을 직접 변경할 때 필요해요
//    - 하지만! ref를 너무 많이 사용하면 코드 관리가 어려워질 수 있어요
//
// memo와 forwardRef를 사용하면 좋은 경우:
// 1. 자주 재사용되는 컴포넌트:
//    - 여러 곳에서 사용되는 공통 컴포넌트는 memo로 성능 개선이 가능해요
//    - 예: 폼에서 여러 개의 TextArea를 사용하는 경우
//
// 2. props가 자주 변경되지 않는 컴포넌트:
//    - 한번 그려지고 거의 변경되지 않는 컴포넌트는 memo가 효과적이에요
//    - 예: 설정 화면의 입력 필드들

// memo와 forwardRef 사용시 주의할 점:
// 1. 불필요한 memo 사용:
//    - 거의 항상 props가 변경되는 컴포넌트에 memo를 쓰면 오히려 성능이 나빠져요
//    - 예: 매번 새로운 함수나 객체를 props로 전달하는 경우
//
// 2. ref 사용시 주의:
//    - ref로 DOM을 직접 조작하면 React의 가상 DOM과 충돌할 수 있어요
//    - 꼭 필요한 경우에만 사용하는 것이 좋아요

const BaseInput = memo(forwardRef<HTMLInputElement, BaseInputProps>(({
	icon,
	error,
	helper,
	label,
	required,
	size = "md",
	variant = "filled",
	validationState = "default",
	fullWidth = true,
	className,
	containerClassName,
	disabled,
	rightElement,
	...props
}, ref) => {
	const getInputStyles = () => {
		const baseStyles = `
      w-full
      bg-gray-800
      text-white
      text-body
      rounded-2xl
      transition-all
      duration-200
      outline-none
      ${icon ? "pl-18" : "pl-10"}
      ${rightElement ? "pr-18" : "pr-10"}
    `;

		const sizeStyles = {
			sm: "h-[4.8rem]",
			md: "h-[5.6rem]",
			lg: "h-[6.4rem]",
		}[size];

		const stateStyles = {
			default: "border-2 border-transparent focus:border-primary-500",
			invalid: "border-2 border-error-500",
			valid: "border-2 border-success-500",
		}[validationState];

		const variantStyles = {
			filled: "bg-gray-800",
			outlined: "bg-transparent border-2 border-gray-700",
		}[variant];

		const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

		return `${baseStyles} ${sizeStyles} ${stateStyles} ${variantStyles} ${disabledStyles} ${className || ""}`;
	};

	return (
		<div className={`relative ${fullWidth ? "w-full" : "w-auto"} ${containerClassName || ""}`}>
			{label && (
				<label className="block mb-2 text-body text-gray-300">
					{label}
					{required && <span className="text-error-500 ml-5">*</span>}
				</label>
			)}

			<div className="relative">
				{icon && (
					<div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
						{icon}
					</div>
				)}

				<input
					ref={ref}
					disabled={disabled}
					className={getInputStyles()}
					{...props}
				/>

				{rightElement && (
					<div className="absolute right-4 top-1/2 -translate-y-1/2">
						{rightElement}
					</div>
				)}
			</div>

			{(error || helper) && (
				<p className={`mt-1 text-body-small ${error ? "text-error-500" : "text-gray-400"}`}>
					{error || helper}
				</p>
			)}
		</div>
	);
}));

BaseInput.displayName = "BaseInput";

export default BaseInput;