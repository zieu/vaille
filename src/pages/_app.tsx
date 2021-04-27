import NProgress from "nprogress";
import "tailwindcss/tailwind.css";
import { PageWithLayout } from "types";

import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import Router from "next/router";

import { Fragment } from "react";

import "../assets/fonts/fonts.css";

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
	return (
		<>
			<ThemeProvider attribute="class" defaultTheme="dark">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</>
	);
}

export default MyApp;
