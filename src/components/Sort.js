import { insertionSort } from './insertionSort';
import { onlyConclusion } from './onlyConclusion';

export const sort = (DATA, criterion) => {
  const typesOfErrors = [
    { id: 'Семья', data: [] },
    { id: 'Финансы', data: [] },
    { id: 'Продажи', data: [] },
    { id: 'Работа', data: [] },
    { id: 'Здоровье', data: [] },
    { id: 'Любовь', data: [] },
    { id: 'Учёба', data: [] },
    { id: 'Дружба', data: [] },
    { id: 'Саморазвитие', data: [] },
    { id: 'Знакомства', data: [] },
    { id: 'Секс', data: [] },
    { id: 'Имидж', data: [] },
    { id: 'Просто затупил', data: [] },
    { id: 'Другое', data: [] },
  ];

  for (let index = 0; index < DATA.length; index++) {
    switch (DATA[index]['typeOfError']) {
      case typesOfErrors[0].id:
        typesOfErrors[0].data.push(DATA[index]);
        break;
      case typesOfErrors[1].id:
        typesOfErrors[1].data.push(DATA[index]);
        break;
      case typesOfErrors[2].id:
        typesOfErrors[2].data.push(DATA[index]);
        break;
      case typesOfErrors[3].id:
        typesOfErrors[3].data.push(DATA[index]);
        break;
      case typesOfErrors[4].id:
        typesOfErrors[4].data.push(DATA[index]);
        break;
      case typesOfErrors[5].id:
        typesOfErrors[5].data.push(DATA[index]);
        break;
      case typesOfErrors[6].id:
        typesOfErrors[6].data.push(DATA[index]);
        break;
      case typesOfErrors[7].id:
        typesOfErrors[7].data.push(DATA[index]);
        break;
      case typesOfErrors[8].id:
        typesOfErrors[8].data.push(DATA[index]);
        break;
      case typesOfErrors[9].id:
        typesOfErrors[9].data.push(DATA[index]);
        break;
      case typesOfErrors[10].id:
        typesOfErrors[10].data.push(DATA[index]);
        break;
      case typesOfErrors[11].id:
        typesOfErrors[11].data.push(DATA[index]);
        break;
      case typesOfErrors[12].id:
        typesOfErrors[12].data.push(DATA[index]);
        break;
      case typesOfErrors[13].id:
        typesOfErrors[13].data.push(DATA[index]);
        break;
      default:
        typesOfErrors[13].data.push(DATA[index]);
        break;
    }
  }

  let sortedData;
  switch (criterion) {
    case 'По возрастанию количества ошибок':
      sortedData = insertionSort(typesOfErrors);
      return sortedData;

    case 'По убыванию количества ошибок':
      sortedData = insertionSort(typesOfErrors);
      return sortedData.reverse();

    case 'По возрастанию количества сделанных выводов':
      break;
    case 'По убыванию количества сделанных выводов':
      break;
    /*case 'Все без вывода':
      sortedData = onlyConclusion(typesOfErrors);
      return sortedData;

    case 'Все с выводом':
      break;*/

    default:
      sortedData = insertionSort(typesOfErrors);
      return sortedData.reverse();
  }
};
