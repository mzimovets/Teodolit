import { React } from "react";
import { Tag } from "antd";
import { AimOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import ImageMapper from "react-img-mapper";

const KeyFour = () => {
  //становый винт
  const MAP_1 = {
    name: "my-map-1",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 255, 255, 1)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // подъемный винт
  const MAP_2 = {
    name: "my-map-2",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемный винт (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(5, 0, 255, 0.8)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // площадка штатива
  const MAP_3 = {
    name: "my-map-3",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 255, 1.0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // подставка (трегер)
  const MAP_4 = {
    name: "my-map-4",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(5, 0, 255, 1)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // кремальера
  const MAP_5 = {
    name: "my-map-5",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 255, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // зрительная труба
  const MAP_6 = {
    name: "my-map-6",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 69, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // визир
  const MAP_7 = {
    name: "my-map-7",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 255)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // базовая пластина(основание)
  const MAP_8 = {
    name: "my-map-8",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(255, 0, 0, 1)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // закрепительный винт зрительной трубы
  const MAP_9 = {
    name: "my-map-9",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(32, 0, 255, 1)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // цилиндрический уровень
  const MAP_10 = {
    name: "my-map-10",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(173, 255, 47)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // наводящие винты
  const MAP_11 = {
    name: "my-map-11",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(32, 0, 255, 1)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(32, 0, 255, 1)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // окуляр отсчетного микроскопа с диоптрийным кольцом
  const MAP_12 = {
    name: "my-map-12",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(32, 0, 255, 1)",
      },
    ],
  };

  // зажимной(закрепительный) винт
  const MAP_13 = {
    name: "my-map-13",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(37, 196, 0, 1)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        // hide: true, // Скрыть область
        strokeColor: "rgba(37, 196, 0, 1)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  // наводящий винт зрительной трубы
  const MAP_14 = {
    name: "my-map-14",
    areas: [
      {
        // становый винт
        name: "1",
        shape: "rect",
        coords: [160, 365, 195, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // Базовая пластина (основание) (#2)
        name: "2",
        shape: "poly",
        coords: [118, 285, 118, 272, 197, 280, 223, 266, 223, 278, 200, 295],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подъемные винты (#3)
        name: "3",
        shape: "poly",
        coords: [
          115, 270, 115, 246,

          200, 252,

          225, 241, 225, 264, 196, 278,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 255, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // площадка штатива (#1)
        name: "4",
        shape: "poly",
        coords: [106, 328, 110, 284, 200, 296, 225, 278, 243, 282, 247, 328],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // штатив
        name: "5",
        shape: "rect",
        coords: [300, 450, 48, 330],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // подставка (трегер) (#23)
        name: "6",
        shape: "poly",
        coords: [
          118, 244, 118, 214, 197, 217, 222, 215, 213, 222, 213, 235, 222, 241,
          200, 251,
        ],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#5)
        name: "7",
        shape: "poly",
        coords: [195, 184, 238, 182, 241, 212, 198, 215],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "8",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#4)
        name: "9",
        shape: "circle",
        coords: [161, 193, 16],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящие винты (#13)
        name: "10",
        shape: "poly",
        coords: [239, 181, 241, 201, 247, 200, 247, 181],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // цилиндрический уровень (#12)
        name: "11",
        shape: "poly",
        coords: [180, 184, 180, 160, 257, 157, 255, 180, 190, 183],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // наводящий винт зрительной трубы (#6)
        name: "12",
        shape: "circle",
        coords: [167, 138, 16.5],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        // hide: true, // Скрыть область
        strokeColor: "rgba(127, 255, 212)",
      },
      {
        // кремальера (#9)
        name: "13",
        shape: "circle",
        coords: [225, 77, 17],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зажимные винты (#14)
        name: "14",
        shape: "rect",
        coords: [215, 240, 238, 219],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // закрепительный винт зрительной трубы (#10)
        name: "15",
        shape: "rect",
        coords: [199, 20, 214, 43],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // визир (#20)
        name: "16",
        shape: "poly",
        coords: [127, 45, 127, 16, 175, 38, 175, 63],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",

        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // зрительная труба (#21)
        name: "17",
        shape: "poly",
        coords: [102, 78, 102, 36, 175, 64, 175, 100],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
      {
        // окуляр отсчетного микроскопа с диоптрийным кольцом (#15)
        name: "18",
        shape: "poly",
        coords: [93, 71, 93, 52, 101, 52, 101, 71],
        preFillColor: "rgba(0, 0, 0, 0)",
        fillColor: "rgba(0, 0, 0, 0)",
        hide: true, // Скрыть область
        strokeColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  return (
    <div style={{ paddingLeft: "10px", paddingTop: "12px" }}>
      <Title level={3} style={{ marginTop: "-16px" }}>
        Тест по теме №4 "Устройство и принцип работы технических теодолитов
        2Т30П и 4Т30П"
      </Title>
      {/* Taks 1 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №1
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">становый винт</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_1}
          />
        </div>
      </div>
      {/* Task 2 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №2
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">подъемный винт</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_2}
          />
        </div>
      </div>
      {/* Taks 3 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №3
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">площадка штатива</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_3}
          />
        </div>
      </div>
      {/* Taks 4 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №4
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">подставка(трегер)</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_4}
          />
        </div>
      </div>
      {/* Taks 5 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №5
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">кремальера</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_5}
          />
        </div>
      </div>
      {/* Task 6 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №6
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">зрительная труба</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_6}
          />
        </div>
      </div>
      {/* Task 7 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №7
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится <b className="keyWord">визир</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_7}
          />
        </div>
      </div>
      {/* Taks 8 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №8
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">базовая пластина(основание)</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_8}
          />
        </div>
      </div>
      {/* Taks 9 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №9
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">закрепительный винт зрительной трубы</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_9}
          />
        </div>
      </div>
      {/* Task 10 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №10
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">цилиндрический уровень</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_10}
          />
        </div>
      </div>

      {/* Task 11 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №11
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">наводящий винт</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_11}
          />
        </div>
      </div>
      {/* Task 12 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №12
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">
            окуляр отсчетного микроскопа с диоптрийным кольцом
          </b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_12}
          />
        </div>
      </div>
      {/* Task 13 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №13
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">зажимной(закрепительный) винт</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_13}
          />
        </div>
      </div>
      {/* Task 14 */}
      <div>
        <div className="testTaskHeader">
          <AimOutlined />
          Задание №14
        </div>
        <div className="testTaskDiscription">
          Нажмите на изображение, где находится{" "}
          <b className="keyWord">наводящий винт зрительной трубы</b>
        </div>
        <div
          style={{
            width: "36.2%",
            margin: "auto",
            marginBottom: "20px",
            border: "2px solid #d9d9d9",
            borderRadius: "14px",
            marginTop: "18px",
          }}
        >
          <ImageMapper
            src={"/image/test1-1.png"}
            height={450}
            width={337}
            map={MAP_14}
          />
        </div>
      </div>
    </div>
  );
};

export { KeyFour };
