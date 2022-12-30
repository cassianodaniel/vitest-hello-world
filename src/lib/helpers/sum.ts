export default function sum(a: number, b: number) {
	return a + b;
}


if (import.meta.vitest) {
	const { test, expect } = import.meta.vitest;
	test('sum test', () => {
		expect(sum(1, 2)).toBe(3);
	});
}