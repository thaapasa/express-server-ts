import 'jest';
import { getRandomNumber, getSecureRandomNumber } from './random';

describe('random number generator', () => {
  it('generates numbers', () => {
    expect(typeof getRandomNumber()).toBe('number');
  });

  it('generates secure random numbers', async () => {
    expect(typeof (await getSecureRandomNumber())).toBe('number');
  });
});
