import { React, useState } from "react";
import { message, Input, Tag, Button, Image } from "antd";
import { SmileOutlined, FrownOutlined, EditOutlined } from "@ant-design/icons";
import { validateAnswer, answer } from "./TestSixValidation";
import { fetchRequest } from "../../utils";
import Title from "antd/es/typography/Title";
import { useDispatch } from "react-redux";
import { fetchTopicState } from "../store/disabledStateSlice";

const TestSix = (props) => {
  const dispatch = useDispatch();

  const [answered1, setAnswered1] = useState(false);
  const [task1grad, setTask1grad] = useState();
  const [task1min, setTask1min] = useState();
  const [task2grad, setTask2grad] = useState();
  const [task2min, setTask2min] = useState();

  // Cостояния для ответа пользователя и проверки правильности ответа
  const onFirstTaskClick = () => {
    setAnswered1(true);
  };

  const clearState = () => {
    setAnswered1(false);
    setTask1grad();
    setTask1min();
    setTask2grad();
    setTask2min();
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
    dispatch(fetchTopicState());
  };

  const error = (correctAnswersCount) => {
    messageApi.open({
      icon: <FrownOutlined style={{ fontSize: "16px" }} />,
      type: "error",
      content: `Тест не пройден. Правильных ответов ${correctAnswersCount} / 1`,
      duration: 5.5,
    });
  };

  const onTestComplete = () => {
    const testResult = [];
    const answeredResult = [
      {
        answer1: `${task1grad}${task1min}`,
        answer2: `${task2grad}${task2min}`,
      },
    ];
    answeredResult.forEach((element, index) => {
      console.log("element", element);
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
      dispatch (fetchTopicState());
    });
    props.setIsModalVisible(false);
    clearState();
  };

  return (
    <div style={{ paddingLeft: "20px", paddingTop: "12px" }}>
      {contextHolder}
      <Title level={3} style={{ marginTop: "-16px" }}>
        Тест по теме №6 "Отсчётные устройства теодолитов 2Т30П и 4Т30П"
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
        Напишите какие значения указывают шкалы на горизонтальном и вертикальном
        кругах
      </div>
      <div style={{ margin: "auto", width: "50%" }}>
        <Image
          style={{
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
          }}
          width={400}
          preview={false}
          src="/image/Topic1.7.png"
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        1. Вертикальный круг
        <div>
          <Input
            placeholder="ответ"
            disabled={answered1}
            style={{ width: "65px" }}
            value={task1grad}
            onChange={(event) => {
              setTask1grad(event.target.value);
            }}
          />
          <span style={{ marginLeft: "4px" }}>°</span>
          <span style={{ marginLeft: "4px" }}>
            <Input
              placeholder="ответ"
              disabled={answered1}
              style={{ width: "65px" }}
              value={task1min}
              onChange={(event) => {
                setTask1min(event.target.value);
              }}
            />
            <span style={{ marginLeft: "4px" }}>′</span>
          </span>
        </div>
        2. Горизонтальный круг
        <div>
          <Input
            placeholder="ответ"
            disabled={answered1}
            style={{ width: "65px" }}
            value={task2grad}
            onChange={(event) => {
              setTask2grad(event.target.value);
            }}
          />
          <span style={{ marginLeft: "4px" }}>°</span>
          <span style={{ marginLeft: "4px" }}>
            <Input
              placeholder="ответ"
              disabled={answered1}
              style={{ width: "65px" }}
              value={task2min}
              onChange={(event) => {
                setTask2min(event.target.value);
              }}
            />
            <span style={{ marginLeft: "4px" }}>′</span>
          </span>
        </div>
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
      <div style={{ textAlign: "right" }}>
        {" "}
        <Button type="primary" onClick={onTestComplete}>
          Завершить тест
        </Button>
      </div>
    </div>
  );
};

export { TestSix };
