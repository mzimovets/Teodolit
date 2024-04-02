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
} from "@ant-design/icons";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const TestOne = () => {
  const [coord, setCoord] = useState(); //получение координат
  const [answer1, setAnswer1] = useState(); //получение ответа на вопрос 1
  const [answer2, setAnswer2] = useState(); //получение ответа на вопрос 2

  const MAP_1 = {
    name: "my-map-1",
    areas: [
      {
        // Инструмент
        name: "1",
        shape: "rect",
        coords: [260, 125, 454, 0],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина
        name: "2",
        shape: "rect",
        coords: [290, 130, 415, 185],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Площадка штатива
        name: "3",
        shape: "rect",
        coords: [282, 187, 425, 224],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },

      {
        // Становый винт
        name: "4",
        shape: "rect",
        coords: [335, 225, 380, 265], //x1, y1, x2, y2
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
        // Инструмент
        name: "1",
        shape: "rect",
        coords: [260, 125, 454, 0],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина
        name: "2",
        shape: "rect",
        coords: [290, 130, 415, 185],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Площадка штатива
        name: "3",
        shape: "rect",
        coords: [282, 187, 425, 224],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        // strokeColor: "rgba(0, 0, 0, 0)",
      },

      {
        // Становый винт
        name: "4",
        shape: "rect",
        coords: [335, 225, 380, 265], //x1, y1, x2, y2
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
    });
  };
  const error = () => {
    messageApi.open({
      icon: <FrownOutlined style={{ fontSize: "16px" }} />,
      type: "error",
      content: "Тест не пройден. Правильных ответов 4 / 5",
    });
  };

  return (
    <div style={{ paddingLeft: "20px", paddingTop: "12px" }}>
      <div className="testTaskHeader">
        Задание №1
        {answer1?.[0] == true ? (
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
        Нажмите на изображение, где находится становый винт
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <ImageMapper
          src={"/image/Topic1-1.png"}
          height={330}
          width={700}
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
      <div className="testTaskHeader">
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
        Нажмите на изображение, где находится базовая пластина
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <ImageMapper
          src={"/image/Topic1-1.png"}
          height={330}
          width={700}
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
      <div className="testTaskHeader">
        Задание №3
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
        Нажмите на изображение, где находится площадка штатива
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <ImageMapper
          src={"/image/Topic1-1.png"}
          height={330}
          width={700}
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
      <div className="testTaskHeader">
        Задание №4
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
        Нажмите на деталь штатива, используя которую производят изменение высоты
        штатива
      </div>
      <div style={{ width: "45%", margin: "auto" }}>
        <ImageMapper
          src={"/image/Topic1-2.png"}
          height={500}
          width={345}
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
      </>
    </div>
  );
};

export { TestOne };
