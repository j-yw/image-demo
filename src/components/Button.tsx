import React, { ReactNode } from "react";

interface IButtonProps {
	children: ReactNode;
	className: string;
}

function Button({ children, className }: IButtonProps) {
	return <button className={className}>{children}</button>;
}

export default Button;
