import { React, useState } from "react";
import { message, Input, Tag, Button, Radio } from "antd";
import {
  SmileOutlined,
  FrownOutlined,
  CheckCircleOutlined,
  EditOutlined,
  AimOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const KeyFive = (props) => {
  return (
    <div style={{ paddingLeft: "10px", paddingTop: "12px" }}>
      <Title level={3} style={{ marginTop: "-16px" }}>
        Тест по теме №5 "Общие сведения о поверках теодолитов 2Т30П и 4Т30П"
      </Title>
      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №1
      </div>
      <div className="testTaskDiscription">Поверка - это ...</div>
      <div style={{ marginBottom: "28px" }}>
        <Radio.Group style={{ display: "grid", gap: "12px" }}>
          <Radio disabled={false} defaultValue={1}>
            действия, имеющие целью выявить соблюдение геометрических условий,
            предъявляемых к конструкции прибора
          </Radio>

          <Radio disabled={true} value={2}>
            юстировка
          </Radio>
          <Radio disabled={true} value={3}>
            центрирование
          </Radio>
          <Radio disabled={true} value={4}>
            действия, направленные на устранение выявленных нарушений в приборе
          </Radio>
          <Radio disabled={true} value={5}>
            горизонтирование
          </Radio>
        </Radio.Group>
      </div>
      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №2
      </div>
      <div className="testTaskDiscription">Юстировка - это ...</div>
      <div style={{ marginBottom: "28px" }}>
        <Radio.Group style={{ display: "grid", gap: "12px" }}>
          <Radio disabled={true} value={1}>
            действия, имеющие целью выявить соблюдение геометрических условий,
            предъявляемых к конструкции прибора
          </Radio>
          <Radio disabled={true} value={2}>
            поверка
          </Radio>
          <Radio disabled={true} value={3}>
            центрирование
          </Radio>
          <Radio disabled={false} defaultValue={4}>
            действия, направленные на устранение выявленных нарушений в приборе
          </Radio>
          <Radio disabled={true} value={5}>
            горизонтирование
          </Radio>
        </Radio.Group>
      </div>
      <div className="testTaskHeader">
        <CheckCircleOutlined />
        Задание №3
      </div>
      <div className="testTaskDiscription">
        Когда выполняют поверку и юстировку?
      </div>
      <div style={{ marginBottom: "28px" }}>
        <Radio.Group style={{ display: "grid", gap: "12px" }}>
          <Radio disabled={true} value={1}>
            после измерения, для проверки функционирования
          </Radio>
          <Radio disabled={false} defaultValue={2}>
            до измерения, после внешнего осмотра
          </Radio>
          <Radio disabled={true} value={3}>
            во время работы, не реже одного раза на измерение
          </Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export { KeyFive };
