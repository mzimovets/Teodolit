import { Button, Table } from "antd";

const dataSource = [
  {
    key: "1",
    Фамилия: "Mike",
    Имя: "Mike",
    Отчество: "Mike",
    Группа: "Mike",
    Логин: "Mike",
    Пароль: "Mike",
    Статус: "Mike",
  },
  {
    key: "2",
    Фамилия: "Mike",
    Имя: "Mike",
    Отчество: "Mike",
    Группа: "Mike",
    Логин: "Mike",
    Пароль: "Mike",
    Статус: "Mike",
  },
];

const columns = [
  {
    title: "№",
    dataIndex: "№",
    key: "№",
  },
  {
    title: "Фамилия",
    dataIndex: "Фамилия",
    key: "Фамилия",
  },
  {
    title: "Имя",
    dataIndex: "Имя",
    key: "Имя",
  },
  {
    title: "Отчество",
    dataIndex: "Отчество",
    key: "Отчество",
  },
  {
    title: "Группа",
    dataIndex: "Группа",
    key: "Группа",
  },
  {
    title: "Статус",
    dataIndex: "Статус",
    key: "Статус",
  },
  {
    title: "Логин",
    dataIndex: "Логин",
    key: "Логин",
  },
  {
    title: "Пароль",
    dataIndex: "Пароль",
    key: "Пароль",
  },
];

const TeacherPage = () => {
  return (
    <div>
      <Button>Новая учетная запись</Button>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export { TeacherPage };
