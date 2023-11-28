/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
export const randomColor = () => {
	const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

	const color = Math.floor(Math.random() * colors.length);

	return colors[color];
};

export const priceFormat = (price: number) => {
	return price.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
};

export const average = (array: any[]) => array.reduce((a, b) => a + b) / array.length;

export const percent = (value1: number, value2: number) =>
	Number(((value1 / value2 - 1) * 100).toFixed(2));

export const getFirstLetter = (text: string, letterCount = 2): string => {
	return text.charAt(0).toUpperCase() + text.substring(0, letterCount);
}


export const debounce = (func: (arg0: any) => void, wait = 1000) => {
	let timeout: string | number | NodeJS.Timeout | undefined;

	return function executedFunction(...args: any[]) {
		const later = () => {
			clearTimeout(timeout);
			// @ts-ignore
			func(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	};
};

export const toCamelCase = (value: string) => {
	return value.replace(/^([A-Z])|[\s-_](\w)/g, (match, p1, p2) => {
		if (p2) return p2.toUpperCase();
		return p1.toLowerCase();
	});
};

export const makeTitle = (slug: string): string => {
	const words = slug.split('-');

	for (let i = 0; i < words.length; i += 1) {
		const word = words[i];
		words[i] = word.charAt(0).toUpperCase() + word.slice(1);
	}

	return words.join(' ');
};

export const objectNotNull = (data: any): any => {
	return Object.keys(data)
		.filter((e: any) => data[e] !== null)
		.reduce((o: any, e: any) => {
			o[e] = data[e];
			return o;
		}, {});
};

export const objectDefinedProps = (obj: any) =>
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== undefined));

export const slugify = (value: string, decorator = '-', sequence = false): string => {
	const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
	const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
	const p = new RegExp(a.split('').join('|'), 'g');
	const noWord = new RegExp(`[^\\w\\s${decorator}]`, 'g');

	const result = value
		.toString()
		.toLowerCase()
		.replace(/\s+/g, decorator)
		.replace(p, (c) => b.charAt(a.indexOf(c)))
		.replace(/&/g, '-and-')
		.replace(noWord, '')
		.replace(/\\-\\-+/g, decorator)
		.replace(/^-+/, '')
		.replace(/-+$/, '');

	return sequence ? `${result}${decorator}${Math.floor(Math.random() * 10000)}` : result;
};

export const slugifyName = (value: string): string => {
	return slugify(value, '.', true);
};

export const cleanObject = (object: object, find = null): object => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	return Object.fromEntries(Object.entries(object).filter(([_, v]) => v !== find));
};

export const randomINT = (): number => {
	return Math.floor(Math.random() * 1000000);
};

export const randomID = (): string => {
	return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export const getUrlParams: any = new Proxy(new URLSearchParams(window.location.search), {
	get: (searchParams, prop: string) => searchParams.get(prop),
});

export const shortValueDots = (value: string, maxLength = 18): string => {
	if (value.length > maxLength) {
		return `${value.substring(0, maxLength)}...`;
	}
	return value;
};
