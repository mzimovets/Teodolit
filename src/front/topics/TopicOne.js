import React, { useEffect, useRef, useState } from "react";
import { Typography, Alert, Space, Image, Button, Input } from "antd";
import { BookOutlined } from "@ant-design/icons";
import { createReactEditorJS } from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./tools";
import { getData, saveData } from "./editorsActions";
import { useMatch } from "react-router-dom";

const { Title } = Typography;

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
      <Button disabled={!isTimerEnd}>TEST</Button>
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
      {/* <Title level={3}>1. Правила обращения с теодолитом</Title>
      <Alert
        style={{ width: "80%" }}
        description={
          <b style={{ fontSize: "16px" }}>
            Теодолит – геодезический прибор для определения направлений и
            измерения вертикальных и горизонтальных углов, а также измерения
            магнитных азимутов и дальномерных расстояний. <br />
            Теодолит применяется при геодезических работах, топографических
            съёмках в строительстве и других видах работ.
          </b>
        }
        type="success"
        icon={<BookOutlined />}
        showIcon
      />
      <Title level={5} style={{ textIndent: "20px" }}>
        Полученный прибор закрепляют на штативе или кронштейне становым винтом
        (рис.1). Выполняют общий осмотр прибора.
        <br />
      </Title>
      <Image.PreviewGroup
        items={[
          "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
          "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
          "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
        ]}
      >
        <Image
          width={200}
          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        />
      </Image.PreviewGroup>

      <Title level={5} style={{ textIndent: "20px" }}>
        После закрепления теодолита на штативе следует убедиться в отсутствии
        механических повреждений металлических и оптических деталей прибора,
        произвести проверку металлических узлов, обратив внимание на состояние и
        работу всех винтов прибора, на плавность вращения его отдельных частей
        <br />
      </Title>
      <Title level={5} style={{ textIndent: "20px" }}>
        Штатив служит для установки теодолита над точкой местности - вершиной
        измеряемого угла. Высоту штатива изменяют выдвижением ножек, после чего
        их закрепляют винтами. Наконечники ножек углубляют в грунт, нажимая
        ногой на их упоры (рис. 2).
      </Title> */}
    </div>
  );
};

export { TopicOne };
