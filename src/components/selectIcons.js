import book from '../../assets/icons/book.png';
import family from '../../assets/icons/family.png';
import friend from '../../assets/icons/friend.png';
import heart from '../../assets/icons/heart.png';
import imige from '../../assets/icons/imige.png';
import love from '../../assets/icons/love.png';
import meeting from '../../assets/icons/meeting.png';
import money from '../../assets/icons/money.png';
import sale from '../../assets/icons/sale.png';
import selfMade from '../../assets/icons/self-esteem.png';
import sex from '../../assets/icons/sex.png';
import silly from '../../assets/icons/silly.png';
import work from '../../assets/icons/work.png';
import other from '../../assets/icons/other.png';

export const selectIcons = (type) => {
  const typesOfErrors = [
    'Семья',
    'Финансы',
    'Продажи',
    'Работа',
    'Здоровье',
    'Любовь',
    'Учёба',
    'Дружба',
    'Саморазвитие',
    'Знакомства',
    'Секс',
    'Имидж',
    'Просто затупил',
    'Другое',
  ];
  switch (type) {
    case typesOfErrors[0]:
      return family;
    case typesOfErrors[1]:
      return money;
    case typesOfErrors[2]:
      return sale;
    case typesOfErrors[3]:
      return work;
    case typesOfErrors[4]:
      return heart;
    case typesOfErrors[5]:
      return love;
    case typesOfErrors[6]:
      return book;
    case typesOfErrors[7]:
      return friend;
    case typesOfErrors[8]:
      return selfMade;
    case typesOfErrors[9]:
      return meeting;
    case typesOfErrors[10]:
      return sex;
    case typesOfErrors[11]:
      return imige;
    case typesOfErrors[12]:
      return silly;

    default:
      return other;
  }
};
