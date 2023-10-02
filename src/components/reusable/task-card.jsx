import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styles";

const TaskCard = ({ task }) => {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      style={styles.task}
      onPress={() => navigator.navigate("task-details", task)}
    >
      <Text
        style={{
          fontSize: "20px",
          textAlign: "center",
          color: task.completed ? "green" : "white",
        }}
      >
        {task.title}
      </Text>
    </TouchableOpacity>
  );
};

export default TaskCard;
