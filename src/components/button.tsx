type Props = {
	className: string;
	onClick: () => void;
	buttonText: string;
};
const Button = ({ className, onClick, buttonText }: Props) => {
	return (
		<div>
			<button className={className} onClick={onClick}>
				{buttonText}
			</button>
		</div>
	);
};

export default Button;
