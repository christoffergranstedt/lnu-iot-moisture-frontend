import React from 'react'
import Loader from 'react-loader-spinner'
import { useForm } from 'react-hook-form'

import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit'
import { Input } from '../Input/Input'

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
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input label='Username' name="username" register={register}/>
				<Input type='password' name="password" label='Password' register={register}/>
				<ButtonSubmit>{isLoading ? <Loader type="ThreeDots" color="#cccccc" height={10} /> : 'Sign in' }</ButtonSubmit>
			</form>
		</>
	)

}