import { doTheThing, doTheOtherThing } from './modules';

const main = async () => {
  const result = {
    thing1: doTheThing('Mary'),
    thing2: await doTheOtherThing('Mo'),
  };
  console.table(result);
};
main();
