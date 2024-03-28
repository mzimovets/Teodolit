import React, { useState } from "react";
import { message, Button, Space, Divider, Flex, Tag, Checkbox } from "antd";

import ImageMapper from "react-img-mapper";
import { useSearchParams } from "react-router-dom";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
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
      type: "success",
      content: "Вы прошли тест!",
    });
  };
  const error = () => {
    messageApi.open({
      type: "error",
      content: "Вы не прошли тест. Попробуйте еще раз",
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
        Нажмите на изображение, где находится ...
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <ImageMapper
          src={"/image/Topic1.1.png"}
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
        Нажмите на изображение, где находится ...
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <img
          src="/image/Topic1.2.png"
          style={{ height: "500px", width: "500px" }}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer2([true]);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "14px",
          paddingTop: "14px",
        }}
      >
        <Checkbox onChange={onChange}>
          <p
            className="answers"
            style={{ margin: "6px", fontSize: "17px", fontWeight: "500" }}
          >
            Вариант ответа 1
          </p>
        </Checkbox>
        <Checkbox onChange={onChange}>
          <p
            className="answers"
            style={{ margin: "6px", fontSize: "17px", fontWeight: "500" }}
          >
            Вариант ответа 2
          </p>
        </Checkbox>
        <Checkbox onChange={onChange}>
          <p
            className="answers"
            style={{ margin: "6px", fontSize: "17px", fontWeight: "500" }}
          >
            Вариант ответа 3
          </p>
        </Checkbox>
        <Checkbox onChange={onChange} style={{ paddingBottom: "14px" }}>
          <p
            className="answers"
            style={{ margin: "6px", fontSize: "17px", fontWeight: "500" }}
          >
            Вариант ответа 4
          </p>
        </Checkbox>
      </div>
      <>
        {contextHolder}
        <Space>
          <Button onClick={success}>Success</Button>
          <Button onClick={error}>Error</Button>
        </Space>
      </>
    </div>
  );
};

export { TestOne };
