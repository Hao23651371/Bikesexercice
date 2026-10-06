import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

interface WelcomeScreenProps {
  onGetStarted?: () => void;
}

export default function WelcomeScreen({
  onGetStarted,
}: WelcomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        A premium online store for sporter and their stylish choice
      </Text>

      <Image
        source={{
          uri: "https://res.cloudinary.com/dxk6xlsre/image/upload/v1791266857/anhxedap1_yjeb01.png",
        }}
        style={styles.image}
      />

      <Text style={styles.title}>
        POWER BIKE{"\n"}SHOP
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={onGetStarted}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  description: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  image: {
    width: 330,
    height: 350,
    resizeMode: "contain",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 25,
  },

  button: {
    width: "90%",
    backgroundColor: "red",
    padding: 16,
    borderRadius: 30,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
