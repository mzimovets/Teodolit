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

const TestTwo = (props) => {
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
        // правильный ответ
        name: "1",
        shape: "circle",
        coords: [246, 236, 25],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(154, 0, 50, 1.0)",
      },
      // {
      //   // остальная область
      //   name: "2",
      //   shape: "circle",
      //   coords: [246, 236, 205],
      //   preFillColor: "rgba(0, 0, 0, 0)",
      //   fillColor: "rgba(0, 0, 0, 0)",

      //   // hide: true, // Скрыть область
      //   strokeColor: "rgba(255, 0, 0, 1.0)",
      // },
    ],
  };

  return (
    <div style={{ paddingLeft: "20px", paddingTop: "12px" }}>
      {contextHolder}
      <Title level={3} style={{ marginTop: "-16px" }}>
        Тест по теме №2 "Основные части теодолита"
      </Title>
      <div className="testTaskHeader">
        <EditOutlined />
        Задание №1
        {answered1 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Горизонтальный круг теодолита состоит из ... (Ответ вводить в им.
        падеже, ед. числе с маленькой буквы)
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
        1.
        <Input
          placeholder="ответ"
          disabled={answered1}
          style={{ width: "100px" }}
          value={answeredResult?.[0]?.answer1 || ""}
          onChange={(event) => {
            const newArr = [...answeredResult];
            if (newArr[0] !== undefined) {
              newArr[0].answer1 = event.target.value;
            } else {
              newArr[0] = { answer1: event.target.value };
            }
            setAnsweredResult([...newArr]);
          }}
        />
        2.
        <Input
          placeholder="ответ"
          disabled={answered1}
          style={{ width: "100px" }}
          value={answeredResult?.[0]?.answer2 || ""}
          onChange={(event) => {
            const newArr = [...answeredResult];
            if (newArr[0] !== undefined) {
              newArr[0].answer2 = event.target.value;
            } else {
              newArr[0] = { answer2: event.target.value };
            }
            setAnsweredResult([...newArr]);
          }}
        />
      </div>
      <div style={{ textAlign: "left" }}>
        {" "}
        <Button
          className="button"
          style={{ marginBottom: "32px", marginTop: "16px" }}
          type="primary"
          disabled={answered1}
          onClick={onFirstTaskClick}
        >
          Ответить
        </Button>
      </div>
      <div className="testTaskHeader">
        <EditOutlined />
        Задание №2
        {answered2 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Как называется величина дуги лимба между двумя ближайшими штрихами?
        (Ответ вводить в им. падеже, ед. числе с маленькой буквы, через один
        пробел)
      </div>
      <div>
        <Input
          placeholder="ответ"
          disabled={answered2}
          style={{ width: "180px" }}
          value={answeredResult?.[1]?.answer1 || ""}
          onChange={(event) => {
            const newArr = [...answeredResult];
            if (newArr[1] !== undefined) {
              newArr[1].answer1 = event.target.value;
            } else {
              newArr[1] = { answer1: event.target.value };
            }
            setAnsweredResult([...newArr]);
          }}
        />
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
      <div className="testTaskHeader">
        <EditOutlined />
        Задание №3
        {answered3 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Через сколько градусов производится оцифровка лимба? (Введите число)
      </div>
      <div>
        <Input
          disabled={answered3}
          placeholder="ответ"
          style={{ width: "180px" }}
          value={answeredResult?.[2]?.answer1 || ""}
          onChange={(event) => {
            const newArr = [...answeredResult];
            if (newArr[2] !== undefined) {
              newArr[2].answer1 = event.target.value;
            } else {
              newArr[2] = { answer1: event.target.value };
            }
            setAnsweredResult([...newArr]);
          }}
        />
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
      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №4
        {answered4 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Для чего служит вертикальный круг теодолита? (Выберите один правильный
        ответ)
      </div>
      <div>
        <Radio.Group
          onChange={onChange}
          style={{ display: "grid", gap: "12px" }}
        >
          <Radio disabled={answered4} value={1}>
            измерение горизонтальных углов
          </Radio>
          <Radio disabled={answered4} value={2}>
            измерение расстояний
          </Radio>
          <Radio disabled={answered4} value={3}>
            измерение углов наклона
          </Radio>
          <Radio disabled={answered4} value={4}>
            все ответы верны
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
        <AimOutlined />
        Задание №5
        {answered5 == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Какую часть сетки нитей наводят на визирную цель для снятия отчетов при
        измерении углов?
      </div>
      <div
        style={{
          width: "54%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
          marginTop: "18px",
          paddingLeft: "8px",
          paddingRight: "8px",
        }}
      >
        <ImageMapper
          src={"/image/Topic1.3.png"}
          height={471}
          width={500}
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
          onImageClick={() => {
            setTask1("");
            onFiveTaskClick();
          }}
        />
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

export { TestTwo };
