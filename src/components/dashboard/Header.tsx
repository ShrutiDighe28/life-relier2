import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Header() {
    return (
        <>
            <View style={styles.header}>
                <Image
                    source={require("@/assets/images/life_relier_logo.png")}
                    style={styles.logo}
                />

                <View style={styles.rightContainer}>
                    <TouchableOpacity style={styles.notification}>
                        <MaterialCommunityIcons
                            name="bell-outline"
                            size={28}
                            color="#071739"
                        />

                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>3</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.8}>
                        <Image
                            source={require("@/assets/images/dashboard/profile.png")}
                            style={styles.profile}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.divider} />
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingHorizontal: 20,
        paddingTop: 10,
    },

    logo: {
        width: 180,
        height: 48,
        resizeMode: "contain",
    },

    rightContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    notification: {
        marginRight: 18,
    },

    badge: {
        position: "absolute",
        top: -4,
        right: -4,

        width: 18,
        height: 18,
        borderRadius: 9,

        backgroundColor: "#EF4444",

        justifyContent: "center",
        alignItems: "center",
    },

    badgeText: {
        color: "#FFFFFF",
        fontSize: 11,
        fontWeight: "700",
    },

    profile: {
        width: 52,
        height: 52,
        borderRadius: 26,
    },

    divider: {
        marginTop: 16,
        height: 1,
        backgroundColor: "#E2E8F0",
    },
});