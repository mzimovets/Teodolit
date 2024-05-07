import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  UserOutlined,
  BookOutlined,
  LogoutOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { TopicOne } from "./TopicOne";
import { Button, Modal, Form, Input, Table, Tag } from "antd";
import { fetchRequest } from "../utils";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { fetchTopicState } from "./store/disabledStateSlice";

const sizeLarge = "large";

export const TopicsPageWrapper = (props) => {
  return (
    <Provider store={store}>
      <TopicsPage {...props} />
    </Provider>
  );
};

const TopicsPage = (props) => {
  const dispatch = useDispatch();
  const disabledStatesTopics = useSelector((state) => state.disabledState);
  console.log("disabledStatesTopics", disabledStatesTopics);
  const [currentUser, setCurrentUser] = useState();
  const [dataUserTest, setDataUserTest] = useState();

  const navigateOk = useNavigate();
  const location = useLocation();

  const [isUserModalWindowOpen, setIsUserModalWindowOpen] = useState(false);
  const showModalUserWindow = () => {
    setIsUserModalWindowOpen(true);
    console.log("showModalUserWindow");
    fetchRequest(
      `/userTest`,
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
      console.log("dataUserTest", data);
      if (data.status == "OK") {
        try {
          const resultObject = JSON.parse(data.result);
          setDataUserTest(resultObject);
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const handleOkUserWindow = () => {
    setIsUserModalWindowOpen(false);
  };
  const handleCancelUserWindow = () => {
    setIsUserModalWindowOpen(false);
  };

  useEffect(() => {
    dispatch(fetchTopicState());
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

  const selectedTopic = (page) => {
    console.log("window.location:", window.location, page);
    return window.location.pathname === page
      ? "topicsName selected"
      : "topicsName";
  };

  const dataSourceUser = [
    {
      topic: "1. Правила обращения с теодолитом",
    },
    {
      topic: "2. Основные части теодолита",
    },
    {
      topic: "3. Установка теодолита в рабочее положение",
    },
    {
      topic:
        "4. Устройство и принцип работы технических теодолитов 2Т30П и 4Т30П",
    },
    {
      topic: "5. Общие сведения о поверках теодолитов 2Т30П и 4Т30П",
    },
    {
      topic: "6. Отсчётные устройства теодолитов 2Т30П и 4Т30П",
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
          <Tag
            icon={
              status == "НЕ ПРОЙДЕНО" ? (
                item.numberOfAttempts > 0 ? (
                  <CloseCircleOutlined />
                ) : (
                  <CloseCircleOutlined />
                )
              ) : (
                <CheckCircleOutlined />
              )
            }
            color={
              status == "НЕ ПРОЙДЕНО"
                ? item.numberOfAttempts > 0
                  ? "error"
                  : "default"
                : "success"
            }
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Кол-во попыток",
      dataIndex: "numberOfAttempts",
      key: "numberOfAttempts",
    },
  ];

  const disabledLinksStyles = {
    pointerEvents: "none",
    color: "#ccc",
    display: "flex",
    gap: "6px",
    textDecoration: "none",
  };
  return (
    <div className="topicsContainer">
      <div className="siderTopic">
        <ul style={{ paddingTop: "10%", paddingLeft: "15%", fontSize: "18px" }}>
          <li>
            <a
              className={selectedTopic("/topicsPage/topicOne")}
              href="/topicsPage/topicOne"
            >
              <BookOutlined className="bookIcon " />
              Тема №1
            </a>
            <div className="namesTopics noselect">
              Правила обращения с теодолитом
            </div>
          </li>
          <li>
            <a
              className={
                selectedTopic("/topicsPage/topicTwo")
                // +
                // disabledStatesTopics.topicTwo
                //   ? "disabled"
                //   : ""
              }
              style={disabledStatesTopics.topicTwo ? disabledLinksStyles : {}}
              href="/topicsPage/topicTwo"
              disabled={disabledStatesTopics.topicTwo}
            >
              <BookOutlined className="bookIcon" />
              Тема №2
            </a>
            <div className="namesTopics noselect">Основные части теодолита</div>
          </li>
          {console.log(
            "LI",
            disabledStatesTopics.topicThree ? "disabled" : "",
            disabledStatesTopics.topicThree
          )}
          <li>
            <a
              className={
                selectedTopic("/topicsPage/topicThree")
                // +
                // disabledStatesTopics.topicThree
                //   ? "disabled"
                //   : ""
              }
              style={disabledStatesTopics.topicThree ? disabledLinksStyles : {}}
              disabled={disabledStatesTopics.topicThree}
              href="/topicsPage/topicThree"
            >
              <BookOutlined className="bookIcon" />
              Тема №3
            </a>
            <div className="namesTopics noselect">
              Установка теодолита в рабочее положение
            </div>
          </li>
          <li>
            <a
              className={selectedTopic("/topicsPage/topicFour")}
              href="/topicsPage/topicFour"
              style={disabledStatesTopics.topicFour ? disabledLinksStyles : {}}
              disabled={disabledStatesTopics.topicFour}
            >
              <BookOutlined className="bookIcon" />
              Тема №4
            </a>
            <div className="namesTopics noselect">
              Устройство и принцип работы технических теодолитов 2Т30П и 4Т30П
            </div>
          </li>
          <li>
            <a
              className={selectedTopic("/topicsPage/topicFive")}
              href="/topicsPage/topicFive"
              style={disabledStatesTopics.topicFive ? disabledLinksStyles : {}}
              disabled={disabledStatesTopics.topicFive}
            >
              <BookOutlined className="bookIcon" />
              Тема №5
            </a>
            <div className="namesTopics noselect">
              Общие сведения о поверках теодолитов 2Т30П и 4Т30П
            </div>
          </li>
          <li>
            <a
              className={selectedTopic("/topicsPage/topicSix")}
              href="/topicsPage/topicSix"
              style={disabledStatesTopics.topicSix ? disabledLinksStyles : {}}
              disabled={disabledStatesTopics.topicSix}
            >
              <BookOutlined className="bookIcon" />
              Тема №6
            </a>
            <div className="namesTopics noselect">
              Отсчётные устройства теодолитов 2Т30П и 4Т30П
            </div>
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
            dataSource={dataSourceUser.map((item, index) => {
              return {
                topic: item.topic,
                statusTopic: dataUserTest?.testData?.[index]?.status,
                numberOfAttempts: dataUserTest?.testData?.[index]?.count,
              };
            })}
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
            right: "50px",
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
