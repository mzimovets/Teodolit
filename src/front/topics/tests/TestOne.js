import React from "react";
import { message, Button, Space } from "antd";

const TestOne = () => {
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
      <div className="testTaskHeader">Задание №1</div>
      <div className="testTaskDiscription">
        Нажмите на изображение, где находится ...
      </div>
      <img
        className="testImage"
        src="/logo192.png"
        alt=""
        onClick={() => alert("Вы кликнули по картинке!")}
      />
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
      {/*  */}
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
