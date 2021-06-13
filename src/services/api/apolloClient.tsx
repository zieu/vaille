import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

import { useMemo } from "react";

let apolloClient: ApolloClient<any>;

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: new HttpLink({
			uri: "http://localhost:5000/graphql",
		}),
		cache: new InMemoryCache(),
	});
}

function initializeApollo(initialState: object | null = null) {
	const _apolloClient = apolloClient ?? createApolloClient();

	if (initialState) {
		const existingCache = _apolloClient.extract();
		_apolloClient.cache.restore({ ...existingCache, ...initialState });
	}

	if (typeof window === "undefined") return _apolloClient;

	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

export function useApollo(initialState: any) {
	const store = useMemo(() => initializeApollo(initialState), [initialState]);
	return store;
}
