import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Row, Statistic, Modal, Form } from "antd";
import { ClockCircleOutlined, AuditOutlined } from "@ant-design/icons";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";
import { getData, saveData } from "./editorsActions";
import { useMatch } from "react-router-dom";
import { TestOne } from "./tests/TestOne";
import { TestTwo } from "./tests/TestTwo";

const { Countdown } = Statistic;
const deadline = Date.now() + 300000;
const ReactEditorJS = createReactEditorJS();

const TopicOne = () => {
  const match = useMatch("/topicsPage/:pageId");
  const [topicId, setTopicId] = useState(match.params.pageId || "topicOne");
  console.log("match", match);
  const [article, setArticle] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [isArticleFetched, setIsArticleFetched] = useState(false);
  const editorCore = useRef(null);

  const [isTimerEnd, setTimerEnd] = useState(false);

  const [exitBtn, setExitBtn] = useState(false);
  const showModalExit = () => {
    setExitBtn(true);
  };
  const handleExit = () => {
    setExitBtn(false);
    setIsModalVisible(false);
  };

  const handleCancelExit = () => {
    setExitBtn(false);
  };

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTestButtonClick = () => {
    setIsModalVisible(true);
  };

  const renderTest = () => {
    switch (topicId) {
      case "topicOne":
        return (
          <TestOne setIsModalVisible={setIsModalVisible} topicId={topicId} />
        );
      case "topicTwo":
        return (
          <TestTwo setIsModalVisible={setIsModalVisible} topicId={topicId} />
        );
    }
  };

  console.log("editor tools", article, article?.blocks, editorCore.current);

  return (
    <div style={{ margin: "24px" }}>
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
                  // disabled={!isTimerEnd}
                  onClick={handleTestButtonClick}
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
                  <Countdown value={deadline} format="mm:ss" />
                </div>
              </div>
            </Col>
          </Row>

          <Button
            onClick={async () => {
              if (isEdit) {
                const data = await editorCore.current.save();
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
      {/* Модальное окно для теста */}
      <Modal
        title={
          <div
            style={{
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Тест по теме №1 "Правила обращения с теодолитом"
          </div>
        }
        visible={isModalVisible}
        onCancel={() => {
          showModalExit();
        }}
        footer={null}
        cancelButtonProps={false}
        width={1000}
        style={{ top: "40px" }}
      >
        {renderTest()}
      </Modal>
      <Modal
        className="deleteModal"
        title={
          <div style={{ width: "242px" }}>
            Завершить тест?{" "}
            <p style={{ fontSize: "14px", margin: "0px" }}>
              Попытка будет засчитана
            </p>
          </div>
        }
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
    </div>
  );
};

export { TopicOne };
