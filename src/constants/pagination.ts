export const DEFAULT_PAGE_INDEX = 0;
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 20, 30, 40, 50, 100].reverse().map((val) => ({
	label: val.toString(),
	value: val.toString(),
}));
