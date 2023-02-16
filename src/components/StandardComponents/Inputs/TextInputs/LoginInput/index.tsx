import { InputProps } from "../../../../../types";

const LoginTextInput = ({
    type,
    label,
    placeholder
}: InputProps) => {
    return (
        <>
            <label className="before:content-['*'] before:text-red-500 form-label inline-block mb-2 text-gray-700"
            >&nbsp;{label}</label>
            <input
                placeholder={placeholder}
                type={type}
                className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        mb-6
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
            </p>
        </>
    )
}

export default LoginTextInput;