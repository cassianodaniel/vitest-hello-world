export default function subtraction(a: number, b: number) {
  return a - b;
}

if (import.meta.vitest) {
  const { test, expect } = import.meta.vitest;

  test('subtraction', () => {
    expect(subtraction(2, 1)).toBe(1);
  });
}