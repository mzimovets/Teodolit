export const answer = [
  {
    // Вопрос 1
    answer1: "1",
  },
  {
    // Вопрос 2
    answer1: 2,
  },
  {
    //  Вопрос 3
    answer1: 4,
  },
  {
    // Вопрос 4
    answer1: "6",
  },
  {
    // Вопрос 5
    answer1: 1,
  },
  {
    // Вопрос 6
    answer1: 3,
  },
  {
    // Вопрос 7
    answer1: 3,
  },
  {
    // Вопрос 8
    answer1: 3,
  },
  {
    // Вопрос 9
    answer1: 3,
  },
  {
    // Вопрос 10
    answer1: 3,
  },
  {
    // Вопрос 11
    answer1: 3,
  },
  {
    // Вопрос 12
    answer1: 3,
  },
  {
    // Вопрос 13
    answer1: 3,
  },
  {
    // Вопрос 14
    answer1: 3,
  },
];

// изменить
export const validateAnswer = (taskNum, userAnswer) => {
  console.log("--->", taskNum, userAnswer);
  if (answer[taskNum].answer1 === userAnswer) {
    return true;
  } else {
    return false;
  }
  //   switch (taskNum) {
  //     case 0:
  //       console.log("answerTuskNum", answer[taskNum].answer1);
  //       // проверка первого задания
  //       if (answer[taskNum].answer1 === userAnswer) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     case 1:
  //       // второе задание
  //       if (answer[taskNum].answer1 === userAnswer) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     case 2:
  //       // третье задание
  //       if (answer[taskNum].answer1 === userAnswer) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     case 3:
  //       // четвертое задание
  //       if (answer[taskNum].answer1 === userAnswer) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     default:
  //       break;
  //   }
};
