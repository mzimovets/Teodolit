import React, { useState } from "react";
import { message, Button, Space, Tag } from "antd";
import ImageMapper from "react-img-mapper";
import { FrownOutlined, SmileOutlined, FormOutlined } from "@ant-design/icons";
import { answer, validateAnswer } from "./TestOneValidation";
import { fetchRequest } from "../../utils";

const TestOne = (props) => {
  const [coord, setCoord] = useState();
  const [answer1, setAnswer1] = useState();
  const [answer2, setAnswer2] = useState();
  const [answer3, setAnswer3] = useState();
  const [answer4, setAnswer4] = useState();

  const [task1, setTask1] = useState();
  const [task2, setTask2] = useState();
  const [task3, setTask3] = useState();
  const [task4, setTask4] = useState();

  const clearState = () => {
    setAnswer1(false);
    setAnswer2(false);
    setAnswer3(false);
    setAnswer4(false);

    setTask1();
    setTask2();
    setTask3();
    setTask4();
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

  const MAP_4 = {
    name: "my-map-4",
    areas: [
      {
        name: "1",
        shape: "poly",
        coords: [100, 10, 250, 10, 250, 240, 100, 240],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        name: "2",
        shape: "poly",
        coords: [50, 240, 50, 605, 345, 605, 345, 240],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
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
      content: `Тест не пройден. Правильных ответов ${correctAnswersCount} / 4`,
      duration: 5.5,
    });
  };

  const onTestComplete = () => {
    const testResult = [];
    const answeredResult = [task1, task2, task3, task4];
    console.log("answeredResult", answeredResult);
    answeredResult.forEach((element, index) => {
      const userAnswer = validateAnswer(index, element);
      console.log("userAnswer", userAnswer);
      testResult.push(userAnswer);
    });

    const isTestPass =
      testResult.length == answer.length && testResult.indexOf(false) == -1;
    console.log("isTestPass", isTestPass);
    console.log(
      "testResult.length",
      testResult.length == answer.length && testResult.indexOf(false) == -1
    );

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
        topicId: 0,
        status: isTestPass ? "ПРОЙДЕНО" : "НЕ ПРОЙДЕНО",
      }
    ).then((data) => {
      console.log("data: ", data);
    });
    props.setIsModalVisible(false);
    clearState();
  };

  return (
    <div style={{ paddingLeft: "20px", paddingTop: "12px" }}>
      <div
        className="testTaskHeader"
        style={{
          display: "flex",
          gap: "6px",
          alignItems: "center",
        }}
      >
        <FormOutlined />
        Задание №1
        {answer1?.[0] === true ? (
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
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
      <div
        className="testTaskHeader"
        style={{ display: "flex", gap: "6px", alignItems: "center" }}
      >
        <FormOutlined />
        Задание №2
        {answer2?.[0] == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">базовая пластина</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_2}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer2([true]);
            setTask2(area.name);
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
      <div
        className="testTaskHeader"
        style={{
          display: "flex",
          gap: "6px",
          alignItems: "center",
        }}
      >
        <FormOutlined />
        Задание №3
        {answer3?.[0] == true ? (
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
        }}
      >
        <ImageMapper
          src={"/image/test1-1.png"}
          height={450}
          width={337}
          map={MAP_3}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer3([true]);
            setTask3(area.name);
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
      <div
        className="testTaskHeader"
        style={{ display: "flex", gap: "6px", alignItems: "center" }}
      >
        <FormOutlined />
        Задание №4
        {answer4?.[0] == true ? (
          <Tag style={{ marginLeft: "14px" }} color="orange">
            Ответ принят
          </Tag>
        ) : null}
      </div>
      <div className="testTaskDiscription">
        Нажмите на <b className="keyWord">деталь штатива</b>, используя которую
        производят <b className="keyWord">изменение высоты штатива</b>
      </div>
      <div
        style={{
          width: "40%",
          margin: "auto",
          marginBottom: "20px",
          border: "2px solid #d9d9d9",
          borderRadius: "14px",
        }}
      >
        <ImageMapper
          src={"/image/test1-2.png"}
          height={610}
          width={345}
          map={MAP_4}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer4([true]);
            setTask4(area.name);
          }}
          onImageMouseMove={(evt) => {
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>

      <>
        {contextHolder}
        <div style={{ textAlign: "right" }}>
          {" "}
          <Button type="primary" onClick={onTestComplete}>
            Завершить тест
          </Button>
        </div>
      </>
    </div>
  );
};

export { TestOne };
