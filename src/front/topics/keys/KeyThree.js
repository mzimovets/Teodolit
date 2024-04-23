import { React, useState } from "react";
import { Radio, Image } from "antd";
import {
  CheckCircleOutlined,
  EditOutlined,
  AimOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import ImageMapper from "react-img-mapper";

const KeyThree = (props) => {
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

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 255, 255, 1)",
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
        shape: "poly",
        coords: [
          90, 246, 90, 20, 250, 20, 250, 155, 180, 155, 180, 185, 258, 180, 258,
          248,
        ],
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
      {
        // уровень
        name: "6",
        shape: "poly",
        coords: [181, 183, 181, 156, 257, 156, 257, 179],
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
        Тест по теме №3 "Установка теодолита в рабочее положение"
      </Title>
      <div className="testTaskHeader">
        <AimOutlined />
        Задание №1
      </div>
      <div className="testTaskDiscription">
        Нажмите на изображение, на ту деталь, которую нужно ослабить для
        перемещения теодолита по головке штатива до нужного положения
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
        />
      </div>
      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №2
      </div>
      <div className="testTaskDiscription">
        Какое дополнительное оборудование используют при центрировании с помощью
        оптического центрира (Выберите один правильный ответ)
      </div>
      <div>
        <Radio.Group
          style={{ display: "grid", gap: "12px", marginBottom: "32px" }}
        >
          <Radio disabled={true} value={1}>
            зрительная труба
          </Radio>
          <Radio disabled={false} defaultValue={2}>
            окуляр-насадка
          </Radio>
          <Radio disabled={true} value={3}>
            перископ
          </Radio>
          <Radio disabled={true} value={4}>
            сетка нитей
          </Radio>
        </Radio.Group>
      </div>
      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №3
      </div>
      <div className="testTaskDiscription">
        При центрировании с помощью оптического центрира теодолит перемещают
        пока ... (Выберите один правильный ответ)
      </div>
      <div>
        <Radio.Group
          style={{ display: "grid", gap: "12px", marginBottom: "32px" }}
        >
          <Radio disabled={true} value={1}>
            в поле зрения сетка нити не совпадет с вертикальной осью
          </Radio>
          <Radio disabled={true} value={2}>
            в поле зрения вертикальная ось не совпадет с горизонтальной осью
          </Radio>
          <Radio disabled={true} value={3}>
            в поле зрения сетка нитей не выйдет за пределы круга
          </Radio>
          <Radio disabled={false} defaultValue={4}>
            в поле зрения центр точки не совпадает с центром сетки нитей
          </Radio>
        </Radio.Group>
      </div>
      <div className="testTaskHeader">
        <AimOutlined />
        Задание №4
      </div>
      <div className="testTaskDiscription">
        Ориентируясь на показания какой детали теодолита осуществляют его
        горизонтирование
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
          map={MAP_2}
          style={{ marginBottom: "32px" }}
        />
      </div>
      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №5
      </div>
      <div className="testTaskDiscription">
        Какие два винта в текущем положении теодолита нужно вращать для вывода
        пузырька уровня в нуль-пункт? (Выберите один правильный ответ)
      </div>
      <div style={{ margin: "auto", width: "52%" }}>
        <Image
          style={{
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
          }}
          width={500}
          preview={false}
          src="/image/Topic1.4a.png"
        />
      </div>
      <div>
        <Radio.Group
          style={{ display: "grid", gap: "12px", marginBottom: "32px" }}
        >
          <Radio disabled={false} defaultValue={1}>
            винт №1 и винт №2
          </Radio>
          <Radio disabled={true} value={2}>
            винт №2 и винт №3
          </Radio>
          <Radio disabled={true} value={3}>
            винт №3 и винт №1
          </Radio>
        </Radio.Group>
      </div>
      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №6
      </div>
      <div className="testTaskDiscription">
        Какой винт в текущем положении теодолита нужно вращать для вывода
        пузырька уровня в нуль-пунт? (Выберите один правильный ответ)
      </div>
      <div style={{ margin: "auto", width: "52%" }}>
        <Image
          style={{
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
          }}
          width={500}
          preview={false}
          src="/image/Topic1.4b.png"
        />
      </div>
      <div>
        <Radio.Group style={{ display: "grid", gap: "12px" }}>
          <Radio disabled={true} value={1}>
            винт №1
          </Radio>
          <Radio disabled={true} value={2}>
            винт №2
          </Radio>
          <Radio disabled={false} defaultValue={3}>
            винт №3
          </Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export { KeyThree };
