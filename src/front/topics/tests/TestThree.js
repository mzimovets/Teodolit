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
import { useDispatch } from "react-redux";
import { fetchTopicState } from "../store/disabledStateSlice";

const TestThree = (props) => {
  const dispatch = useDispatch();
  // Состояние для блокировки полей после ответа пользователя
  const [answered1, setAnswered1] = useState(false);
  const [answered2, setAnswered2] = useState(false);
  const [answered3, setAnswered3] = useState(false);
  const [answered4, setAnswered4] = useState(false);
  const [answered5, setAnswered5] = useState(false);
  const [answered6, setAnswered6] = useState(false);
  const [answeredResult, setAnsweredResult] = useState([]);

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
    dispatch(fetchTopicState());
  };

  const error = (correctAnswersCount) => {
    messageApi.open({
      icon: <FrownOutlined style={{ fontSize: "16px" }} />,
      type: "error",
      content: `Тест не пройден. Правильных ответов ${correctAnswersCount} / 6`,
      duration: 5.5,
    });
  };

  const onTestComplete = () => {
    const testResult = [];
    const answeredResult = [task1, task2, task3, task4, task5, task6];
    answeredResult.forEach((element, index) => {
      const userAnswer = validateAnswer(index, element);
      testResult.push(userAnswer);
    });
    console.log("answeredResult", answeredResult);
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
        topicId: 2,
        status: isTestPass ? "ПРОЙДЕНО" : "НЕ ПРОЙДЕНО",
      }
    ).then((data) => {
      console.log("data: ", data);
      dispatch (fetchTopicState());
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
        // Базовая пластина
        name: "2",
        shape: "poly",
        coords: [115, 285, 115, 247, 225, 249, 225, 280, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива
        name: "3",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // остальные области
        name: "4",
        shape: "rect",
        coords: [90, 20, 260, 247],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // остальные области
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
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

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1.0)",
      },
      {
        // Базовая пластина
        name: "2",
        shape: "poly",
        coords: [115, 285, 115, 247, 225, 249, 225, 280, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1.0)",
      },
      {
        // площадка штатива
        name: "3",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1.0)",
      },
      {
        // остальные области
        name: "4",
        shape: "poly",
        coords: [
          90, 246, 90, 20, 250, 20, 250, 155, 180, 155, 180, 185, 258, 180, 258,
          248,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0, 1.0)",
      },
      {
        // остальные области
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1.0)",
      },
      {
        // уровень
        name: "6",
        shape: "poly",
        coords: [181, 183, 181, 156, 257, 156, 257, 179],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255, 1.0)",
      },
    ],
  };

  return (
    <div style={{ paddingLeft: "20px", paddingTop: "12px" }}>
      {contextHolder}
      <Title level={3} style={{ marginTop: "-16px" }}>
        Тест по теме №3 "Установка теодолита в рабочее положение"
      </Title>
      {/* Task 1 */}
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
          Нажмите на изображение, на ту деталь, которую нужно ослабить для
          перемещения теодолита по головке штатива до нужного положения
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
              onFirstTaskClick();
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
          />
        </div>
      </div>
      {/* Task 2 */}
      <div>
        <div className="testTaskHeader">
          <CheckCircleOutlined />
          Задание №2
          {answered2 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Какое дополнительное оборудование используют при центрировании с
          помощью оптического центрира (Выберите один правильный ответ)
        </div>
        <div>
          <Radio.Group
            onChange={(e) => {
              setTask2(e.target.value);
            }}
            style={{ display: "grid", gap: "12px" }}
          >
            <Radio disabled={answered2} value={1}>
              зрительная труба
            </Radio>
            <Radio disabled={answered2} value={2}>
              окуляр-насадка
            </Radio>
            <Radio disabled={answered2} value={3}>
              перископ
            </Radio>
            <Radio disabled={answered2} value={4}>
              сетка нитей
            </Radio>
          </Radio.Group>
        </div>
        <div style={{ textAlign: "left" }}>
          {" "}
          <Button
            className="button"
            style={{ marginBottom: "32px", marginTop: "16px" }}
            type="primary"
            disabled={answered2}
            onClick={onSecondTaskClick}
          >
            Ответить
          </Button>
        </div>
      </div>
      {/* Task 3 */}
      <div>
        <div className="testTaskHeader">
          <CheckCircleOutlined />
          Задание №3
          {answered3 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          При центрировании с помощью оптического центрира теодолит перемещают
          пока ... (Выберите один правильный ответ)
        </div>
        <div>
          <Radio.Group
            onChange={(e) => {
              setTask3(e.target.value);
            }}
            style={{ display: "grid", gap: "12px" }}
          >
            <Radio disabled={answered3} value={1}>
              в поле зрения сетка нити не совпадет с вертикальной осью
            </Radio>
            <Radio disabled={answered3} value={2}>
              в поле зрения вертикальная ось не совпадет с горизонтальной осью
            </Radio>
            <Radio disabled={answered3} value={3}>
              в поле зрения сетка нитей не выйдет за пределы круга
            </Radio>
            <Radio disabled={answered3} value={4}>
              в поле зрения центр точки не совпадает с центром сетки нитей
            </Radio>
          </Radio.Group>
        </div>
        <div style={{ textAlign: "left" }}>
          {" "}
          <Button
            className="button"
            style={{ marginBottom: "32px", marginTop: "16px" }}
            type="primary"
            disabled={answered3}
            onClick={onThirdTaskClick}
          >
            Ответить
          </Button>
        </div>
      </div>
      {/* Task 4 */}
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
          Ориентируясь на показания какой детали теодолита осуществляют его
          горизонтирование
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
              setTask4(area.name);
              onFourthTaskClick();
            }}
            onImageMouseMove={(evt) => {
              setCoord({ x: evt.clientX, y: evt.clientY });
            }}
            style={{ marginBottom: "32px" }}
          />
        </div>
      </div>
      {/* Task 5 */}
      <div>
        <div className="testTaskHeader">
          <CheckCircleOutlined />
          Задание №5
          {answered5 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Какие два винта в текущем положении теодолита нужно вращать для вывода
          пузырька уровня в нуль-пункт? (Выберите один правильный ответ)
        </div>
        <div style={{ margin: "auto", width: "52%" }}>
          <Image
            style={{
              marginBottom: "20px",
              border: "2px solid #d9d9d9",
              borderRadius: "14px",
            }}
            width={500}
            preview={false}
            src="/image/Topic1.4a.png"
          />
        </div>
        <div>
          <Radio.Group
            onChange={(e) => {
              setTask5(e.target.value);
            }}
            style={{ display: "grid", gap: "12px" }}
          >
            <Radio disabled={answered5} value={1}>
              винт №1 и винт №2
            </Radio>
            <Radio disabled={answered5} value={2}>
              винт №2 и винт №3
            </Radio>
            <Radio disabled={answered5} value={3}>
              винт №3 и винт №1
            </Radio>
          </Radio.Group>
        </div>
        <div style={{ textAlign: "left" }}>
          {" "}
          <Button
            className="button"
            style={{ marginBottom: "32px", marginTop: "16px" }}
            type="primary"
            disabled={answered5}
            onClick={onFiveTaskClick}
          >
            Ответить
          </Button>
        </div>
      </div>
      {/* Task 6 */}
      <div>
        <div className="testTaskHeader">
          <CheckCircleOutlined />
          Задание №6
          {answered6 == true ? (
            <Tag style={{ marginLeft: "14px" }} color="orange">
              Ответ принят
            </Tag>
          ) : null}
        </div>
        <div className="testTaskDiscription">
          Какой винт в текущем положении теодолита нужно вращать для вывода
          пузырька уровня в нуль-пунт? (Выберите один правильный ответ)
        </div>
        <div style={{ margin: "auto", width: "52%" }}>
          <Image
            style={{
              marginBottom: "20px",
              border: "2px solid #d9d9d9",
              borderRadius: "14px",
            }}
            width={500}
            preview={false}
            src="/image/Topic1.4b.png"
          />
        </div>
        <div>
          <Radio.Group
            onChange={(e) => {
              setTask6(e.target.value);
            }}
            style={{ display: "grid", gap: "12px" }}
          >
            <Radio disabled={answered6} value={1}>
              винт №1
            </Radio>
            <Radio disabled={answered6} value={2}>
              винт №2
            </Radio>
            <Radio disabled={answered6} value={3}>
              винт №3
            </Radio>
          </Radio.Group>
        </div>
        <div style={{ textAlign: "left" }}>
          {" "}
          <Button
            className="button"
            style={{ marginBottom: "32px", marginTop: "16px" }}
            type="primary"
            disabled={answered6}
            onClick={onSixTaskClick}
          >
            Ответить
          </Button>
        </div>
        <div style={{ textAlign: "right" }}>
          {" "}
          <Button type="primary" type="primary" onClick={onTestComplete}>
            Завершить тест
          </Button>
        </div>
      </div>
    </div>
  );
};

export { TestThree };
