import InitialLayout from '@/components/InitialLayout';
import ClearkAndConvexProvider from '@/providers/ClearkAndConvexProvider';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClearkAndConvexProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
          <InitialLayout />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClearkAndConvexProvider>
  );
}
