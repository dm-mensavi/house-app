module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			padding: {
				DEFAULT: "15px",
			},
		},
		extend: {
			colors: {
				red: "#ff0000",
				yellow: "#ffff00",
				blue: "#0000ff",
				green: "#00ff00",
				orange: "#ffa500",
				white: "#ffffff",
				scarlet: "#ff2400",
				gold: "#ffd700",
				bronze: "#cd7f32",
				black: "#000000",
				grey: "#808080",
				gray: "#808080",
				purple: "#800080",
				pink: "#ffc0cb",
				indigo: "#4b0082",
				//Add more colors here
			},
			fontFamily: {
				sans: ["Verdana"],
			},
		},
	},
	plugins: [],
};
