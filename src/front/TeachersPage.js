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
import { useEffect, useState, form } from "react";
import { ModalAddUser } from "./ModalAddUser";
import { DeleteUserButton } from "./DeleteUserButton";
import _ from "lodash";

const TeacherPage = () => {
  const items = [
    { label: "Фамилия", value: "secondName" },
    { label: "Группа", value: "group" },
  ];

  const [sortKey, setSortKey] = useState(items[0]);
  const [sortOrder, setSortOrder] = useState("ascend");

  const sortData = (data) => {
    console.log(
      "data",
      data,
      "sortKey",
      sortKey.value,
      "_.",
      _.sortedUniqBy(data, sortKey.value)
    );
    return _.sortedUniqBy(data, sortKey.value);
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
    fetch("/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const preparedData = JSON.parse(data.result);
        const sortedData = sortData(preparedData, sortKey, sortOrder);
        setTableData(sortedData);
        console.log("preparedData = ", sortedData);
      });
  };

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
              iconRender={(visible) => (
                // visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                <></>
              )}
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
      topic: "1. Особенности строения теодолита",
      statusTopic: "",
      numberOfAttempts: "7",
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
                  e.preventDefault();
                  const result = sortData(
                    filteredData !== undefined ? filteredData : tableData
                  );
                  console.log("res", result);
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
          // onSearch={onSearch}
          // enterButton
          style={{
            width: "290px",
            height: "33px",
            paddingLeft: "8px",
          }}
          onChange={onSearch}
        />
        <div style={{ marginTop: "-4px", marginLeft: "590px" }}>
          <Button type="primary" shape="circle" size={sizeLarge} style={{}}>
            <a className="logOutButton" href="http://localhost:3000/">
              <LogoutOutlined
                style={{
                  fontSize: "24px",
                }}
              />
            </a>
          </Button>
        </div>
      </div>

      <Table
        style={{ width: "94%", margin: "auto" }}
        dataSource={filteredData !== undefined ? filteredData : tableData}
        columns={columns}
        pagination={false}
        // onRow={(record) => {
        //   return {
        //     onClick: () => {
        //       console.log('кликнули на строкку таблицы')
        //       setSelectedUser(record);
        //       showModalUser();
        //     },
        //   };
        // }}
      />
      {/* Профиль модальное окно*/}
      {console.log("isUserOpen", isUserOpen)}
      <Modal
        key={"htgfjhgfjh"}
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
            <Form.Item
              label="Фамилия"
              name="Фамилия"
              value={selectedUser.lastName}
              rules={[
                {
                  required: true,
                  message: "Введите фамилию!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Имя"
              name="Имя"
              value={selectedUser.name}
              rules={[
                {
                  required: true,
                  message: "Введите имя!",
                },
              ]}
            >
              <Input value={selectedUser.name} />
            </Form.Item>

            {/* <Form.Item
            label="Отчество"
            name="Отчество"
            id="secondName"
            initialValue={selectedUser.secondName}
            rules={[
              {
                required: false,
                message: "Введите отчество!",
              },
            ]}
          > */}
            <div style={{ display: "flex" }}>
              Отчество:
              <Input value={selectedUser.secondName} />
            </div>
            {/* </Form.Item> */}

            <Form.Item
              label="Группа"
              name="Группа"
              value={selectedUser.group}
              rules={[
                {
                  required: true,
                  message: "Введите группу!",
                },
              ]}
            >
              <Input value={selectedUser.group} />
            </Form.Item>

            <Form.Item
              label="Логин"
              name="Логин"
              value={selectedUser.login}
              rules={[
                {
                  required: true,
                  message: "Введите логин!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="Пароль"
              value={selectedUser.password}
              rules={[
                {
                  required: true,
                  message: "Введите пароль!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        )}
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
