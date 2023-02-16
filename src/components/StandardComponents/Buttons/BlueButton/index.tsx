import { ButtonProps } from "../../../../types";

const BlueButton = ({
    children,
    onClick = () => { },
}: ButtonProps) => {
    return (
        <>
            <button className='bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 rounded' onClick={onClick}>
                {children}
            </button>
        </>
    )
}

export default BlueButton;