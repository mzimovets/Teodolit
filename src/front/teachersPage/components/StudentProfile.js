import {
  Button,
  Space,
  Table,
  Menu,
  Dropdown,
  Modal,
  Form,
  Input,
  Tag,
} from "antd";
import {
  UserOutlined,
  BookOutlined,
  LogoutOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { fetchRequest } from "../../utils";

export const StudentProfile = (props) => {
  const { selectedUser, isUserOpen, setIsUserOpen } = props;

  const [studentData, setStudentData] = useState();

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
      dataIndex: "status",
      key: "status",
      render: (status, item) => {
        console.log("Studitem, ", item);
        return (
          <Tag
            icon={
              status == "НЕ ПРОЙДЕНО" ? (
                item.count > 0 ? (
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
                ? item.count > 0
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
      title: "Кол-во попыток (?)",
      dataIndex: "count",
      key: "count",
    },
  ];

  useEffect(() => {
    console.log(" did mount selectedUser", {
      login: selectedUser?.login,
      password: selectedUser?.password,
    });
    fetchRequest(
      `/userTest`,
      "post",
      {
        "Content-type": "application/json",
        Accept: "*/*",
      },
      {
        login: selectedUser?.login,
        password: selectedUser?.password,
      }
    ).then((data) => {
      console.log("Student data", data);
      if (data.status == "OK") {
        try {
          const resultObject = JSON.parse(data.result || {});
          console.log("Student result", resultObject.testData);
          const preparedData = dataSourceUser.map((test, index) => {
            return {
              topic: test.topic,
              status: resultObject.testData[index].status,
              count: resultObject.testData[index].count,
            };
          });
          setStudentData(preparedData);
        } catch (error) {
          console.log(error);
        }
      }
    });
  }, [isUserOpen]);

  const handleOkUser = () => {
    setIsUserOpen(false);
  };
  const handleCancelUser = () => {
    setIsUserOpen(false);
  };

  return (
    <Modal
      key={""}
      title={
        <span style={{ padding: "4px" }}>
          {selectedUser &&
            `${selectedUser.lastName} ${selectedUser.name} ${selectedUser.secondName}  ${selectedUser.group}`}
        </span>
      }
      open={isUserOpen}
      onOk={handleOkUser}
      onCancel={handleCancelUser}
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
            value={selectedUser && `${selectedUser.login}`}
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
          value={selectedUser && `${selectedUser.password}`}
          variant="borderless"
          readOnly
          style={{ width: "164px" }}
        />
      </div>
      {console.log("studentData", studentData)}
      <Table
        dataSource={studentData}
        columns={columnsUser}
        pagination={false}
      />
    </Modal>
  );
};
