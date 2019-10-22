export const doTheOtherThing = async (name: string) => {
  console.log('ASYNC: doTheOtherThing -> doTheOtherThing');
  console.log('ASYNC: doTheOtherThing -> name', name);
  return new Promise((resolve, _) => {
    const wait = setTimeout(() => {
      clearTimeout(wait);
      resolve({ msg: `Hey ${name} 🤠!` });
    }, 1000);
  });
};
