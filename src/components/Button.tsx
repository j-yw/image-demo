import React, { ReactNode } from "react";
import { MouseEventHandler } from "react";

interface IButtonProps {
	children: ReactNode;
	className?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

function Button({ children, className, onClick }: IButtonProps) {
	return (
		<button
			onClick={onClick}
			className={`w-60 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-bold py-3 px-4 rounded-full ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 inline-block transition duration-300 transform-gpu hover:scale-105 active:scale-95 ${className}`}
		>
			{children}
		</button>
	);
}

export default Button;
