import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function AIAssistantCard() {
    return (
        <LinearGradient
            colors={["#EEF6FF", "#DCEEFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            {/* Top Row */}

            <View style={styles.topRow}>

                <View style={styles.titleContainer}>

                    <Image
                        source={require("@/assets/images/dashboard/robot.png")}
                        style={styles.robot}
                    />

                    <View>

                        <Text style={styles.title}>
                            LifeRelier AI
                        </Text>

                        <Text style={styles.subtitle}>
                            Health Assistant
                        </Text>

                    </View>

                </View>

                <TouchableOpacity>

                    <MaterialCommunityIcons
                        name="dots-horizontal"
                        size={24}
                        color="#64748B"
                    />

                </TouchableOpacity>

            </View>

            {/* Message */}

            <View style={styles.messageCard}>

                <Text style={styles.message}>
                    Based on your latest report, your Vitamin D level is slightly low.
                </Text>

                <Text style={styles.message2}>
                    Spend 20 minutes in sunlight today and include Vitamin D rich foods.
                </Text>

            </View>

            {/* Bottom */}

            <View style={styles.bottomRow}>

                <TouchableOpacity
                    activeOpacity={0.9}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>
                        View Recommendations
                    </Text>

                    <MaterialCommunityIcons
                        name="arrow-right"
                        size={20}
                        color="#FFFFFF"
                    />

                </TouchableOpacity>

                <Image
                    source={require("@/assets/images/dashboard/dashboard-bg.png")}
                    style={styles.illustration}
                />

            </View>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
        marginTop: 18,

        borderRadius: 28,

        padding: 20,

        overflow: "hidden",
    },

    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    robot: {
        width: 58,
        height: 58,
        marginRight: 14,
        resizeMode: "contain",
    },

    title: {
        fontSize: 22,
        fontWeight: "800",
        color: "#071739",
    },

    subtitle: {
        marginTop: 2,
        fontSize: 15,
        color: "#64748B",
    },

    messageCard: {
        marginTop: 18,

        backgroundColor: "#FFFFFF",

        borderRadius: 18,

        padding: 16,
    },

    message: {
        fontSize: 16,
        color: "#071739",
        fontWeight: "600",
        lineHeight: 24,
    },

    message2: {
        marginTop: 10,
        color: "#64748B",
        lineHeight: 22,
        fontSize: 15,
    },

    bottomRow: {
        marginTop: 22,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    button: {
        backgroundColor: "#2563EB",

        paddingHorizontal: 18,
        height: 48,

        borderRadius: 24,

        flexDirection: "row",
        alignItems: "center",
    },

    buttonText: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 15,
        marginRight: 8,
    },

    illustration: {
        width: 110,
        height: 90,
        resizeMode: "contain",
    },

});