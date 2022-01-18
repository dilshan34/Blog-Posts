import HomeStack from "./src/navigation/HomeStack";
import { NavigationContainer } from "@react-navigation/native";
import { BlogProvider } from "./src/context/BlogContext";

export default function App() {
  return (
    <NavigationContainer>
      <BlogProvider>
        <HomeStack />
      </BlogProvider>
    </NavigationContainer>
  );
}
