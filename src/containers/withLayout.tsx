import { PageWithLayout } from "types";

import { Layout } from "components/shared";

const withLayout = (Component: PageWithLayout) => {
	Component.Layout = Layout;
	return Component;
};

export default withLayout;
