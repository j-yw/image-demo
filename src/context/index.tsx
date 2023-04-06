import { ReactElement, createContext, useContext, useState } from "react";

const AppContext = createContext<any>({});

interface ContextProps {
	children: ReactElement;
}

export function ContextWrapper({ children }: ContextProps) {
	const [imageDataUrl, setImageDataUrl] = useState();

	return (
		<AppContext.Provider
			value={{
				imageDataUrl,
				setImageDataUrl,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
