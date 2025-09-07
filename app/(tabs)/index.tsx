import { Link } from "expo-router";
import { View } from "react-native";
import { styles } from "../../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"/notifications"}>Visit Notifications screen</Link>
      <Link href={"/profile"}>Visit Profile screen</Link>
    </View>
  );
}