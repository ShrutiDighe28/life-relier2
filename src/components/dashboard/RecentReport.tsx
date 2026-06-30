import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const reports = [
    {
        id: 1,
        title: "Complete Blood Count",
        date: "18 Jun 2026",
        status: "Normal",
        icon: require("@/assets/images/dashboard/report.png"),
    },
    {
        id: 2,
        title: "Lipid Profile",
        date: "12 Jun 2026",
        status: "Review",
        icon: require("@/assets/images/dashboard/report.png"),
    },
];

export default function RecentReportCard() {
    return (
        <View style={styles.container}>

            {/* Header */}

            <View style={styles.header}>

                <Text style={styles.heading}>
                    Recent Reports
                </Text>

                <TouchableOpacity>
                    <Text style={styles.viewAll}>
                        View All
                    </Text>
                </TouchableOpacity>

            </View>

            {reports.map((item) => (

                <TouchableOpacity
                    key={item.id}
                    activeOpacity={0.9}
                    style={styles.card}
                >

                    <Image
                        source={item.icon}
                        style={styles.icon}
                    />

                    <View style={styles.content}>

                        <Text style={styles.title}>
                            {item.title}
                        </Text>

                        <Text style={styles.date}>
                            {item.date}
                        </Text>

                    </View>

                    <View
                        style={[
                            styles.status,
                            {
                                backgroundColor:
                                    item.status === "Normal"
                                        ? "#DCFCE7"
                                        : "#FEF3C7",
                            },
                        ]}
                    >

                        <Text
                            style={[
                                styles.statusText,
                                {
                                    color:
                                        item.status === "Normal"
                                            ? "#15803D"
                                            : "#B45309",
                                },
                            ]}
                        >
                            {item.status}
                        </Text>

                    </View>

                    <MaterialCommunityIcons
                        name="chevron-right"
                        size={24}
                        color="#94A3B8"
                    />

                </TouchableOpacity>

            ))}

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginHorizontal: 20,
        marginTop: 24,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        marginBottom: 14,
    },

    heading: {
        fontSize: 22,
        fontWeight: "700",
        color: "#071739",
    },

    viewAll: {
        color: "#2563EB",
        fontWeight: "600",
    },

    card: {
        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "#FFFFFF",

        borderRadius: 22,

        padding: 16,

        marginBottom: 14,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.06,
        shadowRadius: 12,

        elevation: 6,
    },

    icon: {
        width: 52,
        height: 52,
        resizeMode: "contain",
        marginRight: 14,
    },

    content: {
        flex: 1,
    },

    title: {
        fontSize: 17,
        fontWeight: "700",
        color: "#071739",
    },

    date: {
        marginTop: 5,
        color: "#64748B",
        fontSize: 14,
    },

    status: {
        paddingHorizontal: 12,
        paddingVertical: 6,

        borderRadius: 18,

        marginRight: 10,
    },

    statusText: {
        fontWeight: "700",
        fontSize: 12,
    },

});