import {
  HomeOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div
      className="sideNav"
      style={{
        minWidth: "250px",
        height: "90vh",
        backgroundColor: "white",
        borderRadius: "12px",
        margin: "16px",
      }}
    >
      <ul>
        <li>
          <Link to="/topicOne">
            <HomeOutlined />
            Тема 1
          </Link>
        </li>
        <li>
          <Link to="/testTopicOne">
            <AppstoreOutlined />
            Тест по теме 1
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { SideNav };
