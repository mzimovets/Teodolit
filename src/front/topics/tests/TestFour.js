import { React, useState, useEffect } from "react";
import { message, Spin, Tag, Button } from "antd";
import { SmileOutlined, FrownOutlined, AimOutlined } from "@ant-design/icons";
import { validateAnswer, answer } from "./TestFourValidation";
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
  const [answered7, setAnswered7] = useState(false);
  const [answered8, setAnswered8] = useState(false);
  const [answered9, setAnswered9] = useState(false);
  const [answered10, setAnswered10] = useState(false);
  const [answered11, setAnswered11] = useState(false);
  const [answered12, setAnswered12] = useState(false);
  const [answered13, setAnswered13] = useState(false);
  const [answered14, setAnswered14] = useState(false);

  // Cостояния для ответа пользователя и проверки правильности ответа
  const onFirstTaskClick = () => {
    setAnswered1(true);
  };

  const onSecondTaskClick = () => {
    console.log("taks 2 clicked ");
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

  const [task1, setTask1] = useState();
  const [task2, setTask2] = useState();
  const [task3, setTask3] = useState();
  const [task4, setTask4] = useState();
  const [task5, setTask5] = useState();
  const [task6, setTask6] = useState();
  const [task7, setTask7] = useState();
  const [task8, setTask8] = useState();
  const [task9, setTask9] = useState();
  const [task10, setTask10] = useState();
  const [task11, setTask11] = useState();
  const [task12, setTask12] = useState();
  const [task13, setTask13] = useState();
  const [task14, setTask14] = useState();
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
      content: `Тест не пройден. Правильных ответов ${correctAnswersCount} / 14`,
      duration: 5.5,
    });
  };

  const onTestComplete = () => {
    const testResult = [];
    const answeredResult = [
      task1,
      task2,
      task3,
      task4,
      task5,
      task6,
      task7,
      task8,
      task9,
      task10,
      task11,
      task12,
      task13,
      task14,
    ];
    console.log("Test 4", answeredResult);
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
        topicId: 3,
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_2 = {
    name: "my-map-2",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_3 = {
    name: "my-map-3",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_4 = {
    name: "my-map-4",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_5 = {
    name: "my-map-5",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_6 = {
    name: "my-map-6",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_7 = {
    name: "my-map-7",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_8 = {
    name: "my-map-8",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_9 = {
    name: "my-map-9",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_10 = {
    name: "my-map-10",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_11 = {
    name: "my-map-11",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_12 = {
    name: "my-map-12",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_13 = {
    name: "my-map-13",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_14 = {
    name: "my-map-14",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
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
      {/* Taks 1 */}
      <div>
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
              setTask1(area.name);
              setAnswered1(true);
              // onFirstTaskClick();
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              onFirstTaskClick();
            }}
          />
        </div>
      </div>
      {/* Task 2 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №2
          {console.log("AAAAAA", answered2)}
          {answered2 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">подъемный винт</b>
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

              setTask2(area.name);
              setAnswered2(true);
              // onSecondTaskClick();
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              onSecondTaskClick();
            }}
          />
        </div>
      </div>
      {/* Taks 3 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №3
          {answered3 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">площадка штатива</b>
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
              setTask3(area.name);
              onThirdTaskClick();
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              onThirdTaskClick();
            }}
          />
        </div>
      </div>
      {/* Taks 4 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №4
          {answered4 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">подставка(трегер)</b>
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
              setTask4(area.name);
              onFourthTaskClick();
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              onFourthTaskClick();
            }}
          />
        </div>
      </div>
      {/* Taks 5 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №5
          {answered5 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">кремальера</b>
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

              setTask5(area.name);
              onFiveTaskClick();
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              onFiveTaskClick();
            }}
          />
        </div>
      </div>
      {/* Task 6 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №6
          {answered6 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">зрительная труба</b>
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
              setTask6(area.name);
              onSixTaskClick();
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              onSixTaskClick();
            }}
          />
        </div>
      </div>
      {/* Task 7 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №7
          {answered7 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится <b className="keyWord">визир</b>
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
              setTask7(area.name);
              setAnswered7(true);
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              setAnswered7(true);
            }}
          />
        </div>
      </div>
      {/* Taks 8 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №8
          {answered8 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">базовая пластина(основание)</b>
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
              setAnswered8(true);
              setTask8(area.name);
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              setAnswered8(true);
            }}
          />
        </div>
      </div>
      {/* Taks 9 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №9
          {answered9 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">закрепительный винт зрительной трубы</b>
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
              setTask9(area.name);
              setAnswered9(true);
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              setAnswered9(true);
            }}
          />
        </div>
      </div>
      {/* Task 10 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №10
          {answered10 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">цилиндрический уровень</b>
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
              setTask10(area.name);
              setAnswered10(true);
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              setAnswered10(true);
            }}
          />
        </div>
      </div>
      {/* Task 11 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №11
          {answered11 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">наводящий винт</b>
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
              setTask11(area.name);
              setAnswered11(true);
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              setAnswered11(true);
            }}
          />
        </div>
      </div>
      {/* Task 12 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №12
          {answered12 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">
            окуляр отсчетного микроскопа с диоптрийным кольцом
          </b>
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
              setTask12(area.name);
              setAnswered12(true);
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              setAnswered12(true);
            }}
          />
        </div>
      </div>
      {/* Task 13 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №13
          {answered13 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">зажимной(закрепительный) винт</b>
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
              setTask13(area.name);
              setAnswered13(true);
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask13("");
              setAnswered13(true);
            }}
          />
        </div>
      </div>
      {/* Task 14 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №14
          {answered14 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">наводящий винт зрительной трубы</b>
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
              setTask14(area.name);
              setAnswered14(true);
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            onImageClick={() => {
              setTask1("");
              setAnswered14(true);
            }}
          />
        </div>
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
