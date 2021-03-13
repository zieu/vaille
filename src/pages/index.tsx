import { withLayout } from "containers";

import Head from "next/head";

import Page from "components/pages/home";

function Home() {
	return (
		<div>
			<Head>
				<title>Vaille</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<Page />
		</div>
	);
}

export default withLayout(Home);
