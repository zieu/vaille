type Props = {
	children: React.FC | React.ReactNode;
};

const Main = ({ children }: Props) => {
	return <div>{children}</div>;
};

export default Main;
