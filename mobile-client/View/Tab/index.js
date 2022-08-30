import { Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "../Menu";
import { View } from "react-native";
import ProfileScreen from "../Profile";

const Tab = createBottomTabNavigator();


function RankingScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Ranking!</Text>
        </View>
    );
}

export default function Tabs({ navigation }) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Menu}
                options={{
                    tabBarLabel: "Início",
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Image source={require("../../assets/home-icon.png")} style={
                                {
                                    height: 24,
                                    width: 'auto',
                                    tintColor: color,
                                    resizeMode: 'contain',
                                }

                            } />
                            <Text style={{ color: color }}>Início</Text>
                        </View>
                    ),

                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#fe5868",
                    tabBarInactiveTintColor: "rgba(246, 110, 184, 0.8)",


                }}
            />
            <Tab.Screen name="Ranking" component={RankingScreen}
                options={{
                    tabBarLabel: "Ranking",
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Image source={require("../../assets/star.png")} style={
                                {
                                    height: 24,
                                    width: 'auto',
                                    tintColor: color,
                                    resizeMode: 'contain',
                                }

                            } />
                            <Text style={{ color: color }}>Ranking</Text>
                        </View>
                    ),
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#fe5868",
                    tabBarInactiveTintColor: "rgba(246, 110, 184, 0.8)",
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={ProfileScreen}
                initialParams={
                    {
                        user: {
                            name: "Ingrid Bittencourt",
                            bio: "magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum",
                            email: "ingridinha@gmail.com",
                        }
                    }
                }
                options={{
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ color }) => (
                        <View>
                            <Image source={require("../../assets/user-icon.png")} style={
                                {
                                    height: 24,
                                    width: 'auto',
                                    tintColor: color,
                                    resizeMode: 'contain',
                                }

                            } />
                            <Text style={{ color: color }}>Perfil</Text>
                        </View>
                    ),
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: "#fe5868",
                    tabBarInactiveTintColor: "rgba(246, 110, 184, 0.8)",
                }}
            />
        </Tab.Navigator>
    );
}