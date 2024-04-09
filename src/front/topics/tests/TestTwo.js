import { React, useState } from "react";
import { message, Input, Tag, Button, Radio } from "antd";
import {
  CheckCircleOutlined,
  SmileOutlined,
  FrownOutlined,
} from "@ant-design/icons";

import ImageMapper from "react-img-mapper";
import { validateAnswer, answer } from "./TestTwoValidation";
import { fetchRequest } from "../../utils";

const TestTwo = (props) => {
  // Состояние для блокировки полей после ответа пользователя
  const [answered1, setAnswered1] = useState(false);
  const [answered2, setAnswered2] = useState(false);
  const [answered3, setAnswered3] = useState(false);
  const [answered4, setAnswered4] = useState(false);
  const [answeredResult, setAnsweredResult] = useState([]);

  // радио-кнопка
  const [value, setValue] = useState(1);
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
    const result = validateAnswer(0, { answer1: "лимб", answer2: "аидада" });
    console.log(result);
    setAnswered1(true);
  };

  const onSecondTaskClick = () => {
    const result = validateAnswer(0, { answer1: "цена деления лимба" });
    setAnswered2(true);
  };

  const onThirdTaskClick = () => {
    const result = validateAnswer(0, { answer1: "1" });
    setAnswered3(true);
  };

  const onFourthTaskClick = () => {
    const result = validateAnswer(0, { answer1: "3" });
    setAnswered4(true);
  };

  const clearState = () => {
    setAnsweredResult([]);
    setAnswered1(false);
    setAnswered2(false);
    setAnswered3(false);
    setAnswered4(false);
  };

  const URL = "/logo192.png";
  const MAP = {
    name: "my-map",
    // GET JSON FROM BELOW URL AS AN EXAMPLE AND PUT IT HERE
    areas: [
      {
        name: "1",
        shape: "poly",
        coords: [25, 33, 27, 300, 128, 240, 128, 94],
        preFillColor: "green",
        fillColor: "blue",
      },
      {
        name: "2",
        shape: "poly",
        coords: [219, 118, 220, 210, 283, 210, 284, 119],
        preFillColor: "pink",
      },
      {
        name: "3",
        shape: "poly",
        coords: [381, 241, 383, 94, 462, 53, 457, 282],
        fillColor: "yellow",
      },
      {
        name: "4",
        shape: "poly",
        coords: [245, 285, 290, 285, 274, 239, 249, 238],
        preFillColor: "red",
      },
      { name: "5", shape: "circle", coords: [170, 100, 25] },
    ],
  };

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      icon: <SmileOutlined style={{ fontSize: "16px" }} />,
      type: "success",
      content: "Тест успешно пройден!",
    });
  };

  const error = () => {
    messageApi.open({
      icon: <FrownOutlined style={{ fontSize: "16px" }} />,
      type: "error",
      content: "Тест не пройден. Правильных ответов 4 / 5",
    });
    console.log("AHTUNG!");
  };

  const onTestComplete = () => {
    console.log("answeredResult: ", answeredResult);
    const testResult = [];
    answeredResult.forEach((element, index) => {
      const userAnswer = validateAnswer(index, element);
      testResult.push(userAnswer);
    });
    const isTestPass =
      testResult.length == answer.length && testResult.indexOf(false) == -1;
    if (isTestPass) {
      success();
      console.log("success");
    } else {
      error();
      console.log("false");
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
    // брать данные (ответы пользователя) и отправлять в валидатор. по результату показываем алерт. Отправляем фетч запрос на обновление резльтатов тестирования
  };

  return (
    <div style={{ paddingLeft: "20px", paddingTop: "12px" }}>
      {contextHolder}
      <div className="testTaskHeader">
        Задание №1
        {answered1 == true ? (
          <Tag
            icon={<CheckCircleOutlined />}
            style={{ marginLeft: "14px" }}
            color="success"
          >
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
        {/* Кнопка первого вопроса */}
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
        Задание №2
        {answered2 == true ? (
          <Tag
            icon={<CheckCircleOutlined />}
            style={{ marginLeft: "14px" }}
            color="success"
          >
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Как называется величина дуги лимбо между двумя ближайшими штрихами?
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
        Задание №3
        {answered3 == true ? (
          <Tag
            icon={<CheckCircleOutlined />}
            style={{ marginLeft: "14px" }}
            color="success"
          >
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
        Задание №4
        {answered4 == true ? (
          <Tag
            icon={<CheckCircleOutlined />}
            style={{ marginLeft: "14px" }}
            color="success"
          >
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
            ответ 1
          </Radio>
          <Radio disabled={answered4} value={2}>
            ответ 2
          </Radio>
          <Radio disabled={answered4} value={3}>
            измерение углов наклона
          </Radio>
          <Radio disabled={answered4} value={4}>
            ответ 4
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

export { TestTwo };
