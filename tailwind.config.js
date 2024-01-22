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
			},
			fontFamily: {
				sans: ["Verdana"],
			},
		},
	},
	plugins: [],
};
