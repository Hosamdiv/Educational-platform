import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}
const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={`bg-black text-white px-8 py-3 text-sm active:bg-gray-700 ${className}`}
        >{children}</button>
    )
}

export default Button