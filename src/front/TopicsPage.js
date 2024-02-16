import { Link } from "react-router-dom";
import React from "react";
import {
  HomeOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  LineChartOutlined,
  UserOutlined,
  BookOutlined,
  AuditOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Tree } from "antd";

const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
          {
            title: "leaf",
            key: "0-0-0-2",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: "leaf",
            key: "0-0-1-0",
          },
        ],
      },
      {
        title: "parent 1-2",
        key: "0-0-2",
        children: [
          {
            title: "leaf",
            key: "0-0-2-0",
          },
          {
            title: "leaf",
            key: "0-0-2-1",
          },
        ],
      },
    ],
  },
];

const TopicsPage = () => {
  return (
    <div>
      <header style={{ fontWeight: "500" }}>
        <div
          className="navbar"
          style={{
            background: "#f3f3f7",
            display: "flex",
            padding: "6px 32px",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <img
            style={{
              height: "50px",
              width: "50px",
              border: "1px solid #d4d4d4",
              borderRadius: "12px",
            }}
            // src="hutor_icon.png"
          />
          <div className="navbar-title">HUTOR</div>
        </div>
        <hr
          style={{
            margin: "0px",
            border: "none",
            borderTop: "1px solid #d4d4d4",
          }}
        />
      </header>
      <div style={{ display: "flex" }}>
        <div
          className="sideNav"
          style={{
            height: "90vh",
            // backgroundColor white
            backgroundColor: "#333",
            borderRadius: "12px",
            margin: "16px",
            width: "350px",
          }}
        >
          <Tree
            showLine
            switcherIcon={<DownOutlined />}
            defaultExpandedKeys={["0-0-0"]}
            treeData={treeData}
          />
          <ul>
            <li>
              <Link to="/topic1">
                <BookOutlined />
                1. Правила обращения с теодолитом
              </Link>
            </li>
            <li>
              <Link to="/testTopic1">
                <FileTextOutlined />
                <AuditOutlined />
                Тест по теме №1
              </Link>
            </li>
            <li>
              <Link to="/scenario">
                <FileTextOutlined /> 2.
              </Link>
            </li>
            <li>
              <Link to="/statistics">
                <LineChartOutlined /> Статистика
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <UserOutlined /> Профиль
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { TopicsPage };
