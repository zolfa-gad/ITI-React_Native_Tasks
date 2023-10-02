import React, { useState } from "react";
import {  StyleSheet, Text,  View } from "react-native";
import ShowTasksList from "../components/sections/show-tasks-list";
import AddTaskObject from "../components/sections/add-task-object";

const TasksHome = () => {
  let [tasksList, setTasksList] = useState([]);
  let [taskObject, setTaskObjectData] = useState({
    title: "",
    description: "",
  });

  function onChangeTaskTitle(title) {
    setTaskObjectData({ ...taskObject, title });
    console.log(taskObject);
  }

  function onChangeTaskDescription(description) {
    setTaskObjectData({ ...taskObject, description });
    console.log(taskObject);
  }

  function addTask() {
    let found = tasksList.find(({ title }) => title == taskObject.title);
    console.log(found, "foun");
    if (!taskObject.title == "" && found == undefined) {
      setTasksList([...tasksList, taskObject]);
    }

    console.log(tasksList);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>To Do App</Text>
      <AddTaskObject
        addTask={addTask}
        onChangeTaskTitle={onChangeTaskTitle}
        onChangeTaskDescription={onChangeTaskDescription}
      />
      <ShowTasksList tasksList={tasksList} />
    </View>
  );
};

export default TasksHome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dark",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 2,
    padding: 10,
    margin: 5,
    textAlign: "center",
    width: "85%",
    color: "white",
  },
  text: {
    padding: 10,
    margin: 10,
    marginBottom: 30,
    fontSize: 40,
    color: "lightblue",
  },
  button: {
    fontSize: 25,
    backgroundColor: "lightblue",
    paddingVertical: 7,
    paddingHorizontal: 30,
    marginTop: 20,
    borderRadius: 7,
  },
  task: {
    padding: 10,
    //   margin: 10,
    //   marginBottom: 30,
    fontSize: 20,
    color: "white",
    backgroundColor: "grey",
  },
});
