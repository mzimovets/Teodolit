import * as ReactDOM from "react-dom/client";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  BookOutlined,
  LogoutOutlined,
  ClockCircleOutlined,
  AuditOutlined,
} from "@ant-design/icons";

import { TopicOne } from "./TopicOne";

import { createReactEditorJS } from "react-editor-js";
import CheckList from "@editorjs/checklist";
import { Layout, Button, Modal, Form, Col, Row, Statistic } from "antd";
const { Countdown } = Statistic;
const deadline = Date.now() + 300000; // Dayjs is also OK

const onFinish = () => {
  console.log("finished!");
};
const onChange = (val) => {
  if (typeof val === "number" && 4.95 * 1000 < val && val < 5 * 1000) {
    console.log("changed!");
  }
};

const { Header, Footer, Sider, Content } = Layout;

const sizeLarge = "large";
const sizeMedium = "middle";
const sizeSmall = "small";

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#333",
  display: "table",
  paddingTop: "19px",
  height: "1000px",
};

const TopicsPage = (props) => {
  const navigateOk = useNavigate(); // Использование хука useNavigate

  const [exitBtn, setExitBtn] = useState(false);
  const showModalExit = () => {
    setExitBtn(true);
  };
  const handleExit = () => {
    setExitBtn(false);
    navigateOk("/");
  };

  const handleCancelExit = () => {
    setExitBtn(false);
  };

  const ReactEditorJS = createReactEditorJS();
  const navigate = useNavigate();
  console.log("Topic props");

  const selectedTopic = (page) => {
    console.log("window.location:", window.location, page);
    return window.location.pathname === page
      ? "topicsName selected"
      : "topicsName";
  };

  return (
    <div className="topicsContainer">
      <div className="siderTopic">
        <ul style={{ paddingTop: "10%", paddingLeft: "20%", fontSize: "18px" }}>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicOne")}
              href="/topicsPage/topicOne"
            >
              <BookOutlined className="bookIcon" />
              Тема №1
            </a>
          </li>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicOne")}
              href="/topicsPage/topicOne"
            >
              <AuditOutlined className="bookIcon" />
              Тест №1
            </a>
          </li>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicTwo")}
              href="/topicsPage/topicTwo"
            >
              <BookOutlined className="bookIcon" />
              Тема №2
            </a>
          </li>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicOne")}
              href="/topicsPage/topicOne"
            >
              <AuditOutlined className="bookIcon" />
              Тест №2
            </a>
          </li>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicThree")}
              href="/topicsPage/topicThree"
            >
              <BookOutlined className="bookIcon" />
              Тема №3
            </a>
          </li>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicOne")}
              href="/topicsPage/topicOne"
            >
              <AuditOutlined className="bookIcon" />
              Тест №3
            </a>
          </li>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicFour")}
              href="/topicsPage/topicFour"
            >
              <BookOutlined className="bookIcon" />
              Тема №4
            </a>
          </li>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicOne")}
              href="/topicsPage/topicOne"
            >
              <AuditOutlined className="bookIcon" />
              Тест №4
            </a>
          </li>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicFive")}
              href="/topicsPage/topicFive"
            >
              <BookOutlined className="bookIcon" />
              Тема №5
            </a>
          </li>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicOne")}
              href="/topicsPage/topicOne"
            >
              <AuditOutlined className="bookIcon" />
              Тест №5
            </a>
          </li>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicSeven")}
              href="/topicsPage/topicSeven"
            >
              <BookOutlined className="bookIcon" />
              Тема №6
            </a>
          </li>
          <li style={{ paddingBottom: "16px" }}>
            <a
              className={selectedTopic("/topicsPage/topicOne")}
              href="/topicsPage/topicOne"
            >
              <AuditOutlined className="bookIcon" />
              Тест №7
            </a>
          </li>
        </ul>
        <Modal
          className="deleteModal"
          title={<div style={{ width: "242px" }}>Выйти из учетной записи?</div>}
          open={exitBtn}
          onOk={handleExit}
          onCancel={handleCancelExit}
          okText="Выйти"
          cancelText="Отмена"
          okButtonProps={{
            type: "primary",
            danger: true,
          }}
        >
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              width: "200px",
              maxWidth: 600,
              paddingRight: "74px",
              marginTop: "24px",
            }}
          ></Form>
        </Modal>
      </div>
      <div class="create-line"></div>
      <div className="contentWindow">
        <div
          style={{
            display: "flex",
            gap: "6px",
            position: "absolute",
            top: "50px",
            left: "1314px",
          }}
        >
          {/* Кнопка профиля */}
          <Button
            type="primary"
            value="large"
            shape="circle"
            size={sizeLarge}
            style={{ zIndex: "3" }}
            onClick={() => {
              showModalExit();
            }}
          >
            <UserOutlined />
          </Button>
          {/* Кнопка выхода */}
          <Button
            type="primary"
            shape="circle"
            size={sizeLarge}
            style={{ zIndex: "3" }}
            onClick={() => {
              showModalExit();
            }}
          >
            <LogoutOutlined
              style={{
                fontSize: "24px",
              }}
            />
          </Button>
        </div>
        <TopicOne />
        <Row gutter={16}>
          <Col span={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingLeft: "1000px",
              }}
            >
              <div style={{ marginRight: "8px" }}>
                <ClockCircleOutlined
                  style={{
                    fontSize: "18px",
                    display: "flex",
                    alignItems: "center",
                  }}
                />
              </div>
              <div>
                <Countdown
                  value={deadline}
                  onFinish={onFinish}
                  format="mm:ss"
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export { TopicsPage };
