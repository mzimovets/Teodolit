import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  UserOutlined,
  BookOutlined,
  LogoutOutlined,
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

import { TopicOne } from "./TopicOne";

import { createReactEditorJS } from "react-editor-js";
import {
  Layout,
  Button,
  Modal,
  Form,
  Statistic,
  Input,
  Table,
  Tag,
} from "antd";
import { fetchRequest } from "../utils";
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
  const [currentUser, setCurrentUser] = useState();

  const navigateOk = useNavigate(); // Использование хука useNavigate
  const location = useLocation();

  const [isUserModalWindowOpen, setIsUserModalWindowOpen] = useState(false);
  const showModalUserWindow = () => {
    setIsUserModalWindowOpen(true);
  };

  const handleOkUserWindow = () => {
    setIsUserModalWindowOpen(false);
  };
  const handleCancelUserWindow = () => {
    setIsUserModalWindowOpen(false);
  };

  useEffect(() => {
    fetchRequest(
      "/information",
      "post",
      {
        "Content-type": "application/json",
        Accept: "*/*",
      },
      {
        login: localStorage.getItem("login"),
        password: localStorage.getItem("password"),
      }
    ).then((data) => {
      console.log("data.userInfo", data.userInfo);
      setCurrentUser(data.userInfo);
    });
    console.log(location.pathname);
    if (location.pathname.includes("topicsPage"))
      document.body.classList.add("body");
  }, []);

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

  // Состояние открытия/ закрытия модального окна профиля учетной записи студента
  const [isUserOpenProfile, setIsUserOpenProfile] = useState(false);
  const showModalUserProfile = () => {
    setIsUserOpenProfile(true);
  };

  const handleOkUserProfile = () => {
    setIsUserOpenProfile(false);
  };
  const handleCancelUserProfile = () => {
    setIsUserOpenProfile(false);
  };
  //

  const ReactEditorJS = createReactEditorJS();
  const navigate = useNavigate();
  console.log("Topic props");

  const selectedTopic = (page) => {
    console.log("window.location:", window.location, page);
    return window.location.pathname === page
      ? "topicsName selected"
      : "topicsName";
  };

  // Таблица профиля
  const dataSourceUser = [
    {
      topic: "1. Правила обращения с теодолитом",
      statusTopic: "",
      numberOfAttempts: "",
    },
    {
      topic: "2. Основные части теодолита",
      statusTopic: "",
      numberOfAttempts: "",
    },
    {
      topic: "3. Установка теодолита в рабочее положение",
      statusTopic: "",
      numberOfAttempts: "",
    },
    {
      topic:
        "4. Устройство и принцип работы технических теодолитов 2Т30П и 4Т30П",
      statusTopic: "",
      numberOfAttempts: "",
    },
    {
      topic: "5. Общие сведения о поверках теодолитов 2Т30П и 4Т30П",
      statusTopic: "",
      numberOfAttempts: "",
    },
    {
      topic: "6. Отсчётные устройства теодолитов 2Т30П и 4Т30П",
      statusTopic: "",
      numberOfAttempts: "",
    },
  ];

  const columnsUser = [
    {
      title: "Тема",
      dataIndex: "topic",
      key: "topic",
    },
    {
      title: "Статус",
      dataIndex: "statusTopic",
      key: "statusTopic",
      render: (status, item) => {
        return (
          <Tag color={"blue"} key={status}>
            {status?.toUpperCase()}
          </Tag>
          // <Tag color={"success"} key={status} icon={<CheckCircleOutlined />}>
          //   {" "}
          //   ПРОЙДЕНО
          // </Tag>
          // <Tag icon={<SyncOutlined spin />} color="processing">
          //   В ПРОЦЕССЕ
          // </Tag>
          // <Tag icon={<CloseCircleOutlined />} color="error">
          //   НЕ ПРОЙДЕНО
          // </Tag>
        );
      },
    },
    {
      title: "Кол-во попыток (?)",
      dataIndex: "numberOfAttempts",
      key: "numberOfAttempts",
    },
  ];

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
              className={selectedTopic("/topicsPage/topicTwo")}
              href="/topicsPage/topicTwo"
            >
              <BookOutlined className="bookIcon" />
              Тема №2
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
              className={selectedTopic("/topicsPage/topicFour")}
              href="/topicsPage/topicFour"
            >
              <BookOutlined className="bookIcon" />
              Тема №4
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
              className={selectedTopic("/topicsPage/topicSix")}
              href="/topicsPage/topicSix"
            >
              <BookOutlined className="bookIcon" />
              Тема №6
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
        {/* Сделать props для добавлении модального окна в кнопку профиля */}
        {console.log("isUserOpen", props.isUserOpen)}
        <Modal
          key={""}
          title={
            <span style={{ padding: "4px" }}>
              {currentUser?.lastName} {currentUser?.name}{" "}
              {currentUser?.secondName} {currentUser?.group}
            </span>
          }
          open={isUserModalWindowOpen}
          onOk={handleOkUserWindow}
          onCancel={handleCancelUserWindow}
          okText="Сохранить"
          cancelText="Отмена"
          width={1120}
          footer={null}
        >
          <div
            className="noselect"
            style={{
              display: "flex",
              gap: "10px",
              marginBottom: "14px",
              marginTop: "24px",
              padding: "4px",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              Логин
              <Input
                variant="borderless"
                readOnly
                value={localStorage.getItem("login")}
              />
            </span>
            <span
              style={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              Пароль:
            </span>
            <Input.Password
              value={localStorage.getItem("password")}
              variant="borderless"
              readOnly
              style={{ width: "164px" }}
            />
          </div>
          <Table
            dataSource={dataSourceUser}
            columns={columnsUser}
            pagination={false}
          />
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
              showModalUserWindow();
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
      </div>
    </div>
  );
};

export { TopicsPage };
