module.exports = {
	root: true, // Make sure eslint picks up the config at the root of the directory
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2020, // Use the latest ecmascript standard
		sourceType: "module", // Allows using import/export statements
		ecmaFeatures: {
			jsx: true, // Enable JSX since we're using React
		},
		projects: "",
	},
	settings: {
		react: {
			version: "detect", // Automatically detect the react version
		},
		"import/resolver": {
			"babel-module": {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			},
			node: {
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				paths: ["src"],
			},
		},
	},
	env: {
		browser: true, // Enables browser globals like window and document
		amd: true, // Enables require() and define() as global variables as per the amd spec.
		node: true, // Enables Node.js global variables and Node.js scoping.
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended", // Make this the last element so prettier config overrides other formatting rules
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"airbnb",
		"airbnb/hooks",
		"plugin:react/recommended",
		"plugin:import/errors",
		"plugin:import/warnings",
		"plugin:import/typescript",
		"prettier",
	],
	rules: {
		"prettier/prettier": ["error", {}, { usePrettierrc: true }],
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
		"import/extensions": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"react/prop-types": "off",
		"react/jsx-props-no-spreading": ["error", { custom: "ignore" }],
		"react/no-unescaped-entities": "off",
		"import/no-cycle": [0, { ignoreExternal: true }],
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"no-plusplus": "off",
		"import/prefer-default-export": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["hrefLeft", "hrefRight"],
				aspects: ["invalidHref", "preferButton"],
			},
		], // Use our .prettierrc file as source
	},
	plugins: ["@typescript-eslint", "react", "prettier"],
};
