import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@/constants/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        IbmPlexBold: require("../assets/fonts/IBMPlexSans-Bold.ttf"),
        IbmPlexRegular: require("../assets/fonts/IBMPlexSans-Regular.ttf"),
        IbmPlexMedium: require("../assets/fonts/IBMPlexSans-Medium.ttf"),
        RobotoBold: require("../assets/fonts/Roboto-Bold.ttf"),
        RobotoMedium: require("../assets/fonts/Roboto-Medium.ttf"),
        RobotoRegular: require("../assets/fonts/Roboto-Regular.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider value={DefaultTheme}>
                <StatusBar style="dark" backgroundColor={colors.white} />
                <SafeAreaView className="flex-1">
                    <Stack
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="(tabs)" />
                        <Stack.Screen name="(auth)" />
                        <Stack.Screen name="index" />
                    </Stack>
                </SafeAreaView>
            </ThemeProvider>
        </GestureHandlerRootView>
    );
}
