import React from "react";
import { message, Input, Tag, Button, Checkbox } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

import ImageMapper from "react-img-mapper";

const TestTwo = () => {
  // чекбоксы
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const URL = "/logo192.png";
  const MAP = {
    name: "my-map",
    // GET JSON FROM BELOW URL AS AN EXAMPLE AND PUT IT HERE
    areas: [
      {
        name: "1",
        shape: "poly",
        coords: [25, 33, 27, 300, 128, 240, 128, 94],
        preFillColor: "green",
        fillColor: "blue",
      },
      {
        name: "2",
        shape: "poly",
        coords: [219, 118, 220, 210, 283, 210, 284, 119],
        preFillColor: "pink",
      },
      {
        name: "3",
        shape: "poly",
        coords: [381, 241, 383, 94, 462, 53, 457, 282],
        fillColor: "yellow",
      },
      {
        name: "4",
        shape: "poly",
        coords: [245, 285, 290, 285, 274, 239, 249, 238],
        preFillColor: "red",
      },
      { name: "5", shape: "circle", coords: [170, 100, 25] },
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
        {/* {answer1?.[0] == true ? ( */}
        <Tag
          icon={<CheckCircleOutlined />}
          style={{ marginLeft: "14px" }}
          color="success"
        >
          Ответ принят
        </Tag>
        {/* ) : null} */}
      </div>
      <div className="testTaskDiscription">
        Горизонтальный круг теодолита состоит из ... (Ответ вводить в им.
        падеже, ед. числе с маленькой буквы)
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: "20px" }}>
        1.
        <Input placeholder="ответ" style={{ width: "100px" }} />
        2.
        <Input placeholder="ответ" style={{ width: "100px" }} />
      </div>
      <div style={{ textAlign: "left" }}>
        {" "}
        <Button
          style={{ marginBottom: "32px", marginTop: "16px" }}
          type="primary"
        >
          Ответить
        </Button>
      </div>
      <div className="testTaskHeader">
        Задание №2
        {/* {answer1?.[0] == true ? ( */}
        <Tag
          icon={<CheckCircleOutlined />}
          style={{ marginLeft: "14px" }}
          color="success"
        >
          Ответ принят
        </Tag>
        {/* ) : null} */}
      </div>
      <div className="testTaskDiscription">
        Как называется величина дуги лимбо между двумя ближайшими штрихами?
        (Ответ вводить в им. падеже, ед. числе с маленькой буквы, через один
        пробел)
      </div>
      <div>
        <Input placeholder="ответ" style={{ width: "180px" }} />
      </div>
      <div style={{ textAlign: "left" }}>
        {" "}
        <Button
          style={{ marginBottom: "32px", marginTop: "16px" }}
          type="primary"
        >
          Ответить
        </Button>
      </div>
      <div className="testTaskHeader">
        Задание №3
        {/* {answer1?.[0] == true ? ( */}
        <Tag
          icon={<CheckCircleOutlined />}
          style={{ marginLeft: "14px" }}
          color="success"
        >
          Ответ принят
        </Tag>
        {/* ) : null} */}
      </div>
      <div className="testTaskDiscription">
        Через сколько градусов производится оцифровка лимба? (Введите число)
      </div>
      <div>
        <Input disabled={true} placeholder="ответ" style={{ width: "180px" }} />
      </div>
      <div style={{ textAlign: "left" }}>
        {" "}
        <Button
          style={{ marginBottom: "32px", marginTop: "16px" }}
          type="primary"
        >
          Ответить
        </Button>
      </div>
      <div className="testTaskHeader">
        Задание №4
        {/* {answer1?.[0] == true ? ( */}
        <Tag
          icon={<CheckCircleOutlined />}
          style={{ marginLeft: "14px" }}
          color="success"
        >
          Ответ принят
        </Tag>
        {/* ) : null} */}
      </div>
      <div className="testTaskDiscription">
        Для чего служит вертикальный круг теодолита? (Выберите один правильный
        ответ)
      </div>
      <div style={{ display: "grid", gap: "12px" }}>
        <Checkbox onChange={onChange}>ответ 1</Checkbox>
        <Checkbox onChange={onChange}>ответ 2</Checkbox>
        <Checkbox onChange={onChange}>Измерение углов наклона</Checkbox>
        <Checkbox onChange={onChange}>ответ 4</Checkbox>
      </div>
      <div style={{ textAlign: "left" }}>
        {" "}
        <Button
          style={{ marginBottom: "32px", marginTop: "16px" }}
          type="primary"
        >
          Ответить
        </Button>
      </div>
    </div>
  );
};

export { TestTwo };
