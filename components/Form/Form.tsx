import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {style} from './Form.style'; // Ensure you're using named import

export default function Form() {
  /* {make states} */
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');

  const [disply, setDisply] = useState(false);

const handleShow=(params) => {
  setDisply(true);
}

const handleClear=(params) => {
    setDisply(false);
    setname('');
    setpassword('');
    setemail('');
  }
  


  return (
    <View>
      {/* Header*/}
      <Text style={style.header}>Form Component</Text>

      {/* name fields */}
      <TextInput
        style={style.form_input}
        value={name}
        onChangeText={text => setname(text)}
        placeholder=" Enter your name"
      />
      {/* password fields */}
      {/* secureTextEntry */}
      <TextInput
        secureTextEntry={true}
        value={password}
        onChangeText={text => setpassword(text)}
        style={style.form_input}
        placeholder=" Enter your password"
         
      />
      {/* email fields */}
      <TextInput
        style={style.form_input}
        value={email}
        keyboardType="decimal-pad"  // This is equivalent to `type="email"` in HTML
              // Prevents auto-capitalization of the email
        onChangeText={text => setemail(text)}
        placeholder=" Enter your email"
      />

      {/* Buttons */}
      <View style={{marginBottom:20}}>
        <Button title="Show Text" onPress={handleShow}></Button>
      </View>

      <Button title="Clear text" onPress={handleClear} ></Button>

      {/* Text */}
      <View >
        {disply ? (
          <View >
            <Text style={style.text}>{name}</Text>
            <Text style={style.text}>{password}</Text>
            <Text style={style.text}>{email}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}
