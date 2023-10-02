import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

const TaskDetails = () => {
  const params = useRoute().params;

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={styles.task}>{`Task Title: \n\n${params.title}`}</Text>
      <Text
        style={styles.task}
      >{`Task Description: \n\n${params.description}`}</Text>
    </View>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    margin: 5,
    backgroundColor: "grey",
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    textAlign: "center",
    // color: "lightblue",
    fontSize: 20,
  },
});
