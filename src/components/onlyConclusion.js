export const onlyConclusion = (DATA) => {
  for (let index = 0; index < DATA.length; index++) {
    const array = DATA[index].data;
    array.filter((item) => {
      if (item.resultOfError === '') {
        console.log(item.id + ' ' + 'empty');
        return true;
      }
    });
  }
  return DATA;
};
