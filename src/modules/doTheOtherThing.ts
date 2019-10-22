export const doTheOtherThing = (name: string) => {
  console.log('ASYNC: doTheOtherThing -> doTheOtherThing');
  console.log('ASYNC: doTheOtherThing -> name', name);
  return new Promise(() =>
    setTimeout(() => {
      msg: `Hey ${name} 🤠!`;
    }, 1000),
  );
};
