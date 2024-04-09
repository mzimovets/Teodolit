export const answer = [
  {
    // Вопрос 1
    answer1: "лимб",
    answer2: "алидада",
  },
  {
    // Вопрос 2
    answer1: "цена деления лимба",
  },
  {
    //  Вопрос 3
    answer1: "1",
  },
  {
    // Вопрос 4
    answer1: "3",
  },
];

export const validateAnswer = (taskNum, userAnswer) => {
  const boolResult = [];
  const taskAnswerKeys = Object.keys(answer[taskNum]);
  for (let index = 0; index < taskAnswerKeys.length; index++) {
    const element = answer[taskNum][taskAnswerKeys[index]];
    if (element === userAnswer[taskAnswerKeys[index]]) {
      //.toLowerCase()
      boolResult.push(true);
    } else boolResult.push(false);
  }
  if (!boolResult.includes(false)) return true;
  else return false;
};
