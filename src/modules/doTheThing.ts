export const doTheThing = (name: string) => {
  console.log('TCL: doTheThing -> doTheThing');
  console.log('TCL: doTheThing -> name', name);
  return {
    msg: `You know it ${name}`,
  };
};
