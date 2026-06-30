import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";

export default function EmergencyBanner() {
    return (
        <LinearGradient
            colors={["#2563EB", "#1D4ED8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >

            {/* Left */}

            <View style={styles.left}>

                <View style={styles.iconCircle}>
                    <MaterialCommunityIcons
                        name="medical-bag"
                        size={34}
                        color="#2563EB"
                    />
                </View>

                <View style={styles.info}>

                    <Text style={styles.title}>
                        Emergency Health Card
                    </Text>

                    <Text style={styles.subtitle}>
                        Blood Group: O+
                    </Text>

                    <Text style={styles.subtitle}>
                        Allergies: None
                    </Text>

                    <Text style={styles.subtitle}>
                        Emergency Contact
                    </Text>

                </View>

            </View>

            {/* Right */}

            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.button}
            >
                <MaterialCommunityIcons
                    name="qrcode"
                    size={22}
                    color="#2563EB"
                />

                <Text style={styles.buttonText}>
                    View ID
                </Text>
            </TouchableOpacity>

        </LinearGradient>
    );
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
        marginTop: 26,
        marginBottom: 40,

        borderRadius: 28,

        padding: 22,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    left: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },

    iconCircle: {
        width: 64,
        height: 64,
        borderRadius: 32,

        backgroundColor: "#FFFFFF",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 16,
    },

    info: {
        flex: 1,
    },

    title: {
        color: "#FFFFFF",
        fontSize: 19,
        fontWeight: "700",
    },

    subtitle: {
        marginTop: 5,
        color: "#DBEAFE",
        fontSize: 14,
    },

    button: {
        backgroundColor: "#FFFFFF",

        borderRadius: 20,

        paddingHorizontal: 18,
        paddingVertical: 12,

        alignItems: "center",
        justifyContent: "center",
    },

    buttonText: {
        marginTop: 6,
        color: "#2563EB",
        fontWeight: "700",
        fontSize: 13,
    },

});