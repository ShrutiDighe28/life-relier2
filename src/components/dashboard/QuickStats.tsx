import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

const stats = [
    {
        id: 1,
        title: "Reports",
        value: "24",
        icon: require("@/assets/images/dashboard/reports.png"),
        color: "#EEF4FF",
    },
    {
        id: 2,
        title: "Appointments",
        value: "3",
        icon: require("@/assets/images/dashboard/appointment.png"),
        color: "#FFF4E8",
    },
    {
        id: 3,
        title: "Medicine",
        value: "8",
        icon: require("@/assets/images/dashboard/medicine.png"),
        color: "#ECFDF5",
    },
    {
        id: 4,
        title: "Alerts",
        value: "2",
        icon: require("@/assets/images/dashboard/alert.png"),
        color: "#FEF2F2",
    },
];

export default function QuickStats() {
    return (
        <View style={styles.container}>
            {stats.map((item) => (
                <View key={item.id} style={styles.card}>

                    <View
                        style={[
                            styles.iconContainer,
                            { backgroundColor: item.color },
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
    );
}

const styles = StyleSheet.create({

    container: {
        marginTop: 22,
        marginHorizontal: 20,

        flexDirection: "row",
        justifyContent: "space-between",
    },

    card: {
        width: "23%",

        backgroundColor: "#FFFFFF",

        borderRadius: 22,

        paddingVertical: 18,

        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.06,
        shadowRadius: 12,

        elevation: 6,
    },

    iconContainer: {
        width: 54,
        height: 54,
        borderRadius: 27,

        justifyContent: "center",
        alignItems: "center",
    },

    icon: {
        width: 28,
        height: 28,
        resizeMode: "contain",
    },

    value: {
        marginTop: 14,
        fontSize: 22,
        fontWeight: "800",
        color: "#071739",
    },

    title: {
        marginTop: 4,
        fontSize: 13,
        color: "#64748B",
        textAlign: "center",
    },

});