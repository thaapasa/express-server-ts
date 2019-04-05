import 'jest';
import { getRandomNumber } from './random';

describe('random number generator', () => {
  it('generates numbers', () => {
    expect(typeof getRandomNumber()).toBe('number');
  });
});
