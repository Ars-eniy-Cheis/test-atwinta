import { ButtonProps } from "../../../../types";

const GreenButton = ({
    children,
    onClick = () => { },
}: ButtonProps) => {
    return (
        <>
            <button className='mr-2 bg-lime-500 hover:bg-lime-400 text-white py-2 px-4 rounded' onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export default GreenButton;