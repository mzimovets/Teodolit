export const answer = [
  {
    // Вопрос 1
    answer1: "–131",
    answer2: "15704",
  },
];

export const validateAnswer = (taskNum, userAnswer) => {
  console.log("--->", taskNum, userAnswer);
  console.log(
    "условие",
    "-131" == userAnswer.answer1 && "15704" == userAnswer.answer2
  );

  if ("-131" == userAnswer.answer1 && "15704" == userAnswer.answer2) {
    return true;
  } else {
    return false;
  }
};
