const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.tsx"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "1300px",
			xl: "1600px",
		},
		extend: {
			colors: {
				primary: {
					purple: "#5E2CED",
					pink: "#ED2C71",
				},
				just: {
					gray: "#ABB0BD",
				},
				light: {
					shiny: "#FFFFFF",
					grayish: "#EFEFF3",
					grayer: "#DADAE2",
					text: "#2E3A59",
				},
				dark: {
					off: "#1A1A23",
					deep: "#1E1E29",
					cloud: "#252532",
					lie: "#303040",
				},
				lightGray: "#EFEFEC",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
