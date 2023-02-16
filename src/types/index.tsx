export interface StandardProps {
    children: React.ReactNode;
}

export interface ButtonProps extends StandardProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface LinkProps extends StandardProps {
    href?: string;
}

export interface InputProps {
    type: string,
    label: string;
    placeholder: string;
 }