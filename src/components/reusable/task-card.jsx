import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {useNavigation} from "@react-navigation/native";

const TaskCard = ({ task }) => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      style={styles.task}
      // onPress={() => navigator.navigate("task-details", task)}
    >
      <Text style={styles.text}>{task.title}</Text>
    </TouchableOpacity>
  );
  //   return <Text styles={styles.text}>{title}</Text>;
};

export default TaskCard;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    margin: 5,
    backgroundColor: "grey",
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    color: "lightblue",
  },
});
