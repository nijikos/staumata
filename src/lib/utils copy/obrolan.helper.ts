export function serializeEditorContent(root: HTMLElement): string {
	let output = '';

	root.childNodes.forEach((node) => {
		// Text node → keep text
		if (node.nodeType === Node.TEXT_NODE) {
			output += node.textContent ?? '';
			return;
		}

		// Element node
		if (node.nodeType === Node.ELEMENT_NODE) {
			const el = node as HTMLElement;

			// Our chip
			if (el.tagName === 'SPAN' && el.dataset.id && el.dataset.label) {
				const label = el.dataset.label;
				const id = el.dataset.id;
				output += `#(${label},[${id}])`;
				return;
			}

			// Other elements (div, br, etc.) → recurse
			if (el.childNodes.length > 0) {
				output += serializeEditorContent(el);
			}
		}
	});

	return output;
}
