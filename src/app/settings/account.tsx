import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput,
    ActivityIndicator,
    Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function AccountSettingsScreen() {
    const router = useRouter();

    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("john.doe@email.com");
    const [phone, setPhone] = useState("+1 987 654 3210");
    const [age, setAge] = useState("32");
    const [height, setHeight] = useState("5'10\"");
    const [weight, setWeight] = useState("72 kg");
    const [saving, setSaving] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaving(true);
        setTimeout(() => {
            setSaving(false);
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        }, 1200);
    };

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBtn} onPress={() => router.back()}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#071739" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Account Settings</Text>
                <View style={{ width: 38 }} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Profile Photo Upload block */}
                <View style={styles.photoUploadBlock}>
                    <View style={styles.avatarWrapper}>
                        <Image
                            source={require("@/assets/images/dashboard/profile.png")}
                            style={styles.avatarImage}
                        />
                        <TouchableOpacity style={styles.editPhotoBadge}>
                            <MaterialCommunityIcons name="camera" size={14} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.uploadText}>Change Profile Image</Text>
                </View>

                {/* Form fields */}
                <View style={styles.formCard}>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>Full Name</Text>
                        <TextInput
                            style={styles.textInput}
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>Email Address</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType="email-address"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputLabel}>Phone Number</Text>
                        <TextInput
                            style={styles.textInput}
                            keyboardType="phone-pad"
                            value={phone}
                            onChangeText={setPhone}
                        />
                    </View>

                    <View style={styles.gridRow}>
                        <View style={[styles.inputWrapper, { flex: 1, marginRight: 8 }]}>
                            <Text style={styles.inputLabel}>Age</Text>
                            <TextInput
                                style={styles.textInput}
                                keyboardType="numeric"
                                value={age}
                                onChangeText={setAge}
                            />
                        </View>

                        <View style={[styles.inputWrapper, { flex: 1, marginHorizontal: 4 }]}>
                            <Text style={styles.inputLabel}>Height</Text>
                            <TextInput
                                style={styles.textInput}
                                value={height}
                                onChangeText={setHeight}
                            />
                        </View>

                        <View style={[styles.inputWrapper, { flex: 1, marginLeft: 8 }]}>
                            <Text style={styles.inputLabel}>Weight</Text>
                            <TextInput
                                style={styles.textInput}
                                value={weight}
                                onChangeText={setWeight}
                            />
                        </View>
                    </View>

                    {/* Submit Button */}
                    <TouchableOpacity style={styles.saveBtn} onPress={handleSave} disabled={saving}>
                        {saving ? (
                            <ActivityIndicator size="small" color="#FFFFFF" />
                        ) : (
                            <Text style={styles.saveBtnText}>Save Account Changes</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* Toast success indicator */}
            {saved && (
                <View style={styles.toast}>
                    <MaterialCommunityIcons name="check-circle" size={18} color="#FFFFFF" />
                    <Text style={styles.toastText}>Account details updated successfully!</Text>
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
    photoUploadBlock: {
        alignItems: "center",
        marginVertical: 24,
    },
    avatarWrapper: {
        position: "relative",
    },
    avatarImage: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    editPhotoBadge: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#2563EB",
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#FFFFFF",
    },
    uploadText: {
        fontSize: 12,
        color: "#2563EB",
        fontWeight: "700",
        marginTop: 10,
    },
    formCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 24,
        padding: 20,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },
    inputWrapper: {
        marginBottom: 16,
    },
    inputLabel: {
        fontSize: 12,
        fontWeight: "600",
        color: "#64748B",
        marginBottom: 6,
    },
    textInput: {
        borderWidth: 1.5,
        borderColor: "#E2E8F0",
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 10,
        fontSize: 14,
        color: "#334155",
        backgroundColor: "#F8FAFC",
    },
    gridRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    saveBtn: {
        backgroundColor: "#2563EB",
        paddingVertical: 14,
        borderRadius: 14,
        alignItems: "center",
        marginTop: 14,
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
