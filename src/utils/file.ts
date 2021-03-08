export const getBlobFromBase64 = (base64Encoded: string, type?: string) => {
	const base64 = base64Encoded;
	const byteCharacters = atob(base64);
	const byteNumbers = new Array(byteCharacters.length);
	for (let i = 0; i < byteCharacters.length; i++) {
		byteNumbers[i] = byteCharacters.charCodeAt(i);
	}
	const byteArray = new Uint8Array(byteNumbers);

	const blob = new Blob([byteArray], { type });

	return blob;
};
