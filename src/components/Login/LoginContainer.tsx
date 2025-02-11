import LoginForm from "./LoginForm"

function LoginContainer() {
  return (
<div className="flex flex-col flex-1 h-full w-full justify-center">
			<div className="flex items-center justify-center w-full gap-[12rem]">
				<div className="flex-1">
				</div>
				<div className="flex-1">
					<LoginForm />
				</div>
			</div>
		</div>
  )
}

export default LoginContainer