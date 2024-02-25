import React from 'react';
import { SafeAreaView, View, Image, TextInput, StyleSheet, TouchableOpacity, Text, ScrollView, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();

  const goToSignup = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>WELCOME</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/500' }} // Replace 'https://via.placeholder.com/500' with your image link
              style={styles.image}
            />
          </View>
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
              <TextInput
                style={[styles.input, styles.emailInput]}
                placeholder="Email"
                placeholderTextColor="black"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <MaterialIcons name="lock" size={24} color="black" style={styles.icon} />
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Password"
                placeholderTextColor="black"
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToSignup}>
              <Text style={styles.signupText}>Already a member? Login here.</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#031830',
    padding: 10,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    alignSelf: 'center',
    marginTop: 0,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 350,
    height: 200,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 16,
  },
  emailInput: {
    height: 50,
  },
  passwordInput: {
    height: 50,
  },
  loginButton: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20, // Adding horizontal padding
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 15,
    color: 'red',
    width:'40%',
    alignSelf:'center'
  },
  
  
  buttonText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#031830',
  },
  signupText: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginTop:10
  },
});

export default SignupScreen;
