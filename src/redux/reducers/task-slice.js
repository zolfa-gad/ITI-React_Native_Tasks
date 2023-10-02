import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

let taskSlice = createSlice({
  name: "task",
  initialState: {
    tasksList: [],
  },

  reducers: {
    setTasksList: (state, action) => {
      state.tasksList = action.payload;
    },
    addTask: (state, action) => {
      // console.log(state.tasksList, "list add task");
      let found = state.tasksList.find(
        ({ title }) => title == action.payload.title
      );
      if (!action.payload.title == "" && found == undefined) {
        state.tasksList = [...state.tasksList, action.payload];
      }
    },
    removeTask: (state, action) => {
      if (state.tasksList.length == 1) {
        removeDataFromStorage("tasksList");
        // console.log(state.tasksList, "after remove");
      }
      state.tasksList = state.tasksList.filter(
        ({ id }) => id != action.payload.id
      );
    },
    doneTask: (state, action) => {
      state.tasksList.find((item) => {
        if (item.id == action.payload.id) {
          item.completed = !item.completed;
        }
      });
      // console.log(action.payload.completed, "completed");
    },
  },
});

export let { addTask, removeTask, setTasksList, doneTask } = taskSlice.actions;

export default taskSlice.reducer;

// async function setDataToStorage(key, data) {
//   await AsyncStorage.setItem(key, JSON.stringify(data));
// }
// async function getDataFromStorage(key) {
//   let x = JSON.parse(await AsyncStorage.getItem(key));
//   return x;
// }

async function removeDataFromStorage(key) {
  await AsyncStorage.removeItem(key);
}
