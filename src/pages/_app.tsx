import { ApolloProvider } from "@apollo/client";
import NProgress from "nprogress";
import "tailwindcss/tailwind.css";
import { PageWithLayout } from "types";

import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";

import { Fragment } from "react";

import "../assets/fonts/fonts.css";

import { useApollo } from "services/api";

import "styles/app.scss";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type Props = AppProps & {
	Component: PageWithLayout;
};

function MyApp({ Component, pageProps }: Props) {
	const Layout = Component.Layout ?? Fragment;
	const client = useApollo(pageProps.initialApolloState);

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
			</Head>
			<ApolloProvider client={client}>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</ApolloProvider>
		</>
	);
}

export default MyApp;
