import { Layout } from "components";
import { PageWithLayout } from "types";

const withLayout = (Component: PageWithLayout) => {
	Component.Layout = Layout;
	return Component;
};

export default withLayout;
