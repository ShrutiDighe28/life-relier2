import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

const insights = [
    {
        id: 1,
        title: "Heart Rate",
        value: "72 bpm",
        icon: require("@/assets/images/dashboard/heart.png"),
        color: "#FEE2E2",
    },
    {
        id: 2,
        title: "Sleep",
        value: "7h 45m",
        icon: require("@/assets/images/dashboard/sleep.png"),
        color: "#E0F2FE",
    },
    {
        id: 3,
        title: "Steps",
        value: "8,452",
        icon: require("@/assets/images/dashboard/steps.png"),
        color: "#DCFCE7",
    },
    {
        id: 4,
        title: "Water",
        value: "2.3 L",
        icon: require("@/assets/images/dashboard/water.png"),
        color: "#DBEAFE",
    },
];

export default function HealthInsights() {
    return (
        <View style={styles.container}>

            <Text style={styles.heading}>
                Today's Health Insights
            </Text>

            <View style={styles.grid}>

                {insights.map((item) => (

                    <View
                        key={item.id}
                        style={styles.card}
                    >

                        <View
                            style={[
                                styles.iconContainer,
                                {
                                    backgroundColor: item.color,
                                },
                            ]}
                        >

                            <Image
                                source={item.icon}
                                style={styles.icon}
                            />

                        </View>

                        <Text style={styles.value}>
                            {item.value}
                        </Text>

                        <Text style={styles.title}>
                            {item.title}
                        </Text>

                    </View>

                ))}

            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
        marginTop: 28,
    },

    heading: {
        fontSize: 22,
        fontWeight: "700",
        color: "#071739",
        marginBottom: 18,
    },

    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },

    card: {
        width: "48%",

        backgroundColor: "#FFFFFF",

        borderRadius: 24,

        paddingVertical: 22,

        marginBottom: 16,

        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.05,
        shadowRadius: 12,

        elevation: 5,
    },

    iconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,

        justifyContent: "center",
        alignItems: "center",
    },

    icon: {
        width: 32,
        height: 32,
        resizeMode: "contain",
    },

    value: {
        marginTop: 16,
        fontSize: 24,
        fontWeight: "800",
        color: "#071739",
    },

    title: {
        marginTop: 6,
        color: "#64748B",
        fontSize: 15,
    },

});