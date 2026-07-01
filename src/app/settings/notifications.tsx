import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Switch,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function NotificationsSettingsScreen() {
    const router = useRouter();

    const [meds, setMeds] = useState(true);
    const [appt, setAppt] = useState(true);
    const [env, setEnv] = useState(false);
    const [diet, setDiet] = useState(true);
    const [newsletter, setNewsletter] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBtn} onPress={() => router.back()}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#071739" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Notifications</Text>
                <View style={{ width: 38 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                <Text style={styles.sectionHeading}>Notification Preferences</Text>
                
                <View style={styles.card}>
                    {/* Prescription Reminders */}
                    <View style={styles.switchRow}>
                        <View style={styles.rowMeta}>
                            <Text style={styles.rowLabel}>Prescription Reminders</Text>
                            <Text style={styles.rowDesc}>Receive dosage alarms for Metformin, Atorvastatin, etc.</Text>
                        </View>
                        <Switch
                            value={meds}
                            onValueChange={setMeds}
                            trackColor={{ false: "#E2E8F0", true: "#93C5FD" }}
                            thumbColor={meds ? "#2563EB" : "#94A3B8"}
                        />
                    </View>

                    {/* Appointment alerts */}
                    <View style={styles.switchRow}>
                        <View style={styles.rowMeta}>
                            <Text style={styles.rowLabel}>Appointment Alerts</Text>
                            <Text style={styles.rowDesc}>Get push alerts 24 hours prior to scheduled physician visits.</Text>
                        </View>
                        <Switch
                            value={appt}
                            onValueChange={setAppt}
                            trackColor={{ false: "#E2E8F0", true: "#93C5FD" }}
                            thumbColor={appt ? "#2563EB" : "#94A3B8"}
                        />
                    </View>

                    {/* Env Tracker */}
                    <View style={styles.switchRow}>
                        <View style={styles.rowMeta}>
                            <Text style={styles.rowLabel}>Weekly Environmental Reports</Text>
                            <Text style={styles.rowDesc}>Receive updates on pollen counts, UV intensity and local AQI.</Text>
                        </View>
                        <Switch
                            value={env}
                            onValueChange={setEnv}
                            trackColor={{ false: "#E2E8F0", true: "#93C5FD" }}
                            thumbColor={env ? "#2563EB" : "#94A3B8"}
                        />
                    </View>

                    {/* Dietary alerts */}
                    <View style={styles.switchRow}>
                        <View style={styles.rowMeta}>
                            <Text style={styles.rowLabel}>Dietary Danger Warnings</Text>
                            <Text style={styles.rowDesc}>Alert immediately if barcode scans fail allergen profiles check.</Text>
                        </View>
                        <Switch
                            value={diet}
                            onValueChange={setDiet}
                            trackColor={{ false: "#E2E8F0", true: "#93C5FD" }}
                            thumbColor={diet ? "#2563EB" : "#94A3B8"}
                        />
                    </View>

                    {/* Newsletter */}
                    <View style={[styles.switchRow, { borderBottomWidth: 0 }]}>
                        <View style={styles.rowMeta}>
                            <Text style={styles.rowLabel}>Wellness Newsletters</Text>
                            <Text style={styles.rowDesc}>Get custom medical recommendations tailored to your reports.</Text>
                        </View>
                        <Switch
                            value={newsletter}
                            onValueChange={setNewsletter}
                            trackColor={{ false: "#E2E8F0", true: "#93C5FD" }}
                            thumbColor={newsletter ? "#2563EB" : "#94A3B8"}
                        />
                    </View>
                </View>

                {/* Confirm Btn */}
                <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                    <Text style={styles.saveBtnText}>Save Notification Preferences</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Toast success */}
            {saved && (
                <View style={styles.toast}>
                    <MaterialCommunityIcons name="check-circle" size={18} color="#FFFFFF" />
                    <Text style={styles.toastText}>Preferences saved successfully!</Text>
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8FAFC",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        height: 60,
        backgroundColor: "#FFFFFF",
        borderBottomWidth: 1,
        borderBottomColor: "#F1F5F9",
    },
    headerBtn: {
        width: 38,
        height: 38,
        justifyContent: "center",
        alignItems: "center",
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#071739",
    },
    scrollContent: {
        paddingBottom: 40,
        paddingHorizontal: 20,
    },
    sectionHeading: {
        fontSize: 13,
        fontWeight: "700",
        color: "#0F172A",
        marginTop: 24,
        marginBottom: 10,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        borderWidth: 1,
        borderColor: "#E2E8F0",
        paddingHorizontal: 16,
        paddingVertical: 6,
    },
    switchRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#F1F5F9",
    },
    rowMeta: {
        flex: 1,
        paddingRight: 16,
    },
    rowLabel: {
        fontSize: 13,
        fontWeight: "700",
        color: "#334155",
    },
    rowDesc: {
        fontSize: 10,
        color: "#64748B",
        marginTop: 2,
        lineHeight: 14,
    },
    saveBtn: {
        backgroundColor: "#2563EB",
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 24,
    },
    saveBtnText: {
        color: "#FFFFFF",
        fontWeight: "700",
        fontSize: 14,
    },
    toast: {
        position: "absolute",
        bottom: 40,
        left: 20,
        right: 20,
        backgroundColor: "#10B981",
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    toastText: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "600",
        marginLeft: 8,
        flex: 1,
    },
});
