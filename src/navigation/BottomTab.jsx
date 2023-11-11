import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { Homepage, LearningLesson, ProfilePage } from '../screens'
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { COLORS } from '../themes/themes';
const Tab = createBottomTabNavigator();


const BottomTab = () => {

    return (
        <Tab.Navigator >
            <Tab.Screen
                name="Home"
                component={Homepage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <FontAwesome name='home' color={COLORS.Blue} size={32} />,
                    tabBarShowLabel: false
                }}
            />
            <Tab.Screen
                name="LearningTab"
                component={LearningLesson}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => <FontAwesome name='book' color={COLORS.Yellow1} size={32} />,
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfilePage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => <FontAwesome name='user' color={COLORS.PinkRGBA75} size={32} />,
                    tabBarShowLabel: false,
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;
