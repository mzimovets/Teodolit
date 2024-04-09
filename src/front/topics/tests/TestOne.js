import React, { useState } from "react";
import {
  message,
  Button,
  Space,
  Divider,
  Flex,
  Tag,
  Checkbox,
  ConfigProvider,
} from "antd";

import ImageMapper from "react-img-mapper";
import { useSearchParams } from "react-router-dom";
import {
  CheckCircleOutlined,
  FrownOutlined,
  SmileOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { forEach } from "lodash";
import { validateAnswer } from "./TestTwoValidation";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const TestOne = (props) => {
  const [coord, setCoord] = useState(); //получение координат
  const [answer1, setAnswer1] = useState(); //получение ответа на вопрос 1
  const [answer2, setAnswer2] = useState(); //получение ответа на вопрос 2
  const [answer3, setAnswer3] = useState(); //получение ответа на вопрос 3
  const [answer4, setAnswer4] = useState(); //получение ответа на вопрос 4

  const MAP_1 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [145, 368, 205, 303],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина
        name: "2",
        shape: "rect",
        coords: [95, 210, 257, 245],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Площадка штатива
        name: "3",
        shape: "rect",
        coords: [60, 247, 280, 300],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
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
        coords: [145, 368, 205, 303],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина
        name: "2",
        shape: "rect",
        coords: [95, 210, 257, 245],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Площадка штатива
        name: "3",
        shape: "rect",
        coords: [60, 247, 280, 300],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
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
        coords: [145, 368, 205, 303],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина
        name: "2",
        shape: "rect",
        coords: [95, 210, 257, 245],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Площадка штатива
        name: "3",
        shape: "rect",
        coords: [60, 247, 280, 300],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  const MAP_4 = {
    name: "my-map-4",
    areas: [
      {
        // "ноги" штатива слева - направо
        name: "1",

        shape: "poly",
        coords: [80, 335, 25, 495, 65, 495, 120, 340], // x лево вверх, y лево вверх, x лево низ, y низ лево
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        name: "2",
        shape: "rect",
        coords: [155, 315, 195, 430], //левая сторона, верхняя сторона, правая сторона,  нижняя сторона,
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        name: "3",
        shape: "poly",
        coords: [260, 340, 300, 330, 345, 495, 315, 495], // x лево вверх, y лево вверх, x лево низ, y низ лево
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        name: "4",
        shape: "poly",
        coords: [145, 145, 168, 145, 115, 338, 80, 332], // x лево вверх, y лево вверх, x лево низ, y низ лево
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        name: "5",
        shape: "poly",
        coords: [165, 145, 195, 145, 195, 315, 163, 315], // x лево вверх, y лево вверх, x лево низ, y низ лево
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        name: "6",
        shape: "poly",
        coords: [195, 145, 220, 145, 300, 330, 260, 340], // x лево вверх, y лево вверх, x лево низ, y низ лево
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        name: "7",
        shape: "poly",
        coords: [150, 10, 215, 10, 215, 145, 150, 145], // x лево вверх, y лево вверх, x лево низ, y низ лево
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
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
  const error = () => {
    messageApi.open({
      icon: <FrownOutlined style={{ fontSize: "16px" }} />,
      type: "error",
      content: "Тест не пройден. Правильных ответов 4 / 5",
      duration: 5.5,
    });
  };

  const onTestComplete = () => {
    props.setIsModalVisible(false);
    // answeredResult.forEach((element, index) => {
    //   validateAnswer(index, element);
    // });
    // брать данные (ответы пользователя) и отправлять в валидатор. по результату показываем алерт. Отправляем фетч запрос на обновление резльтатов тестирования
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
        {answer1?.[0] == true ? (
          <Tag
            // icon={<CheckCircleOutlined />}
            style={{ marginLeft: "14px" }}
            color="orange"
          >
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
          border: "1px solid black",
        }}
      >
        <ImageMapper
          src={"/image/test1.jpeg"}
          height={450}
          width={337}
          map={MAP_1}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer1([true]);
          }}
          onImageMouseMove={(evt) => {
            // console.log(evt);
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
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">базовая пластина</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "1px solid black",
        }}
      >
        <ImageMapper
          src={"/image/test1.jpeg"}
          height={450}
          width={337}
          map={MAP_2}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer2([true]);
          }}
          onImageMouseMove={(evt) => {
            // console.log(evt);
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
      <div
        className="testTaskHeader"
        style={{ display: "flex", gap: "6px", alignItems: "center" }}
      >
        <FormOutlined />
        Задание №3
        {answer3?.[0] == true ? (
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
        Нажмите на изображение, где находится{" "}
        <b className="keyWord">площадка штатива</b>
      </div>
      <div
        style={{
          width: "36.2%",
          margin: "auto",
          marginBottom: "20px",
          border: "1px solid black",
        }}
      >
        <ImageMapper
          src={"/image/test1.jpeg"}
          height={450}
          width={337}
          map={MAP_3}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer3([true]);
          }}
          onImageMouseMove={(evt) => {
            // console.log(evt);
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
        Нажмите на <b className="keyWord">деталь штатива</b>, используя которую
        производят <b className="keyWord">изменение высоты штатива</b>
      </div>
      <div
        style={{
          width: "40%",
          margin: "auto",
          marginBottom: "20px",
          border: "1px solid black",
        }}
      >
        <ImageMapper
          src={"/image/Topic1-2.png"}
          height={500}
          width={345}
          map={MAP_4}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer4([true]);
          }}
          onImageMouseMove={(evt) => {
            // console.log(evt);
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>

      <>
        {contextHolder}
        {/* <ConfigProvider
          theme={{
            token: { contentBg: "#f58787" },
          }}
        ></ConfigProvider> */}
        <Space>
          <Button onClick={success}>Success</Button>
          <Button onClick={error}>Error</Button>
        </Space>
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
