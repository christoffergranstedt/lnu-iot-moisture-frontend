interface InputProps {
	name: string
	label: string
	type?: string
	errorText?: string
	disabled?: boolean
	error?: string
	register: any
}

export const Input = ({ name, label, type = 'text', errorText, disabled, error, register }: InputProps) => {
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <input type={type} disabled={disabled} {...register(name)}/>
      <section>
        {error && <p>{errorText}</p>}
      </section>
    </>
  )
}