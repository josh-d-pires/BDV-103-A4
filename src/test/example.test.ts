import { describe } from 'node:test';
import { test, expect } from 'vitest';

describe('example testing suite',()=>{
  test('math works',()=>{
    expect(1+2).toBe(3);
  });
});