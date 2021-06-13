import React, { FC, useMemo } from "react";

export interface State {
	isPostMenuVisible: boolean;
}

const initialState = {
	isPostMenuVisible: false,
};

type Action =
	| {
			type: "SHOW_POST_MENU";
	  }
	| {
			type: "CLOSE_POST_MENU";
	  };

type Values = {
	openPostMenu: () => void;
	closePostMenu: () => void;
	isPostMenuVisible: boolean;
};

export const UIContext = React.createContext(initialState);

UIContext.displayName = "UIContext";

function uiReducer(state: State, action: Action) {
	switch (action.type) {
		case "SHOW_POST_MENU": {
			return {
				...state,
				isPostMenuVisible: true,
			};
		}
		case "CLOSE_POST_MENU": {
			return {
				...state,
				isPostMenuVisible: false,
			};
		}
	}
}

export const UIProvider: FC = (props) => {
	const [state, dispatch] = React.useReducer(uiReducer, initialState);

	const openPostMenu = () => dispatch({ type: "SHOW_POST_MENU" });
	const closePostMenu = () => dispatch({ type: "CLOSE_POST_MENU" });

	const value = useMemo(
		() => ({
			...state,
			openPostMenu,
			closePostMenu,
		}),
		[state],
	);

	return <UIContext.Provider value={value} {...props} />;
};

export const useUI = () => {
	const context = React.useContext(UIContext);
	if (context === undefined) {
		throw new Error(`useUI must be used within a UIProvider`);
	}
	return context;
};

export const ManagedUIContext: FC = ({ children }) => <UIProvider>{children}</UIProvider>;
