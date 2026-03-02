export interface SecretKeySequenceOptions {
	key: string;
	count: number;
	timeout?: number;
	onMatch: () => void;
}

export function secretKeySequence(
	node: HTMLElement,
	{ key, count, timeout = 1000, onMatch }: SecretKeySequenceOptions
) {
	let pressed = 0;
	let timer: ReturnType<typeof setTimeout> | null = null;

	function onKeydown(e: KeyboardEvent) {
		if (e.key !== key) return;

		pressed++;

		if (timer) clearTimeout(timer);
		timer = setTimeout(() => (pressed = 0), timeout);

		if (pressed === count) {
			onMatch();
			pressed = 0;
		}
	}

	window.addEventListener('keydown', onKeydown);

	return {
		destroy() {
			window.removeEventListener('keydown', onKeydown);
			if (timer) clearTimeout(timer);
		}
	};
}

export function isEmpty(value: unknown): boolean {
	if (value == null) return true; // null or undefined

	if (typeof value === 'boolean') return false;

	if (typeof value === 'number') return false;

	if (typeof value === 'string') return value.trim().length === 0;

	if (Array.isArray(value)) return value.length === 0;

	if (value instanceof Map || value instanceof Set) return value.size === 0;

	if (typeof value === 'object') return Object.keys(value as object).length === 0;

	return false;
}
