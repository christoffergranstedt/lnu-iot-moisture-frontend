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
			<form className="w-96" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Input className="my-2" label='Username' name="username" register={register}/>
					<Input className="my-2" type='password' name="password" label='Password' register={register}/>
				</div>	
				<div>
					<ButtonSubmit className="bg-third px-6 py-2 rounded-lg mt-8">{isLoading ? <Loader type="ThreeDots" color="#cccccc" height={10} /> : 'Sign in' }</ButtonSubmit>
				</div>					
			</form>
		</>
	)

}