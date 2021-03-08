import "assets/scss/app.scss";
import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { PageWithLayout } from "types";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

type Props = AppProps & {
	Component: PageWithLayout;
};

function MyApp({ Component, pageProps }: Props) {
	return <Component {...pageProps} />;
}

export default MyApp;
