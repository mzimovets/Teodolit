import React, { useEffect, useRef, useState } from "react";
import {
  Typography,
  Alert,
  Space,
  Image,
  Button,
  Input,
  Col,
  Row,
  Statistic,
} from "antd";
import {
  BookOutlined,
  ClockCircleOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";
import { getData, saveData } from "./editorsActions";
import { useMatch } from "react-router-dom";

const { Title } = Typography;
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

const ReactEditorJS = createReactEditorJS();

const TopicOne = () => {
  const match = useMatch("/topicsPage/:pageId"); //Находит в адресной строке путь '/topicsPage/:pageId' и достает оттуда значение pageId
  const [topicId, setTopicId] = useState(match.params.pageId || "topicOne");
  console.log("match", match);
  const [article, setArticle] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [isArticleFetched, setIsArticleFetched] = useState(false);
  const editorCore = useRef(null);

  const [isTimerEnd, setTimerEnd] = useState(false);

  useEffect(async () => {
    const articleRes = await getData(topicId);
    console.log("article got", articleRes);
    setArticle(articleRes?.article);
    if (articleRes === null) {
      setIsEdit(true);
    }
    setIsArticleFetched(true);
    setTimeout(() => {
      setTimerEnd(true);
    }, 1000 * 60 * 5); //5 мин
  }, []);

  console.log("editor tools", article, article?.blocks, editorCore.current);

  return (
    <div style={{ margin: "24px" }}>
      {/* <Input
        style={{ width: "250px" }}
        defaultValue={topicId}
        onClick={(e) => {
          console.log("e", e.target.value);
          setTopicId(e.target.value);
        }}
      /> */}

      {/* У ReactEditorJS почему-то не работает перерисовка, поэтому отображаем его когда данные загрузились */}
      {/* {article?.blocks &&
        } */}

      {isArticleFetched &&
        (isEdit ? (
          <>
            Edit mode {`${isEdit}`}
            {
              <ReactEditorJS
                enableReInitialize={true}
                defaultValue={{
                  time: 0,
                  blocks: article?.blocks || [],
                }}
                tools={EDITOR_JS_TOOLS}
                onInitialize={(editor) => {
                  console.log("инициализированно", editor);
                  editorCore.current = editor;
                }}
              />
            }
          </>
        ) : (
          <ReactEditorJS
            enableReInitialize={true}
            readOnly
            defaultValue={{
              time: 0,
              blocks: article?.blocks,
            }}
            tools={EDITOR_JS_TOOLS}
            onInitialize={(editor) => {
              console.log("инициализированно", editor);
              editorCore.current = editor;
            }}
          />
        ))}
      {/* {!isEdit && (
        <>
          Edit mode
          {
            <ReactEditorJS
              enableReInitialize={true}
              defaultValue={{
                time: 0,
                blocks: [],
              }}
              tools={EDITOR_JS_TOOLS}
              onInitialize={(editor) => {
                console.log("инициализированно", editor);
                editorCore.current = editor;
              }}
            />
          }
        </>
      )} */}
      {isArticleFetched && (
        <>
          <Row gutter={16}>
            <Col span={12}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "764px",
                }}
              >
                <Button
                  type="primary"
                  style={{ marginRight: "24px" }}
                  disabled={!isTimerEnd}
                >
                  <div style={{ display: "flex", gap: "6px" }}>
                    <AuditOutlined style={{ fontSize: "20px" }} />
                    <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Пройти тест по теме
                    </span>
                  </div>
                </Button>
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

          <Button
            onClick={async () => {
              if (isEdit) {
                const data = await editorCore.current.save();
                console.log("Saved", data, topicId, article?.blocks);
                // отправка на сервер
                saveData(data, topicId);
                setIsEdit(false);
              } else {
                setIsEdit(true);
              }
            }}
          >
            {/* Save */}
            {isEdit ? "Save" : "Edit"}
          </Button>
        </>
      )}
    </div>
  );
};

export { TopicOne };
