import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		headerImageHref: '/images/products/product-1d.webp'
	};
};
