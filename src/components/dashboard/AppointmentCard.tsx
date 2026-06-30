import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function AppointmentCard() {
    return (
        <View style={styles.container}>

            {/* Header */}

            <View style={styles.header}>

                <Text style={styles.heading}>
                    Upcoming Appointment
                </Text>

                <TouchableOpacity>
                    <Text style={styles.viewAll}>
                        View All
                    </Text>
                </TouchableOpacity>

            </View>

            {/* Card */}

            <View style={styles.card}>

                <Image
                    source={require("@/assets/images/dashboard/doctor.png")}
                    style={styles.doctor}
                />

                <View style={styles.info}>

                    <Text style={styles.name}>
                        Dr. Sarah Johnson
                    </Text>

                    <Text style={styles.speciality}>
                        Cardiologist
                    </Text>

                    <View style={styles.row}>

                        <MaterialCommunityIcons
                            name="calendar-month-outline"
                            size={16}
                            color="#64748B"
                        />

                        <Text style={styles.text}>
                            Tomorrow
                        </Text>

                    </View>

                    <View style={styles.row}>

                        <MaterialCommunityIcons
                            name="clock-outline"
                            size={16}
                            color="#64748B"
                        />

                        <Text style={styles.text}>
                            11:00 AM
                        </Text>

                    </View>

                </View>

                <TouchableOpacity style={styles.button}>

                    <MaterialCommunityIcons
                        name="arrow-right"
                        size={20}
                        color="#FFFFFF"
                    />

                </TouchableOpacity>

            </View>

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
        backgroundColor: "#FFFFFF",

        borderRadius: 24,

        padding: 18,

        flexDirection: "row",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.06,
        shadowRadius: 14,

        elevation: 6,
    },

    doctor: {
        width: 68,
        height: 68,
        borderRadius: 34,
    },

    info: {
        flex: 1,
        marginLeft: 16,
    },

    name: {
        fontSize: 18,
        fontWeight: "700",
        color: "#071739",
    },

    speciality: {
        marginTop: 4,
        color: "#64748B",
        fontSize: 15,
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
    },

    text: {
        marginLeft: 8,
        color: "#64748B",
        fontSize: 14,
    },

    button: {
        width: 46,
        height: 46,
        borderRadius: 23,

        backgroundColor: "#2563EB",

        justifyContent: "center",
        alignItems: "center",
    },

});