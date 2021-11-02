import Loader from 'react-loader-spinner'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Input } from '../Input/Input'
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit'

const StyledDiv = styled.div`
	display: block;
	width: 50%;
	margin: 0 auto;
`

interface SignInFormProps {
	onFormSubmit: Function
	isLoading: boolean
}

export type UserInput = {
	username: string;
	password: string;
}

export const SignInForm = ({onFormSubmit, isLoading}: SignInFormProps) => {
	const { register, handleSubmit } = useForm<UserInput>()

  const onSubmit = (data: UserInput) => {
    onFormSubmit(data)
  }

	return (
		<StyledDiv>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input label='Username' register={register} name='username'/>
				<Input type='password' label='Password' register={register} name='password'/>
				<ButtonSubmit>{isLoading ? <Loader type="ThreeDots" color="#cccccc" height={10} /> : 'Sign in' }</ButtonSubmit>
			</form>
		</StyledDiv>
	)

}