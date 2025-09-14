import { StatusBar, useColorScheme, useWindowDimensions, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { styles } from './config/theme/app-theme';

export const App = () => {

    return (
        <SafeAreaProvider>
            <MainContent />
        </SafeAreaProvider>
    );
}


const MainContent = () => {
    const insets = useSafeAreaInsets();
    // const isDarkMode = useColorScheme() === 'dark';
    // const { height, width } = useWindowDimensions();
    // console.log({ height, width })

    return (
        <View style={[
            styles.background,
            {
                flex: 1,
                // Aplica los márgenes seguros como un padding
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
            }
        ]}>
            <StatusBar barStyle={'light-content'} />
            {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
            <CalculatorScreen />
        </View>
    );
}