import { Image, Text, View } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Image
        source={{uri: "https://images.unsplash.com/photo-1756990637536-714b76296a30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D"}}
        style={{
          width: 200,
          height: 200
        }}
      />
    </View>
  );
}