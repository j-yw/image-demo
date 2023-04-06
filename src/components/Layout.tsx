import { ReactNode } from "react";
import Link from "next/link";

interface ILayoutProps {
	children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
	return (
		<main className="flex flex-col items-center min-h-screen bg-black">
			<header className="w-full border-b-2 border-gray-900 ">
				<div className="mx-auto py-4 px-4 sm:px-6 lg:px-32">
					<Link
						href="/"
						className="text-decoration-none no-underline"
					>
						<h1 className="text-gray-200 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
							<span className="block xl:inline">Hello! 🍀</span>
						</h1>
					</Link>
				</div>
			</header>
			{children}
		</main>
	);
}

export default Layout;
