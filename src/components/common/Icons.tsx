interface IconProps {
  className?: string;
}

export const EmailIcon = ({ className }: IconProps) => {
	return (
		<img
			src="/icons/email.svg"
			alt="이메일 아이콘"
			width={24}
			height={24}
			className={className}
		/>
	);
};

export const LockIcon = ({ className }: IconProps) => {
	return (
		<img
			src="/icons/key.svg"
			alt="비밀번호 아이콘"
			width={24}
			height={24}
			className={className}
		/>
	);
};

export const EyeIcon = ({ className }: IconProps) => {
	return (
		<img
			src="/icons/eye.svg"
			alt="비밀번호 보기"
			width={24}
			height={24}
			className={className}
		/>
	);
};