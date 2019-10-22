import faker from 'faker';
import { doTheOtherThing } from './';

// Unit Under Test
describe('Do the Thing Tests', () => {
  describe('Testing Male Names', () => {
    // scenarios and expectation

    it('When I pass in a male name, I expect to be greeted accordingly', async () => {
      // Arrange
      const firstName = faker.name.firstName(1);
      const lastName = faker.name.lastName(1);
      const name = `${firstName} ${lastName}`;

      // Act
      const result = await doTheOtherThing(name);

      // Assert
      const expected = {
        msg: `Hey ${name} 🤠!`,
      };
      expect(result).toMatchObject(expected);
    });
  });
});
