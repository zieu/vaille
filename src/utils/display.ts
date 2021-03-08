export const zeroPad = (num: number, places = 2) => (num >= 10 ? num : String(num).padStart(places, "0"));

export const displayCountDown = (seconds: number) => {
	const m = Math.floor(seconds / 60);
	const s = seconds % 60;

	return `${zeroPad(m, 2)}:${zeroPad(s, 2)}`;
};
