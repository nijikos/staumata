export function encodeSlug(id: string, label: string): string {
	const payload = JSON.stringify({ id, label });
	return btoa(payload); // Base64 encode
}

export function decodeSlug(slug: string): { id: string; label: string } {
	const decoded = atob(slug);
	return JSON.parse(decoded);
}
