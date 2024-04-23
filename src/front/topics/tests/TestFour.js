import { React, useState } from "react";
import { message, Input, Tag, Button, Radio, Image } from "antd";
import {
  SmileOutlined,
  FrownOutlined,
  CheckCircleOutlined,
  EditOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { validateAnswer, answer } from "./TestThreeValidation";
import { fetchRequest } from "../../utils";
import Title from "antd/es/typography/Title";
import ImageMapper from "react-img-mapper";

const TestFour = (props) => {
  // Состояние для блокировки полей после ответа пользователя
  const [answered1, setAnswered1] = useState(false);
  const [answered2, setAnswered2] = useState(false);
  const [answered3, setAnswered3] = useState(false);
  const [answered4, setAnswered4] = useState(false);
  const [answered5, setAnswered5] = useState(false);
  const [answered6, setAnswered6] = useState(false);
  const [answeredResult, setAnsweredResult] = useState([]);

  const onChange = (event) => {
    const newArr = [...answeredResult];
    if (newArr[3] !== undefined) {
      newArr[3].answer1 = event.target.value;
    } else {
      newArr[3] = { answer1: event.target.value };
    }
    setAnsweredResult([...newArr]);
    newArr[3].answer1 = event.target.value;
    setAnsweredResult([...newArr]);
  };

  // Cостояния для ответа пользователя и проверки правильности ответа
  const onFirstTaskClick = () => {
    setAnswered1(true);
  };

  const onSecondTaskClick = () => {
    setAnswered2(true);
  };

  const onThirdTaskClick = () => {
    setAnswered3(true);
  };

  const onFourthTaskClick = () => {
    setAnswered4(true);
  };

  const onFiveTaskClick = () => {
    setAnswered5(true);
  };

  const onSixTaskClick = () => {
    setAnswered6(true);
  };

  const clearState = () => {
    setAnsweredResult([]);
    setAnswered1(false);
    setAnswered2(false);
    setAnswered3(false);
    setAnswered4(false);
    setAnswered5(false);
    setAnswered6(false);

    //
    setTask1();
    setTask2();
    setTask3();
    setTask4();
    setTask5();
    setTask6();
    //
  };

  // ?
  const [coord, setCoord] = useState();
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [answer4, setAnswer4] = useState();
  const [answer5, setAnswer5] = useState();
  const [answer6, setAnswer6] = useState();

  const [task1, setTask1] = useState();
  const [task2, setTask2] = useState();
  const [task3, setTask3] = useState();
  const [task4, setTask4] = useState();
  const [task5, setTask5] = useState();
  const [task6, setTask6] = useState();
  // ?

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      icon: <SmileOutlined style={{ fontSize: "16px" }} />,
      type: "success",
      content: "Тест успешно пройден!",
      duration: 5.5,
    });
  };

  const error = (correctAnswersCount) => {
    messageApi.open({
      icon: <FrownOutlined style={{ fontSize: "16px" }} />,
      type: "error",
      content: `Тест не пройден. Правильных ответов ${correctAnswersCount} / 4`,
      duration: 5.5,
    });
  };

  const onTestComplete = () => {
    const testResult = [];
    answeredResult.forEach((element, index) => {
      const userAnswer = validateAnswer(index, element);
      testResult.push(userAnswer);
    });
    const isTestPass =
      testResult.length == answer.length && testResult.indexOf(false) == -1;
    if (isTestPass) {
      success();
    } else {
      error(testResult.filter((result) => result).length);
    }
    fetchRequest(
      "/userTest",
      "put",
      {
        "Content-type": "application/json",
        Accept: "*/*",
      },
      {
        login: localStorage.getItem("login"),
        password: localStorage.getItem("password"),
        topicId: 1,
        status: isTestPass ? "ПРОЙДЕНО" : "НЕ ПРОЙДЕНО",
      }
    ).then((data) => {
      console.log("data: ", data);
    });
    props.setIsModalVisible(false);
    clearState();
  };

  const MAP_1 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_2 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_3 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_4 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_5 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_6 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_7 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_8 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_9 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_10 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_11 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_12 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_13 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  const MAP_14 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(184, 134, 11)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(47, 79, 79)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(128, 128, 0)",
      },
    ],
  };

  return (
    <div style={{ paddingLeft: "20px", paddingTop: "12px" }}>
      {contextHolder}
      <Title level={3} style={{ marginTop: "-16px", marginRight: "14px" }}>
        Тест по теме №4 "Устройство и принцип работы технических теодолитов
        2Т30П и 4Т30П"
      </Title>
      <div className="testTaskHeader">
        <AimOutlined />
        Задание №1
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_1}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
      <div className="testTaskHeader">
        <AimOutlined />
        Задание №2
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_2}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
      <div className="testTaskHeader">
        <AimOutlined />
        Задание №3
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_3}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
      <div className="testTaskHeader">
        <AimOutlined />
        Задание №4
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_4}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
      <div className="testTaskHeader">
        <AimOutlined />
        Задание №5
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_5}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
      <div className="testTaskHeader">
        <AimOutlined />
        Задание №6
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_6}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
      <div className="testTaskHeader">
        <AimOutlined />
        Задание №7
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_7}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>

      <div className="testTaskHeader">
        <AimOutlined />
        Задание №8
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_8}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>

      <div className="testTaskHeader">
        <AimOutlined />
        Задание №9
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_9}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>

      <div className="testTaskHeader">
        <AimOutlined />
        Задание №10
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_10}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>

      <div className="testTaskHeader">
        <AimOutlined />
        Задание №11
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_11}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>

      <div className="testTaskHeader">
        <AimOutlined />
        Задание №12
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_12}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>

      <div className="testTaskHeader">
        <AimOutlined />
        Задание №13
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_13}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>

      <div className="testTaskHeader">
        <AimOutlined />
        Задание №14
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">становый винт</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_14}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
            setTask1(area.name);
            onFiveTaskClick();
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>

      <div style={{ textAlign: "right" }}>
        {" "}
        <Button type="primary" type="primary" onClick={onTestComplete}>
          Завершить тест
        </Button>
      </div>
    </div>
  );
};

export { TestFour };
