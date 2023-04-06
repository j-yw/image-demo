import { ContextWrapper } from "@/context";
import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MantineProvider theme={{ colorScheme: "dark" }}>
			<QueryClientProvider client={queryClient}>
				<ContextWrapper>
					<Component {...pageProps} />
				</ContextWrapper>
			</QueryClientProvider>
		</MantineProvider>
	);
}
