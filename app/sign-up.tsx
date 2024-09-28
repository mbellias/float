import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1); // State to track the current step of the form
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    username: '',
    password: '',
    confirmPassword: '',
    bankAccountNumber: '',
    bankRoutingNumber: '',
    socialSecurity: '',
    driversLicense: '',
  });

  // Handler to update the input values
  const handleInputChange = (name: string, value: string) => {
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <View style={styles.container}>
      {currentStep === 1 && (
        <View>
          <ThemedText
            type='title'
            style={{ margin: 8, textAlign: 'center' }}
          >
            Sign up
          </ThemedText>
          <Text>First Name:</Text>
          <TextInput
            style={styles.input}
            value={inputs.firstName}
            onChangeText={(text) => handleInputChange('firstName', text)}
          />
          <Text>Last Name:</Text>
          <TextInput
            style={styles.input}
            value={inputs.lastName}
            onChangeText={(text) => handleInputChange('lastName', text)}
          />
          <Text>Email:</Text>
          <TextInput
            style={styles.input}
            value={inputs.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
          <Text>Phone Number:</Text>
          <TextInput
            style={styles.input}
            value={inputs.phoneNumber}
            onChangeText={(text) => handleInputChange('phoneNumber', text)}
          />
          <Button
            title='Next'
            onPress={() => setCurrentStep(2)}
          />
        </View>
      )}

      {currentStep === 2 && (
        <View>
          <Text>Username:</Text>
          <TextInput
            style={styles.input}
            value={inputs.username}
            onChangeText={(text) => handleInputChange('username', text)}
          />
          <Text>Password:</Text>
          <TextInput
            style={styles.input}
            value={inputs.password}
            onChangeText={(text) => handleInputChange('password', text)}
            secureTextEntry
          />
          <Text>Confirm Password:</Text>
          <TextInput
            style={styles.input}
            value={inputs.confirmPassword}
            onChangeText={(text) => handleInputChange('confirmPassword', text)}
            secureTextEntry
          />
          <Button
            title='Next'
            onPress={() => setCurrentStep(3)}
          />
        </View>
      )}

      {currentStep === 3 && (
        <View>
          <Text>Bank Account Number:</Text>
          <TextInput
            style={styles.input}
            value={inputs.bankAccountNumber}
            onChangeText={(text) =>
              handleInputChange('bankAccountNumber', text)
            }
            secureTextEntry
          />
          <Text>Bank Routing Number:</Text>
          <TextInput
            style={styles.input}
            value={inputs.bankRoutingNumber}
            onChangeText={(text) =>
              handleInputChange('bankRoutingNumber', text)
            }
            secureTextEntry
          />
          <Text>Drivers License Number:</Text>
          <TextInput
            style={styles.input}
            value={inputs.driversLicense}
            onChangeText={(text) => handleInputChange('driversLicense', text)}
            secureTextEntry
          />
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Or</Text>
          <Text>Social Security Number:</Text>
          <TextInput
            style={styles.input}
            value={inputs.socialSecurity}
            onChangeText={(text) => handleInputChange('socialSecurity', text)}
            secureTextEntry
          />
          <Button
            title='Submit'
            onPress={() => console.log('Form Submitted', inputs)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    margin: 8,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
