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
  EditOutlined,
  DeleteOutlined,
  CaretDownOutlined,
  LogoutOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { ModalAddUser } from "./ModalAddUser";
import { DeleteUserButton } from "./DeleteUserButton";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { fetchRequest } from "./utils";

const TeacherPage = (props) => {
  const navigateOk = useNavigate();

  const items = [
    { label: "Фамилия", value: "lastName" },
    { label: "Группа", value: "group" },
  ];

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

  // Состояние открытия/ закрытия модального окна редактирования учетной записи

  const [isEditOpen, setIsEditOpen] = useState(false);
  const showModalEdit = (user) => {
    console.log("user", user);
    console.log("selectedUser", selectedUser);
    setIsEditOpen(true);
    setSelectedUser(user);
  };

  const handleOkEdit = () => {
    form.resetFields();
    setIsEditOpen(false);
    console.log("нажато");
  };

  const handleCancelEdit = () => {
    setIsEditOpen(false);
  };

  // Состояние открытия/ закрытия модального окна профиля учетной записи
  const [isUserOpen, setIsUserOpen] = useState(false);
  const showModalUser = () => {
    setIsUserOpen(true);
  };

  const handleOkUser = () => {
    setIsUserOpen(false);
  };
  const handleCancelUser = () => {
    setIsUserOpen(false);
  };

  // Состояние открытия/ закрытия модального окна удаления учетной записи

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItemToDelete, setSelectedItemToDelete] = useState();
  console.log(isDeleteOpen);
  const showModalDelete = (id) => {
    setIsDeleteOpen(true);
    setSelectedItemToDelete(id);
  };

  const handleDelete = () => {
    setIsDeleteOpen(false);
    console.log("нажато");
  };

  const handleCancelDelete = () => {
    setIsDeleteOpen(false);
  };

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

  // Переменные для размера кнопок
  const sizeLarge = "large";
  const sizeMedium = "middle";
  const sizeSmall = "small";

  // Переменная для компонента поиска
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
      const sortedData = sortData(preparedData, sortKey, sortOrder);
      setTableData(sortedData);
      console.log("preparedData = ", sortedData);
    });
    // fetch("/users", {
    //   method: "get",
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //   },
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     const preparedData = JSON.parse(data.result);
    //     const sortedData = sortData(preparedData, sortKey, sortOrder);
    //     setTableData(sortedData);
    //     console.log("preparedData = ", sortedData);
    //   });
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

  // Написать логику для проверки обязательных полей в окне редактирования
  const [formEditHasError, setFormEditHasError] = useState();

  // Общая таблица
  const dataSource = [
    {
      key: "1",
      lastName: "Зимовец",
      name: "Максим",
      secondName: "Алексеевич",
      group: "ПИ-202",
      login: "zimMaks",
      password: "36345fgf45",
      status: "Зачет",
    },
    {
      key: "2",
      lastName: "Пономарев",
      name: "Александр",
      secondName: "Владимирович",
      group: "ПИ-202",
      login: "ponomarAlex",
      password: "2234fdgt24",
      status: "Зачет",
    },
    {
      key: "3",
      lastName: "Филиппов",
      name: "Максим",
      secondName: "Владимирович",
      group: "ПИ-202",
      login: "filippovMaks",
      password: "5534dgfd424",
      status: "Зачет",
    },
  ];

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
          <Tag color={"blue"} key={status}>
            {status?.toUpperCase()}
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
        );
      },
    },
    {
      title: "Кол-во попыток (?)",
      dataIndex: "numberOfAttempts",
      key: "numberOfAttempts",
    },
  ];

  useEffect(() => {
    loadData();
  }, [sortKey, sortOrder]);

  return (
    <div className="noselect" style={{ margin: "20px" }}>
      <div style={{ display: "flex", gap: "12px" }}>
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
          }}
        >
          Сортировка: {/* Стрелка */}
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
        <div style={{ marginTop: "-4px", marginLeft: "590px" }}>
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
        <Table
          dataSource={dataSourceUser}
          columns={columnsUser}
          pagination={false}
        />
      </Modal>
      {console.log("isEditOpen", isEditOpen)}
      <Modal
        title="Редактировать учетную запись"
        open={isEditOpen}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        okText="Сохранить"
        cancelText="Отмена"
      >
        {selectedUser && (
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
              paddingRight: "74px",
              marginTop: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                marginBottom: "22px",
              }}
            >
              <span style={{ color: "red", marginLeft: "40px" }}>*</span>
              <span
                style={{
                  width: "72px",
                  textAlign: "right",
                  marginRight: "10px",
                }}
              >
                Фамилия :
              </span>
              <Input
                style={{ marginLeft: "8px", width: "250px" }}
                value={selectedUser.lastName}
              />
            </div>

            <div
              style={{
                display: "flex",

                marginBottom: "22px",
              }}
            >
              <span style={{ color: "red", marginLeft: "72px" }}>*</span>
              <span
                style={{
                  width: "40px",
                  textAlign: "right",
                  marginRight: "10px",
                }}
              >
                Имя :
              </span>
              <Input
                style={{ marginLeft: "8px", width: "250px" }}
                value={selectedUser.name}
              />
            </div>

            <div
              style={{
                display: "flex",

                marginBottom: "22px",
              }}
            >
              <span
                style={{
                  width: "120px",
                  textAlign: "right",
                  marginRight: "10px",
                }}
              >
                Отчество :
              </span>
              <Input
                style={{ marginLeft: "8px", width: "250px" }}
                value={selectedUser.secondName}
              />
            </div>

            <div
              style={{
                display: "flex",

                marginBottom: "22px",
              }}
            >
              <span style={{ color: "red", marginLeft: "54px" }}>*</span>
              <span
                style={{
                  width: "60px",
                  textAlign: "right",
                  marginRight: "10px",
                }}
              >
                Группа :
              </span>
              <Input
                style={{ marginLeft: "8px", width: "250px" }}
                value={selectedUser.group}
              />
            </div>

            <div
              style={{
                display: "flex",

                marginBottom: "22px",
              }}
            >
              <span style={{ color: "red", marginLeft: "60px" }}>*</span>
              <span
                style={{
                  width: "54px",
                  textAlign: "right",
                  marginRight: "10px",
                }}
              >
                Логин :
              </span>
              <Input
                style={{ marginLeft: "8px", width: "250px" }}
                value={selectedUser.login}
              />
            </div>

            <div
              style={{
                display: "flex",

                marginBottom: "22px",
              }}
            >
              <span style={{ color: "red", marginLeft: "50px" }}>*</span>
              <span
                style={{
                  width: "64px",
                  textAlign: "right",
                  marginRight: "10px",
                }}
              >
                Пароль :
              </span>
              <Input.Password
                style={{ marginLeft: "8px", width: "250px" }}
                value={selectedUser.password}
              />
            </div>
            {/* // Написать логику для проверки обязательных полей в окне редактирования */}
            <p style={{ color: "red", width: "70%", margin: "auto" }}>
              {formEditHasError &&
                "Пожалуйста, заполните все обязательные поля!"}
            </p>
          </Form>
        )}
      </Modal>

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
