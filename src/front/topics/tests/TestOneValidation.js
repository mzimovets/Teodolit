export const answer = [
  {
    // Вопрос 1
    answer1: "1",
  },
  {
    // Вопрос 2
    answer1: "2",
  },
  {
    //  Вопрос 3
    answer1: "3",
  },
  {
    // Вопрос 4
    answer1: "2",
  },
];

export const validateAnswer = (taskNum, userAnswer) => {
  console.log("--->", taskNum, userAnswer);
  switch (taskNum) {
    case 0:
      console.log("answerTuskNum", answer[taskNum].answer1);
      // проверка первого задания
      if (answer[taskNum].answer1 === userAnswer) {
        return true;
      } else {
        return false;
      }
    case 1:
      // второе задание
      if (answer[taskNum].answer1 === userAnswer) {
        return true;
      } else {
        return false;
      }
    case 2:
      // третье задание
      if (answer[taskNum].answer1 === userAnswer) {
        return true;
      } else {
        return false;
      }
    case 3:
      // четвертое задание
      if (answer[taskNum].answer1 === userAnswer) {
        return true;
      } else {
        return false;
      }
    default:
      break;
  }
};
