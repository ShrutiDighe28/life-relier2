import React, { useEffect, useMemo } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@/utils/themeManager";

export default function AIAssistantCard() {
    const fadeAnim = useMemo(() => new Animated.Value(0), []);
    const slideAnim = useMemo(() => new Animated.Value(20), []);
    const { colors, isDark } = useTheme();

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, { toValue: 1, duration: 600, delay: 100, useNativeDriver: true }),
            Animated.spring(slideAnim, { toValue: 0, friction: 7, delay: 100, useNativeDriver: true }),
        ]).start();
    }, [fadeAnim, slideAnim]);

    return (
        <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
            <LinearGradient colors={isDark ? [colors.card, colors.card] : ["#F0F7FF", "#E0F0FF"]} style={[styles.container, isDark && { borderColor: colors.cardBorder, borderWidth: 1 }]}>
                <View style={styles.contentRow}>
                    <View style={styles.robotContainer}>
                        <Image source={require("@/assets/images/dashboard/robot.png")} style={styles.robot} />
                    </View>

                    <View style={styles.chatSection}>
                        <View style={styles.headerRow}>
                            <MaterialCommunityIcons name="creation" size={16} color="#2563EB" />
                            <Text style={styles.aiTitle}>LifeRelier AI Assistant</Text>
                            <View style={{ flex: 1 }} />
                            <TouchableOpacity onPress={() => console.log("AI Options Menu")}>
                                <MaterialCommunityIcons name="dots-horizontal" size={20} color={colors.textSecondary} />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.chatBubble, { backgroundColor: colors.background }]}>
                            <Text style={[styles.chatText, { color: colors.text }]}>
                                Your <Text style={styles.highlightText}>Vitamin D</Text> level is low for <Text style={styles.highlightText}>3 months</Text>.
                            </Text>
                            <Text style={[styles.chatSubText, { color: colors.textSecondary }]}>Would you like diet recommendations?</Text>
                        </View>

                        <TouchableOpacity
                            activeOpacity={0.9}
                            style={styles.button}
                            onPress={() => console.log("Navigate to Recommendations")}
                        >
                            <Text style={styles.buttonText}>View Recommendations</Text>
                            <MaterialCommunityIcons name="arrow-right" size={18} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 18,
        borderRadius: 24,
        padding: 16,
        elevation: 2,
        shadowColor: "#2563EB",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
    },
    contentRow: { flexDirection: "row" },
    robotContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 10,
        paddingBottom: 10,
    },
    robot: {
        width: 100,
        height: 120,
        resizeMode: "contain",
    },
    chatSection: {
        flex: 1,
        justifyContent: "space-between",
    },
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    aiTitle: {
        fontSize: 14,
        fontWeight: "700",
        color: "#2563EB",
        marginLeft: 6,
    },
    chatBubble: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        borderTopLeftRadius: 4,
        padding: 14,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 1,
    },
    chatText: {
        fontSize: 14,
        color: "#334155",
        fontWeight: "500",
        lineHeight: 22,
    },
    highlightText: { color: "#EF4444", fontWeight: "700" },
    chatSubText: { marginTop: 8, fontSize: 13, color: "#64748B" },
    button: {
        backgroundColor: "#1D4ED8",
        alignSelf: "flex-start",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    buttonText: { color: "#FFFFFF", fontWeight: "600", fontSize: 13, marginRight: 6 },
});