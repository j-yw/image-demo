import { ReactNode } from "react";

interface ILayoutProps {
	children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
	return (
		<main className="flex flex-col items-center min-h-screen bg-black">
			<header className="w-full border-b-2 border-gray-900 ">
				<div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
					<h1 className="text-gray-200 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
						<span className="block xl:inline">Hello! 🍀</span>
					</h1>
				</div>
			</header>
			{children}
		</main>
	);
}

export default Layout;
