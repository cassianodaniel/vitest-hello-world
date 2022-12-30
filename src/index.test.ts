/**
 * @jest-environment jsdom
 */

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { render, screen } from "@testing-library/svelte";
import sum from '$lib/helpers/sum';
import Temperature from '$lib/components/Temperature.svelte';

describe('sum test', () => {
	it('sum test', () => {
		expect(sum(1, 2)).toBe(3);
	});
});

describe('string test', () => {
	it('string test', () => {
		expect('hello').toBe('hello');
	});
});

describe('object test', () => {
	it('object test', () => {
		expect({ a: 1 }).toEqual({ a: 1 });
	});
});

test('name', async () => {
	/* ... */
}, 1000);
describe.skip('skipped suite', () => {
	it('test', () => {
		// Suite skipped, no error
		assert.equal(Math.sqrt(3), 1.7320508075688772);
	});
});

describe('suite', () => {
	it.skip('skipped test', () => {
		// Test skipped, no error
		assert.equal(Math.sqrt(3), 1.7320508075688772);
	});
});

// Only this suite (and others marked with only) are run
// describe.only(...
describe('suite', () => {
	it('test', () => {
		assert.equal(Math.sqrt(3), 1.7320508075688772);
	});
});

describe('another suite', () => {
	it('skipped test', () => {
		// Test skipped, as tests are running in Only mode
		assert.equal(Math.sqrt(3), 1.7320508075688772);
	});

	it.only('test', () => {
		// Only this test (and others marked with only) are run
		assert.equal(Math.sqrt(3), 1.7320508075688772);
	});
});

// An entry will be shown in the report for this suite
describe.todo('unimplemented suite');

// An entry will be shown in the report for this test
describe('suite', () => {
	it.todo('unimplemented test');
});

describe('test', () => {
	assert.equal(3, 3);
});

describe('test Temperature render component', async () => {
	const component = Temperature;
	render(component);
	const x = await screen.findByAltText('Farenheit');
	expect(x).toBeTruthy();
});