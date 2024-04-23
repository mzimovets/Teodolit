import { React, useState } from "react";
import { Input, Radio } from "antd";
import {
  SmileOutlined,
  FrownOutlined,
  CheckCircleOutlined,
  EditOutlined,
  AimOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import ImageMapper from "react-img-mapper";

const KeyTwo = (props) => {
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

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // правильный ответ
        name: "2",
        shape: "circle",
        coords: [246, 236, 25],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1.0)",
      },
    ],
  };

  return (
    <div style={{ paddingLeft: "10px", paddingTop: "12px" }}>
      <Title level={3} style={{ marginTop: "-16px" }}>
        Тест по теме №2 "Основные части теодолита"
      </Title>
      <div className="testTaskHeader">
        <EditOutlined />
        Задание №1
      </div>
      <div className="testTaskDiscription">
        Горизонтальный круг теодолита состоит из ... (Ответ вводить в им.
        падеже, ед. числе с маленькой буквы)
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "20px",
          marginBottom: "28px",
        }}
      >
        1.
        <Input
          placeholder="ответ"
          disabled={true}
          style={{ width: "100px" }}
          value="лимб"
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
          disabled={true}
          style={{ width: "100px" }}
          value="алидада"
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

      <div className="testTaskHeader">
        <EditOutlined />
        Задание №2
      </div>
      <div className="testTaskDiscription">
        Как называется величина дуги лимба между двумя ближайшими штрихами?
        (Ответ вводить в им. падеже, ед. числе с маленькой буквы, через один
        пробел)
      </div>
      <div style={{ marginBottom: "28px" }}>
        <Input
          placeholder="ответ"
          disabled={true}
          style={{ width: "180px" }}
          value="цена деления лимба"
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

      <div className="testTaskHeader">
        <EditOutlined />
        Задание №3
      </div>
      <div className="testTaskDiscription">
        Через сколько градусов производится оцифровка лимба? (Введите число)
      </div>
      <div style={{ marginBottom: "28px" }}>
        <Input
          disabled={true}
          placeholder="ответ"
          style={{ width: "180px" }}
          value="1"
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

      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №4
      </div>
      <div className="testTaskDiscription">
        Для чего служит вертикальный круг теодолита? (Выберите один правильный
        ответ)
      </div>
      <div style={{ marginBottom: "28px" }}>
        <Radio.Group
          onChange={onChange}
          style={{ display: "grid", gap: "12px" }}
        >
          <Radio disabled={true} value={1}>
            измерение горизонтальных углов
          </Radio>
          <Radio disabled={true} value={2}>
            измерение расстояний
          </Radio>
          <Radio disabled={false} defaultValue={3}>
            измерение углов наклона
          </Radio>
          <Radio disabled={true} value={4}>
            все ответы верны
          </Radio>
        </Radio.Group>
      </div>

      <div className="testTaskHeader">
        <AimOutlined />
        Задание №5
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
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
    </div>
  );
};

export { KeyTwo };
