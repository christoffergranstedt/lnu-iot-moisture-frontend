interface InputProps {
	name: string
  className?: string
	label: string
	type?: string
	errorText?: string
	disabled?: boolean
	error?: string
	register: any
}

export const Input = ({ name, className, label, type = 'text', errorText, disabled, error, register }: InputProps) => {
  return (
    <div className={`${className}`}>
      <label className="text-left inline-block w-24" htmlFor={name}>
        {label}
      </label>
      <input className="w-96 h-8 px-3 rounded-md text-gray-600" type={type} disabled={disabled} {...register(name)}/>
      <section>
        {error && <p>{errorText}</p>}
      </section>
    </div>
  )
}