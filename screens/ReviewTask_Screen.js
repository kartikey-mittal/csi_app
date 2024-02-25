import React from 'react';
import { SafeAreaView, View, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';

const ReviewTask_Screen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Assign Task</Text>
        <View style={styles.formContainer}>
          <Text style={styles.label}>To</Text>
          <TextInput
            style={[styles.input, styles.textInput]}
            placeholder="Enter recipient"
            placeholderTextColor="black"
          />

          <Text style={styles.label}>Subject</Text>
          <TextInput
            style={[styles.input, styles.textInput]}
            placeholder="Enter subject"
            placeholderTextColor="black"
          />

          <Text style={styles.label}>Task Updates</Text>
          <TextInput
          style={[styles.input, styles.textInput, styles.composeInput]}
          placeholder="Compose a message"
          placeholderTextColor="black"
          multiline={true}
        />
        </View>
        
        <Button
          title="Send"
          buttonStyle={styles.sendButton}
          titleStyle={styles.sendButtonText} // Set text color of button
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#031830'
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 5,
    fontWeight:800,
    color:'white'
  },
  formContainer: {
    marginBottom: 20,
    marginTop:20
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    color:'white',
    fontWeight:500
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10, // Rounded corners
    padding: 10,
    marginBottom: 20,
    backgroundColor: 'white', // Background color white
  },
  textInput: {
    color: 'black', // Text color black
    fontSize:15
  },
  multilineInput: {
    height: 100,
  },
  composeInput: {
    height: 150,
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: 'white',
    borderRadius: 50, // Rounded button
    paddingHorizontal: 20, // Horizontal padding
    width: 'auto', // Adjust width automatically based on text
    fontSize:20,
    fontWeight:800
  },
  sendButtonText: {
    color: '#031830', // Text color blue
    fontWeight:500,
    fontSize:20
  },
});

export default ReviewTask_Screen;
