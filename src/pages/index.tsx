import { withLayout } from "containers";

import Head from "next/head";

import Page from "components/pages/home";
import { PageTitle } from "components/shared";

function Home() {
	return (
		<div>
			<Head>
				<title>Vaille</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<PageTitle pageTitle="Feed" />
			<Page />
		</div>
	);
}

export default withLayout(Home);
