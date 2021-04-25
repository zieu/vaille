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

			<Page />
		</div>
	);
}

export default withLayout(Liked);
