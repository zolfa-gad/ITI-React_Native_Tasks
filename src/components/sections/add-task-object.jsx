import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const AddTaskObject = ({
  addTask,
  onChangeTaskTitle,
  onChangeTaskDescription,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Task"
        onChangeText={onChangeTaskTitle}
        // textContentType="email"
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Enter Your Task Description"
        onChangeText={onChangeTaskDescription}
        // textContentType="password"
      ></TextInput>
      <Pressable onPress={addTask}>
        <Text style={styles.button}>Add Task</Text>
      </Pressable>
    </View>
  );
};

export default AddTaskObject;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "dark",
    alignItems: "center",
    justifyContent: "center",
    width:'100%'
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
  button: {
    fontSize: 25,
    backgroundColor: "lightblue",
    paddingVertical: 7,
    paddingHorizontal: 30,
    marginTop: 20,
    borderRadius: 7,
    textAlign: "center",
  },
});
