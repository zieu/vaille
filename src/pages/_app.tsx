import NProgress from "nprogress";

import { AppProps } from "next/app";
import Router from "next/router";

import { Fragment } from "react";

import { PageWithLayout } from "types/";

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
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
