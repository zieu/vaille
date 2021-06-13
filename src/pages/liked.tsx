import { PageTitle } from "components";
import { withLayout } from "containers";

import Head from "next/head";

import Page from "components/pages/liked";

function Liked() {
	return (
		<div>
			<Head>
				<title>Vaille | Liked</title>
				<link rel="icon" href="/favicon.svg" />
			</Head>

			<PageTitle pageTitle="Liked" />
			<Page />
		</div>
	);
}

export default withLayout(Liked);
