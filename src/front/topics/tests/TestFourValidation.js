export const answer = [
  {
    // Вопрос 1
    answer1: "1",
  },
  {
    // Вопрос 2
    answer1: "3",
  },
  {
    //  Вопрос 3
    answer1: "4",
  },
  {
    // Вопрос 4
    answer1: "6",
  },
  {
    // Вопрос 5
    answer1: "13",
  },
  {
    // Вопрос 6
    answer1: "17",
  },
  {
    // Вопрос 7
    answer1: "16",
  },
  {
    // Вопрос 8
    answer1: "2",
  },
  {
    // Вопрос 9
    answer1: "15",
  },
  {
    // Вопрос 10
    answer1: "11",
  },
  {
    // Вопрос 11 ?? Ответ 9
    answer1: "9",
    answer2: "10",
  },
  {
    // Вопрос 12
    answer1: "18",
  },
  {
    // Вопрос 13 ?? //Ответ 7
    answer1: "7",
    answer2: "8",
  },
  {
    // Вопрос 14
    answer1: "12",
  },
];

export const validateAnswer = (taskNum, userAnswer) => {
  console.log("--->", taskNum, userAnswer);

  if (
    answer[taskNum].answer1 === userAnswer ||
    answer[taskNum].answer2 === userAnswer
  ) {
    return true;
  } else {
    return false;
  }
};
