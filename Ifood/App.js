import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <View style={styles.container}> 
      <Image style={styles.image} source={require("./assets/ifood-43.png")} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Usuário"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Senha"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}

        /> 
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Esqueceu a senha?</Text> 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Entrar</Text> 
      </TouchableOpacity>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    borderWidth: 0.5,
    width: "60%",
    height: 45,
    marginBottom: 30,
    alignItems: "center",
  },
  image: {
    width:250,
    height: 100, 
    resizeMode: "contain", 
    margin: 20
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 3,
    height: 40,
    alignItems: "center",
    marginTop: 10, 
    backgroundColor: "#ff2800",
  },
});