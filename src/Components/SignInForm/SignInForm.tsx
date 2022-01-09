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
			<form className="w-96 sm:w-124" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Input className="my-4" label='Username' name="username" register={register}/>
					<Input className="my-4 focus:ring-2 focus:ring-secondary" type='password' name="password" label='Password' register={register}/>
				</div>	
				<div className="text-center">
					<ButtonSubmit className="bg-none border-2 border-secondary px-8 py-2 rounded-lg mt-12 transform transition duration-500 hover:scale-110 hover:bg-secondary hover:text-gray-800 text-xl">{isLoading ? <Loader type="ThreeDots" color="#cccccc" height={10} /> : 'sign in' }</ButtonSubmit>
				</div>					
			</form>
		</div>
	)

}