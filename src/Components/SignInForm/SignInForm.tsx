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
		<div className="flex justify-center">
			<form className="w-124" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Input className="my-4" label='Username' name="username" register={register}/>
					<Input className="my-4" type='password' name="password" label='Password' register={register}/>
				</div>	
				<div className="text-center">
					<ButtonSubmit className="'bg-gradient-to-r from-primary to-primaryHover border-2 border-secondary px-6 py-2 rounded-lg mt-8 hover:bg-secondary hover:text-gray-800">{isLoading ? <Loader type="ThreeDots" color="#cccccc" height={10} /> : 'Sign in' }</ButtonSubmit>
				</div>					
			</form>
		</div>
	)

}