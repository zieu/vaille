import { useLoaded } from "hooks/utils";

const Light = () => {
	const loaded = useLoaded();

	return (
		loaded && (
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
					stroke="white"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path d="M12 1V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M12 21V23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M4.2207 4.21997L5.6407 5.63997" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M18.3594 18.36L19.7794 19.78" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M1 12H3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M21 12H23" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M4.2207 19.78L5.6407 18.36" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M18.3594 5.63997L19.7794 4.21997" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		)
	);
};

export default Light;
