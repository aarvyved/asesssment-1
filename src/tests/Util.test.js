import { calculateRewards } from '../utils/index'


it('Calculates rewards', () => {
  expect(calculateRewards(120)).toEqual(90);
  expect(calculateRewards(100)).toEqual(50);
});