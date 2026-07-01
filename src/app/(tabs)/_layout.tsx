import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#2563EB", // Blue text for active tab
                tabBarInactiveTintColor: "#94A3B8", // Gray/slate text for inactive tab
                tabBarLabelStyle: {
                    fontSize: 10,
                    fontWeight: "600",
                    marginTop: 4,
                },
                tabBarStyle: {
                    height: 74,
                    paddingBottom: 12,
                    paddingTop: 8,
                    borderTopWidth: 1,
                    borderTopColor: "#F1F5F9",
                    backgroundColor: "#FFFFFF",
                    elevation: 12,
                    shadowColor: "#0F172A",
                    shadowOffset: { width: 0, height: -4 },
                    shadowOpacity: 0.04,
                    shadowRadius: 8,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.tabIconWrapper, focused && styles.tabIconWrapperActive]}>
                            <MaterialCommunityIcons
                                name={focused ? "home" : "home-outline"}
                                size={22}
                                color={focused ? "#2563EB" : color}
                            />
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="reports"
                options={{
                    title: "Reports",
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.tabIconWrapper, focused && styles.tabIconWrapperActive]}>
                            <MaterialCommunityIcons
                                name={focused ? "file-document" : "file-document-outline"}
                                size={22}
                                color={focused ? "#2563EB" : color}
                            />
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="aihub"
                options={{
                    title: "AI Hub",
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.tabIconWrapper, focused && styles.tabIconWrapperActive]}>
                            <MaterialCommunityIcons
                                name="brain"
                                size={22}
                                color={focused ? "#2563EB" : color}
                            />
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="appointments"
                options={{
                    title: "Appointments",
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.tabIconWrapper, focused && styles.tabIconWrapperActive]}>
                            <MaterialCommunityIcons
                                name={focused ? "calendar-month" : "calendar-month-outline"}
                                size={22}
                                color={focused ? "#2563EB" : color}
                            />
                        </View>
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, focused }) => (
                        <View style={[styles.tabIconWrapper, focused && styles.tabIconWrapperActive]}>
                            <MaterialCommunityIcons
                                name={focused ? "account" : "account-outline"}
                                size={22}
                                color={focused ? "#2563EB" : color}
                            />
                        </View>
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabIconWrapper: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        width: 50,
        height: 28,
    },
    tabIconWrapperActive: {
        backgroundColor: "#EFF6FF", // Light blue capsule background for the active tab icon as shown in mockup
    },
});