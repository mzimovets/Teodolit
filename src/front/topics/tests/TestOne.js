import React, { useState } from "react";
import { message, Button, Space, Divider, Flex, Tag } from "antd";

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

const TestOne = () => {
  const [coord, setCoord] = useState(); //получение координат
  const [answer, setAnswer] = useState(); //получение ответа

  const MAP = {
    name: "my-map",
    // GET JSON FROM BELOW URL AS AN EXAMPLE AND PUT IT HERE
    areas: [
      //   {
      //     name: "1",
      //     shape: "poly",
      //     coords: [25, 33, 27, 300, 128, 240, 128, 94],
      //     preFillColor: "green",
      //     fillColor: "blue",
      //   },
      //   {
      //     name: "2",
      //     shape: "rect",
      //     coords: [0, 10, 10, 0],
      //     preFillColor: "red",
      //     fillColor: "yellow",
      //   },
      {
        name: "3",
        shape: "rect",
        coords: [335, 225, 385, 275], //x1, y1, x2, y2
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
        {answer?.[0] == true ? (
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
          map={MAP}
          onClick={(area, index, evt) => {
            console.log(area, index, evt);
            setAnswer([true]);
          }}
          onImageMouseMove={(evt) => {
            // console.log(evt);
            setCoord({ x: evt.clientX, y: evt.clientY });
          }}
        />
      </div>
      {JSON.stringify(coord)}
      {/* <img
        className="testImage"
        src="/logo192.png"
        alt=""
        onClick={() => alert("Вы кликнули по картинке!")}
      /> */}
      <div className="testTaskHeader">Задание №2</div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится ...
      </div>
      <img
        className="testImage"
        src="/logo192.png"
        alt=""
        onClick={() => alert("Вы кликнули по картинке!")}
      />
      <div />
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
