import { useFonts } from "expo-font";
import { View } from "react-native";
import { RobotoSlab_400Regular } from "@expo-google-fonts/roboto-slab";

import Home from "./sections/Home";

export default function App() {
    const [fontsLoaded] = useFonts({ RobotoSlab_400Regular });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <Home />
        </View>
    );
}
