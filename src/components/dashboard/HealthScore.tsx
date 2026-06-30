import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

type Props = {
    score?: number;
    status?: string;
    lastUpdated?: string;
};

export default function HealthScore({
    score = 87,
    status = "Excellent",
    lastUpdated = "Updated today",
}: Props) {
    return (
        <View style={styles.container}>

            {/* Left Side */}

            <View style={styles.leftContainer}>

                <View style={styles.iconContainer}>
                    <Image
                        source={require("@/assets/images/dashboard/shield.png")}
                        style={styles.shield}
                    />
                </View>

                <View>
                    <Text style={styles.title}>
                        Health Score
                    </Text>

                    <Text style={styles.updated}>
                        {lastUpdated}
                    </Text>

                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            {status}
                        </Text>
                    </View>
                </View>

            </View>

            {/* Right Side */}

            <View style={styles.rightContainer}>

                <View style={styles.scoreCircle}>

                    <Text style={styles.score}>
                        {score}
                    </Text>

                    <Text style={styles.outOf}>
                        /100
                    </Text>

                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
        marginTop: 18,

        backgroundColor: "#FFFFFF",

        borderRadius: 28,

        paddingHorizontal: 22,
        paddingVertical: 20,

        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.08,
        shadowRadius: 20,

        elevation: 8,
    },

    leftContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },

    iconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,

        backgroundColor: "#EEF5FF",

        justifyContent: "center",
        alignItems: "center",

        marginRight: 16,
    },

    shield: {
        width: 34,
        height: 34,
        resizeMode: "contain",
    },

    title: {
        fontSize: 20,
        fontWeight: "700",
        color: "#071739",
    },

    updated: {
        marginTop: 4,
        fontSize: 14,
        color: "#64748B",
    },

    badge: {
        marginTop: 10,

        alignSelf: "flex-start",

        backgroundColor: "#DCFCE7",

        paddingHorizontal: 12,
        paddingVertical: 5,

        borderRadius: 20,
    },

    badgeText: {
        color: "#15803D",
        fontSize: 12,
        fontWeight: "700",
    },

    rightContainer: {
        alignItems: "center",
        justifyContent: "center",
    },

    scoreCircle: {
        width: 92,
        height: 92,
        borderRadius: 46,

        backgroundColor: "#F8FBFF",

        borderWidth: 5,
        borderColor: "#2563EB",

        justifyContent: "center",
        alignItems: "center",
    },

    score: {
        fontSize: 30,
        fontWeight: "800",
        color: "#2563EB",
        lineHeight: 34,
    },

    outOf: {
        fontSize: 12,
        color: "#94A3B8",
        marginTop: -2,
    },

});