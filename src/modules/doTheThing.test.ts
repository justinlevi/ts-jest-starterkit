import faker from 'faker';
import { doTheThing } from './';

// Unit Under Test
describe('Do the Thing Tests', () => {
  describe('Testing Male Names', () => {
    // scenarios and expectation

    it('When I pass in a male name, I expect to be greeted accordingly', async () => {
      // Arrange
      const firstName = faker.name.firstName(0);
      const lastName = faker.name.lastName(0);
      const name = `${firstName} ${lastName}`;

      // Act
      const result = doTheThing(name);

      // Assert
      const expected = {
        msg: `You know it ${name}`,
      };
      expect(result).toMatchObject(expected);
      expect(result.msg.length).toBeGreaterThan(5);
    });
  });
});
