import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTestStatus } from "../services/topicServices";

export const fetchTopicState = createAsyncThunk(
  "fetchTopicState",
  async (thunkAPI) => {
    const response = await fetchTestStatus();
    console.log("response", response);
    if (response.status === "OK") {
      return JSON.parse(response.result);
    }
    return response;
  }
);
export const disabledStateSlice = createSlice({
  name: "disabledState",
  initialState: {
    value: false,
    topicTwo: true,
    topicThree: true,
    topicFour: true,
    topicFive: true,
    topicSix: true,
    testsStatuses: [],
  },
  reducers: {
    setDisabledState: (state, action) => {
      state.value = action.payload;
    },
    setOpenTopicTwo: (state, action) => {
      state.topicTwo = action.payload;
    },
    setOpenTopicThree: (state, action) => {
      state.topicThree = action.payload;
    },
    setOpenTopicFour: (state, action) => {
      state.topicFour = action.payload;
    },
    setOpenTopicFive: (state, action) => {
      state.topicFive = action.payload;
    },
    setOpenTopicSix: (state, action) => {
      state.topicSix = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopicState.fulfilled, (state, action) => {
      console.log("action", action);
      state.testsStatuses = action.payload.testData;
      state.topicTwo =
        action.payload.testData[0].status === "ПРОЙДЕНО" ||
        action.payload.testData[0].count !== 0
          ? false
          : true;
      state.topicThree =
        action.payload.testData[1].status === "ПРОЙДЕНО" ||
        action.payload.testData[1].count !== 0
          ? false
          : true;
      state.topicFour =
        action.payload.testData[2].status === "ПРОЙДЕНО" ||
        action.payload.testData[2].count !== 0
          ? false
          : true;
      state.topicFive =
        action.payload.testData[3].status === "ПРОЙДЕНО" ||
        action.payload.testData[3].count !== 0
          ? false
          : true;
      state.topicSix =
        action.payload.testData[4].status === "ПРОЙДЕНО" ||
        action.payload.testData[4].count !== 0
          ? false
          : true;
      //   state.entities.push(action.payload);
    });
  },
});

export const { setDisabledState, setOpenTopicTwo } = disabledStateSlice.actions;

export default disabledStateSlice.reducer;
