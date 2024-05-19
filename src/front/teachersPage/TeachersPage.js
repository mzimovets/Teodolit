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
  Pagination,
  Flex,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  CaretDownOutlined,
  LogoutOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  UserOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { ModalAddUser } from "./components/ModalAddUser";
import { DeleteUserButton } from "./components/DeleteUserButton";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { fetchRequest } from "../utils";
import { EditUsers } from "./components/EditUsers";
import { StudentProfile } from "./components/StudentProfile";
import { KeyOne } from "../topics/keys/KeyOne";
import { KeyTwo } from "../topics/keys/KeyTwo";
import { KeyThree } from "../topics/keys/KeyThree";
import { KeyFour } from "../topics/keys/KeyFour";
import { KeyFive } from "../topics/keys/KeyFive";
import Password from "antd/es/input/Password";

const TeacherPage = (props) => {
  const navigateOk = useNavigate();
  const [keyId, setKeyId] = useState(1);

  const renderKey = () => {
    switch (keyId) {
      case 1:
        return <KeyOne keyId={keyId} />;
      case 2:
        return <KeyTwo keyId={keyId} />;
      case 3:
        return <KeyThree keyId={keyId} />;
      case 4:
        return <KeyFour keyId={keyId} />;
      case 5:
        return <KeyFive keyId={keyId} />;
      // case 6:
      //   return <TestSix keyId={keyId} />;
    }
  };

  const items = [
    { label: "Фамилия", value: "lastName" },
    { label: "Группа", value: "group" },
  ];

  const [passwordError, setPasswordError] = useState(false);

  const [password, setPassword] = useState();

  const [sortKey, setSortKey] = useState(items[0]);
  const [sortOrder, setSortOrder] = useState("ascend");

  const sortData = (data) => {
    const result = _.orderBy(data, [sortKey.value]);
    console.log("data", data, "sortKey", sortKey.value, "_.", result);
    setTableData(result);
    return result;
  };

  // Выбор режима сортировки данных таблицы
  const [form] = Form.useForm();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleMenuClick = (item) => {
    setSortKey(item);
    setSortOrder("ascend");
  };

  const [selectedUser, setSelectedUser] = useState(null);

  // Состояние открытия/ закрытия модального окна профиля учетной записи
  const [isUserOpen, setIsUserOpen] = useState(false);
  const showModalUser = () => {
    setIsUserOpen(true);
  };

  // Состояние открытия/ закрытия модального окна удаления учетной записи

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItemToDelete, setSelectedItemToDelete] = useState();
  console.log(isDeleteOpen);
  const showModalDelete = (id) => {
    setIsDeleteOpen(true);
    setSelectedItemToDelete(id);
  };

  const [isModalKeyOpen, setIsModalKeyOpen] = useState(false);
  const showModalKeyOpen = () => {
    setIsModalKeyOpen(true);
  };

  const handleCloseModalKey = () => {
    setIsModalKeyOpen(false);
  };

  const [studentsTestInfo, setStudentsTestInfo] = useState();

  const menu = (
    <Menu
      onClick={({ key }) => handleMenuClick(items.find((i) => i.value === key))}
    >
      {items.map((item) => (
        <Menu.Item key={item.value}>
          <span style={{ fontWeight: "600" }}>{item.label}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  const sizeLarge = "large";

  const { Search } = Input;
  const onSearch = (e) => {
    const value = e.target.value;
    const filteredResult = tableData.filter(
      (item) =>
        item.lastName.toLowerCase().indexOf(value.toLowerCase().trim()) !== -1
    );
    setFilteredData(filteredResult);
  };

  const [filteredData, setFilteredData] = useState();

  const [tableData, setTableData] = useState();
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    fetchRequest("/users").then((data) => {
      const preparedData = JSON.parse(data.result);

      fetchRequest("/userTest").then((data) => {
        if (data.status === "OK") {
          const studentsTestsResult = JSON.parse(data.result);
          preparedData.forEach((student, index) => {
            console.log(
              "student",
              student,
              "studentIndex",
              studentsTestsResult[index]
            );
            const curStud = studentsTestsResult.find((testResult) => {
              return (
                testResult.login === student.login &&
                testResult.password === student.password
              );
            });
            const failedTests = curStud?.testData.find(
              (testResult) => testResult.status === "НЕ ПРОЙДЕНО"
            );
            student.status = failedTests ? "НЕ ПРОЙДЕНО" : "ПРОЙДЕНО";
          });

          console.log("preparedData", preparedData);
          const sortedData = sortData(preparedData, sortKey, sortOrder);
          setTableData(sortedData);
          console.log("preparedData = ", sortedData);
        }
      });
    });
  };

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

  // ключи

  const [keyBtn, setKeyBtn] = useState(false);
  const showModalKey = () => {
    setKeyBtn(true);
  };
  const handleKey = () => {
    console.log("password", password);
    fetchRequest(
      "/login",
      "POST",
      {
        "Content-type": "application/json",
        Accept: "*/*",
      },
      { login: "admin", password: password }
    ).then((data) => {
      console.log("data", data);
      if (data.role == 1) {
        setIsModalKeyOpen(true);
        setKeyBtn(false);
        setPassword("");
      } else {
        // сообщение об ошибке
      }
    });
    // абоба
    if (password !== "emf-@dmin") {
      // Устанавливаем сообщение об ошибке
      setPasswordError(true);
    } else {
      // Если пароль правильный, открываем модальное окно
      setIsModalKeyOpen(true);
      setKeyBtn(false);
      setPasswordError(false); // Сбрасываем ошибку, если пароль правильный
      setPassword(""); // Очищаем поле пароля
    }
  };

  const handleCancelKey = () => {
    setKeyBtn(false);
  };

  const columns = [
    {
      title: "№",
      dataIndex: "key",
      key: "key",
      render: (field, item, index) => {
        return index + 1 + "";
      },
    },
    {
      title: "Фамилия",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Имя",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Отчество",
      dataIndex: "secondName",
      key: "secondName",
    },
    {
      title: "Группа",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      // Теги, статус
      render: (status, item) => {
        return (
          <Tag
            icon={
              status == "НЕ ПРОЙДЕНО" ? (
                <CloseCircleOutlined />
              ) : (
                <CheckCircleOutlined />
              )
            }
            color={status == "НЕ ПРОЙДЕНО" ? "error" : "success"}
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Логин",
      dataIndex: "login",
      key: "login",
    },
    {
      title: (
        <div className="noselect" style={{ display: "flex", gap: "12px" }}>
          <span>Пароль</span>
          <div
            style={{
              borderColor: "#b3b3b3 !important",
              right: "10px",
              top: "50%",
              textAlign: "center",
            }}
            onClick={handlePasswordVisibility}
          >
            {isPasswordVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </div>
        </div>
      ),
      dataIndex: "password",
      key: "password",
      width: "250px",
      render: (password, item) => {
        return (
          <div className="noselect">
            <Input.Password
              value={password}
              readOnly
              style={{ width: "100%", border: "none", boxShadow: "none" }}
              iconRender={(visible) => <></>}
              visibilityToggle={{ visible: isPasswordVisible }}
            />
          </div>
        );
      },
    },
    {
      title: "",
      dataIndex: "/",
      key: "button",
      // Кнопки профиля, редактирования и удаления
      render: (_, item) => (
        <div style={{ display: "flex", gap: "24px" }}>
          {/* Профиль */}
          <Button
            type="primary"
            value="large"
            shape="circle"
            size={sizeLarge}
            onClick={() => {
              console.log("item", item);
              setSelectedUser(item);
              showModalUser();
            }}
          >
            <UserOutlined />
          </Button>
          {/* Редактирование */}
          <Button
            type="primary"
            value="large"
            shape="circle"
            size={sizeLarge}
            onClick={() => {
              showModalEdit(item);
            }}
          >
            <EditOutlined />
          </Button>

          {/* Удаление */}
          <Button
            type="primary"
            danger
            shape="circle"
            size={sizeLarge}
            onClick={() => {
              showModalDelete(item._id);
            }}
          >
            <DeleteOutlined />
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    loadData();
  }, [sortKey, sortOrder]);

  // Состояние открытия/ закрытия модального окна редактирования учетной записи

  const [isEditOpen, setIsEditOpen] = useState(false);
  const showModalEdit = (user) => {
    console.log("user", user);
    console.log("selectedUser", selectedUser);
    setIsEditOpen(true);
    setSelectedUser(user);
  };

  return (
    <div className="noselect" style={{ margin: "20px" }}>
      <div
        style={{ display: "flex", gap: "12px", width: "94%", margin: "auto" }}
      >
        <Flex style={{ gap: "12px", flexGrow: "5" }}>
          <ModalAddUser loadData={loadData} />

          <div
            style={{
              marginTop: "0px",
              height: "24px",
              borderStyle: "solid",
              borderWidth: "1px",
              borderColor: "#d9d9d9",
              borderRadius: "6px",
              padding: "4px 0px 4px 11px",
              textAlign: "center",
              alignItems: "baseline",
              fontWeight: "600",
              display: "flex",
            }}
          >
            Сортировка:
            <span style={{ paddingLeft: "6px" }}>
              <Dropdown
                overlay={menu}
                trigger={["click"]}
                placement="bottom"
                arrow="true"
              >
                <a
                  onClick={(e) => {
                    const result = sortData(
                      filteredData !== undefined ? filteredData : tableData
                    );
                    console.log("res", result);
                    setTableData(result);
                  }}
                >
                  <Space className="list-sort">
                    <Button
                      className="button-sort"
                      type="primary"
                      style={{ width: "120px" }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        {sortKey.label} <CaretDownOutlined />
                      </span>
                    </Button>
                  </Space>
                </a>
              </Dropdown>
            </span>
          </div>

          <Input
            className="search-input"
            placeholder="Поиск по фамилии"
            style={{
              width: "290px",
              height: "33px",
              paddingLeft: "8px",
            }}
            onChange={onSearch}
          />
        </Flex>

        <div
          style={{
            marginTop: "-4px",

            display: "flex",
            gap: "12px",
          }}
        >
          <Button // ключи
            type="primary"
            shape="circle"
            size={sizeLarge}
            style={{}}
            onClick={() => {
              showModalKey();
            }}
          >
            <KeyOutlined
              style={{
                fontSize: "24px",
              }}
            />
          </Button>
          <Button
            type="primary"
            shape="circle"
            size={sizeLarge}
            style={{}}
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
      </div>

      {console.log(
        "filteredData !== undefined ? filteredData : tableData",
        filteredData !== undefined ? filteredData : tableData
      )}
      <Table
        style={{ width: "94%", margin: "auto" }}
        dataSource={filteredData !== undefined ? filteredData : tableData}
        columns={columns}
        pagination={false}
      />
      {/* Профиль модальное окно*/}
      {console.log("isUserOpen", isUserOpen)}
      <StudentProfile
        selectedUser={selectedUser}
        isUserOpen={isUserOpen}
        setData
        setIsUserOpen={setIsUserOpen}
      />
      {console.log("isEditOpen", isEditOpen)}
      <EditUsers
        isEditOpen={isEditOpen}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        setIsEditOpen={setIsEditOpen}
        loadData={loadData}
      />

      {/* Модальное окно выхода из учетной записи преподавателя */}
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

      {/* ПАРОЛЬ */}
      <Modal
        title={<div>Введите пароль</div>}
        open={keyBtn}
        width={400}
        onOk={handleKey}
        onCancel={handleCancelKey}
        okText="Войти"
        cancelText="Отмена"
        okButtonProps={{
          type: "primary",
        }}
      >
        <Input.Password
          style={{
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "36px",
            width: "80%",
          }}
          value={password}
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && (
          <p
            style={{
              color: "red",
              textAlign: "center",
              fontSize: "bold",
              margin: "0px",
            }}
          >
            Неверный пароль!
          </p>
        )}
      </Modal>

      {/* Ключи */}
      <Modal
        title={
          <div style={{ paddingLeft: "10px", fontSize: "20px" }}>
            Ключи к тестам
          </div>
        }
        open={isModalKeyOpen}
        onCancel={handleCloseModalKey}
        width={1000}
        footer={null}
      >
        <Pagination
          onChange={(page) => {
            setKeyId(page);
            console.log("page", page);
          }}
          defaultCurrent={1}
          defaultPageSize={1}
          total={6}
          style={{ marginBottom: "14px" }}
        />
        {renderKey()}
      </Modal>

      {/* Удаление */}
      {isDeleteOpen && (
        <DeleteUserButton
          setIsDeleteOpen={setIsDeleteOpen}
          id={selectedItemToDelete}
          loadData={loadData}
        />
      )}
    </div>
  );
};

export { TeacherPage };
