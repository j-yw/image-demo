import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContextWrapper } from "@/context";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<ContextWrapper>
				<Component {...pageProps} />
			</ContextWrapper>
		</QueryClientProvider>
	);
}
