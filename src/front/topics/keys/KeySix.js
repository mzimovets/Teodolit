import { React, useState } from "react";
import {
  SmileOutlined,
  FrownOutlined,
  CheckCircleOutlined,
  EditOutlined,
  AimOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { message, Input, Image, Button, Radio } from "antd";

const KeySix = (props) => {
  return (
    <div style={{ paddingLeft: "10px", paddingTop: "12px" }}>
      <Title level={3} style={{ marginTop: "-16px" }}>
        Тест по теме №6 "Отсчётные устройства теодолитов 2Т30П и 4Т30П"
      </Title>
      <div className="testTaskHeader">
        <EditOutlined />
        Задание №1
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
            disabled={true}
            style={{ width: "65px" }}
            value={-1}
          />
          <span style={{ marginLeft: "4px" }}>°</span>
          <span style={{ marginLeft: "4px" }}>
            <Input
              placeholder="ответ"
              disabled={true}
              style={{ width: "65px" }}
              value={31}
            />
            <span style={{ marginLeft: "4px" }}>′</span>
          </span>
        </div>
        2. Горизонтальный круг
        <div>
          <Input
            placeholder="ответ"
            disabled={true}
            style={{ width: "65px" }}
            value={157}
          />
          <span style={{ marginLeft: "4px" }}>°</span>
          <span style={{ marginLeft: "4px" }}>
            <Input
              placeholder="ответ"
              disabled={true}
              style={{ width: "65px" }}
              value={"04"}
            />
            <span style={{ marginLeft: "4px" }}>′</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export { KeySix };
