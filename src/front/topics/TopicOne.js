import React, { useEffect, useRef, useState } from "react";
import { Button, Spin, Statistic, Modal, Form, Flex } from "antd";
import {
  ClockCircleOutlined,
  AuditOutlined,
  InfoCircleOutlined,
  CheckCircleOutlined,
  EditOutlined,
  AimOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";
import { getData, saveData } from "./editorsActions";
import { useMatch } from "react-router-dom";
import { TestOne } from "./tests/TestOne";
import { TestTwo } from "./tests/TestTwo";
import { TestThree } from "./tests/TestThree";
import { TestFour } from "./tests/TestFour";
import { TestFive } from "./tests/TestFive";
import { TestSix } from "./tests/TestSix";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopicState } from "./store/disabledStateSlice";

const { Countdown } = Statistic;
const deadline = Date.now() + 30000;
const ReactEditorJS = createReactEditorJS();

const sizeMedium = "medium";

const TopicOne = () => {
  const dispatch = useDispatch();
  const testsStatuses = useSelector(
    (state) => state.disabledState.testsStatuses
  );
  const match = useMatch("/topicsPage/:pageId");
  const [topicId, setTopicId] = useState(match.params.pageId || "topicOne");
  console.log("match", match);
  const [article, setArticle] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [isArticleFetched, setIsArticleFetched] = useState(false);
  const editorCore = useRef(null);

  const [isTimerEnd, setTimerEnd] = useState(false);

  const [isModalInfo, setIsModalInfo] = useState(false);
  const showModalInfo = () => {
    setIsModalInfo(true);
  };

  const handleExitInfo = () => {
    setIsModalInfo(false);
  };

  const handleCancelExitInfo = () => {
    setIsModalInfo(false);
  };

  const [exitBtn, setExitBtn] = useState(false);
  const showModalExit = () => {
    setExitBtn(true);
  };
  const handleExit = () => {
    // topicId - Тест который решает пользователь
    // TestOne.onTestComplete();
    setExitBtn(false);
    setIsModalVisible(false);
  };

  const handleCancelExit = () => {
    setExitBtn(false);
  };

  const loadTopic = async () => {
    const articleRes = await getData(topicId);
    console.log("article got", articleRes);
    setArticle(articleRes?.article);
    if (articleRes === null) {
      setIsEdit(true);
    }
    setIsArticleFetched(true);
    const testIndex = getTestIndex();
    console.log("testsStatuses", testsStatuses, "testIndex", testIndex);
    if (testsStatuses[testIndex]?.status === "ПРОЙДЕНО") {
      setTimerEnd(true);
      console.log("ПРОЙДЕНО", isTimerEnd);
    } else {
      console.log("timeOutSet", isTimerEnd);
      setTimeout(() => {
        console.log("timeOutComplete", isTimerEnd);
        setTimerEnd(true);
      }, 1000 * 30); //30сек
    }
  };

  useEffect(() => {
    dispatch(fetchTopicState());
  }, []);
  useEffect(() => {
    console.log("testsStatusesOut", testsStatuses);
    if (testsStatuses.length > 0) {
      loadTopic();
      console.log("testsStatusesIn", testsStatuses);
    }
  }, [testsStatuses, match]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTestButtonClick = () => {
    setIsModalVisible(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  };

  const renderTest = () => {
    switch (topicId) {
      case "topicOne":
        console.log("TO Status", testsStatuses[0]?.status);
        return (
          <TestOne setIsModalVisible={setIsModalVisible} topicId={topicId} />
        );
      case "topicTwo":
        return (
          <TestTwo setIsModalVisible={setIsModalVisible} topicId={topicId} />
        );
      case "topicThree":
        return (
          <TestThree setIsModalVisible={setIsModalVisible} topicId={topicId} />
        );
      case "topicFour":
        return (
          <TestFour setIsModalVisible={setIsModalVisible} topicId={topicId} />
        );
      case "topicFive":
        return (
          <TestFive setIsModalVisible={setIsModalVisible} topicId={topicId} />
        );
      case "topicSix":
        return (
          <TestSix setIsModalVisible={setIsModalVisible} topicId={topicId} />
        );
    }
  };

  const getTestIndex = () => {
    switch (topicId) {
      case "topicOne":
        return 0;
      case "topicTwo":
        return 1;
      case "topicThree":
        return 2;
      case "topicFour":
        return 3;
      case "topicFive":
        return 4;
      case "topicSix":
        return 5;
    }
  };

  const getDeadline = () => {
    switch (topicId) {
      case "topicOne":
        console.log("TO Status", testsStatuses[0]?.status);

        if (testsStatuses[0]?.status === "ПРОЙДЕНО") {
          return 0;
        } else {
          return deadline;
        }
      case "topicTwo":
        if (testsStatuses[1]?.status === "ПРОЙДЕНО") {
          return 0;
        } else {
          return deadline;
        }
      case "topicThree":
        if (testsStatuses[2]?.status === "ПРОЙДЕНО") {
          return 0;
        } else {
          return deadline;
        }
      case "topicFour":
        if (testsStatuses[3]?.status === "ПРОЙДЕНО") {
          return 0;
        } else {
          return deadline;
        }
      case "topicFive":
        if (testsStatuses[4]?.status === "ПРОЙДЕНО") {
          return 0;
        } else {
          return deadline;
        }
      case "topicSix":
        if (testsStatuses[5]?.status === "ПРОЙДЕНО") {
          return 0;
        } else {
          return deadline;
        }
    }
  };

  const [loading, setLoading] = useState();

  useEffect(() => {
    // Эмуляция задержки загрузки для демонстрации
  }, []);

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
          {/* <Row gutter={16}>
            <Col span={12}> */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button
              type="primary"
              style={{
                marginRight: "24px",
                position: "relative",
                width: "205px",
              }}
              disabled={!isTimerEnd}
              onClick={handleTestButtonClick}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <AuditOutlined style={{ fontSize: "20px" }} />
                <span style={{ fontSize: "14px", fontWeight: "bold" }}>
                  Пройти тест по теме{" "}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                    }}
                  ></div>
                </span>
              </div>
            </Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "120px",
                // justifyContent: "flex-end",
              }}
            >
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
                <Countdown value={getDeadline()} format="mm:ss" />
              </div>
            </div>
          </div>
          {/* </Col>
          </Row> */}

          {/* saveButton */}
          {/* <Button
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
          
            {isEdit ? "Save" : "Edit"}
          </Button> */}
        </>
      )}
      {/* Модальное окно для теста */}
      <Modal
        className="testModal"
        visible={isModalVisible}
        onCancel={() => {
          showModalExit();
        }}
        footer={null}
        cancelButtonProps={false}
        width={1000}
        style={{ top: "40px" }}
      >
        <Form>
          <Flex
            justify="flex-end"
            align="baseline"
            style={{ marginRight: "28px" }}
          >
            <Button
              type="primary"
              shape="circle"
              size={sizeMedium}
              onClick={() => {
                showModalInfo();
              }}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <InfoCircleOutlined
                style={{
                  fontSize: "20px",
                  lineHeight: 1,
                  verticalAlign: "middle",
                }}
              />
            </Button>
          </Flex>
        </Form>
        {renderTest()}
      </Modal>
      <Modal
        className="deleteModal"
        title={<div style={{ width: "242px" }}>Завершить тест? </div>}
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

      <Modal
        title={
          <div style={{ width: "242px" }}>Условные обозначения теста </div>
        }
        open={isModalInfo}
        onOk={handleExitInfo}
        onCancel={handleCancelExitInfo}
        footer={null}
        width={800}
        okButtonProps={{
          type: "primary",
          danger: true,
        }}
      >
        <div className="modalInfo">
          <div>
            <AimOutlined style={{ fontSize: "20px" }} />
            <span>
              {" "}
              - нажмите на область изображения, чтобы ответить на вопрос
            </span>
          </div>
          <div>
            <EditOutlined style={{ fontSize: "20px" }} />
            <span>
              {" "}
              - напишите ответ и нажмите кнопку "ответить", чтобы ответить на
              вопрос
            </span>
          </div>
          <div>
            <CheckCircleOutlined style={{ fontSize: "20px" }} />
            <span>
              {" "}
              - выберите один правильный ответ и нажмите кнопку "ответить",
              чтобы ответить на вопрос
            </span>
          </div>
        </div>
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
