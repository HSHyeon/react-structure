import LoginForm from "./LoginForm"

export interface LoginFormProps {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}

function LoginContainer({ onSuccess, onError }: LoginFormProps) {
	// 뷰를 보여주기 위한 컴포넌트
	// 성공/에러 핸들링은 페이지에서 진행한다
	return (
			<div className="flex flex-col flex-1 h-full w-full justify-center">
				<div className="flex items-center justify-center w-full gap-[5rem]">
				<div className="flex-1 flex justify-center align-center">
					<img
						width={320}
						src="/images/movie.png"
						alt="video"
						className="text-white"
						/>
					</div>
					<div className="flex-1">
					<LoginForm
						onSuccess={onSuccess}
						onError={onError}
						/>
					</div>
				</div>
			</div>
	)
}

export default LoginContainer