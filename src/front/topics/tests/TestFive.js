import { React, useState } from "react";
import { message, Input, Tag, Button, Radio } from "antd";
import {
  SmileOutlined,
  FrownOutlined,
  CheckCircleOutlined,
  EditOutlined,
  AimOutlined,
} from "@ant-design/icons";
import { validateAnswer, answer } from "./TestTwoValidation";
import { fetchRequest } from "../../utils";
import Title from "antd/es/typography/Title";
import ImageMapper from "react-img-mapper";

const TestFive = (props) => {
  // Состояние для блокировки полей после ответа пользователя
  const [answered1, setAnswered1] = useState(false);
  const [answered2, setAnswered2] = useState(false);
  const [answered3, setAnswered3] = useState(false);
  const [answered4, setAnswered4] = useState(false);
  const [answered5, setAnswered5] = useState(false);
  const [answeredResult, setAnsweredResult] = useState([]);

  // ?
  const [coord, setCoord] = useState();
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [answer4, setAnswer4] = useState();

  const [task1, setTask1] = useState();
  const [task2, setTask2] = useState();
  const [task3, setTask3] = useState();
  const [task4, setTask4] = useState();
  // ?

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

  const clearState = () => {
    setAnsweredResult([]);
    setAnswered1(false);
    setAnswered2(false);
    setAnswered3(false);
    setAnswered4(false);
    setAnswered5(false);

    // ?
    setAnswer1(false);
    setAnswer2(false);
    setAnswer3(false);
    setAnswer4(false);

    setTask1();
    setTask2();
    setTask3();
    setTask4();
    // ?
  };

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
      content: `Тест не пройден. Правильных ответов ${correctAnswersCount} / 5`,
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
        // остальная область
        name: "1",
        shape: "circle",
        coords: [246, 236, 205],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1.0)",
      },
      {
        // правильный ответ
        name: "2",
        shape: "circle",
        coords: [246, 236, 25],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(154, 205, 50, 1.0)",
      },
    ],
  };

  return (
    <div style={{ paddingLeft: "20px", paddingTop: "12px" }}>
      {contextHolder}
      <Title level={3} style={{ marginTop: "-16px" }}>
        Тест по теме №5 "Общие сведения о поверках теодолитов 2Т30П и 4Т30П"
      </Title>
      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №1
        {answered4 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">Поверка - это ...</div>
      <div>
        <Radio.Group
          onChange={onChange}
          style={{ display: "grid", gap: "12px" }}
        >
          <Radio disabled={answered4} value={1}>
            действия, имеющие целью выявить соблюдение геометрических условий,
            предъявляемых к конструкции прибора
          </Radio>

          <Radio disabled={answered4} value={2}>
            юстировка
          </Radio>
          <Radio disabled={answered4} value={3}>
            центрирование
          </Radio>
          <Radio disabled={answered4} value={4}>
            действия, направленные на устранение выявленных нарушений в приборе
          </Radio>
          <Radio disabled={answered4} value={5}>
            горизонтирование
          </Radio>
        </Radio.Group>
      </div>
      <div style={{ textAlign: "left" }}>
        {" "}
        <Button
          className="button"
          style={{ marginBottom: "32px", marginTop: "16px" }}
          type="primary"
          disabled={answered4}
          onClick={onFourthTaskClick}
        >
          Ответить
        </Button>
      </div>

      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №2
        {answered4 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">Юстировка - это ...</div>
      <div>
        <Radio.Group
          onChange={onChange}
          style={{ display: "grid", gap: "12px" }}
        >
          <Radio disabled={answered4} value={1}>
            действия, имеющие целью выявить соблюдение геометрических условий,
            предъявляемых к конструкции прибора
          </Radio>
          <Radio disabled={answered4} value={2}>
            поверка
          </Radio>
          <Radio disabled={answered4} value={3}>
            центрирование
          </Radio>
          <Radio disabled={answered4} value={4}>
            действия, направленные на устранение выявленных нарушений в приборе
          </Radio>
          <Radio disabled={answered4} value={5}>
            горизонтирование
          </Radio>
        </Radio.Group>
      </div>
      <div style={{ textAlign: "left" }}>
        {" "}
        <Button
          className="button"
          style={{ marginBottom: "32px", marginTop: "16px" }}
          type="primary"
          disabled={answered4}
          onClick={onFourthTaskClick}
        >
          Ответить
        </Button>
      </div>
      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №3
        {answered4 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Когда выполняют поверку и юстировку?
      </div>
      <div>
        <Radio.Group
          onChange={onChange}
          style={{ display: "grid", gap: "12px" }}
        >
          <Radio disabled={answered4} value={1}>
            после измерения, для проверки функционирования
          </Radio>
          <Radio disabled={answered4} value={2}>
            до измерения, после внешнего осмотра
          </Radio>
          <Radio disabled={answered4} value={3}>
            во время работы, не реже одного раза на измерение
          </Radio>
        </Radio.Group>
      </div>
      <div style={{ textAlign: "left" }}>
        {" "}
        <Button
          className="button"
          style={{ marginBottom: "32px", marginTop: "16px" }}
          type="primary"
          disabled={answered4}
          onClick={onFourthTaskClick}
        >
          Ответить
        </Button>
      </div>
      <div style={{ textAlign: "right" }}>
        {" "}
        <Button type="primary" onClick={onTestComplete}>
          Завершить тест
        </Button>
      </div>
    </div>
  );
};

export { TestFive };
