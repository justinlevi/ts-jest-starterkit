import { doTheThing, doTheOtherThing } from './modules';

const main = async () => {
  const result = {
    thing1: doTheThing('Mary'),
    thing2: await doTheOtherThing('Mo'),
  };
  console.log('TCL: main -> result', result);
};
main();
