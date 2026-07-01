import React, { useMemo, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { mockReports, ReportParameter } from "@/utils/mockReportsData";

const { width } = Dimensions.get("window");

export default function ReportDetailsScreen() {
    const router = useRouter();
    const { id } = useLocalSearchParams();

    const [isDownloading, setIsDownloading] = useState(false);
    const [downloaded, setDownloaded] = useState(false);

    // Find the report
    const report = useMemo(() => {
        return mockReports.find((r) => r.id === id) || mockReports[0];
    }, [id]);

    if (!report) {
        return (
            <SafeAreaView style={styles.errorContainer}>
                <MaterialCommunityIcons name="alert-circle-outline" size={64} color="#EF4444" />
                <Text style={styles.errorText}>Report not found</Text>
                <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                    <Text style={styles.backBtnText}>Go Back</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }

    const handleDownloadSim = () => {
        setIsDownloading(true);
        setTimeout(() => {
            setIsDownloading(false);
            setDownloaded(true);
            setTimeout(() => setDownloaded(false), 3000);
        }, 1500);
    };

    // Calculate parameter position for gauge bar
    const renderGauge = (param: ReportParameter) => {
        const { minNormal, maxNormal, currentValue, status } = param;
        
        // Map the current value to a percentage (0% to 100%)
        // Let's assume the scale range is from: minNormal - (range * 0.5) to maxNormal + (range * 0.5)
        const range = maxNormal - minNormal;
        const scaleMin = minNormal - range * 0.3;
        const scaleMax = maxNormal + range * 0.3;
        const totalScaleRange = scaleMax - scaleMin;
        
        let positionPercent = ((currentValue - scaleMin) / totalScaleRange) * 100;
        positionPercent = Math.max(5, Math.min(95, positionPercent)); // constraint check

        // Colors
        let activeColor = "#10B981"; // green
        if (status === "Borderline" || status === "Low") {
            activeColor = "#F59E0B"; // orange
        } else if (status === "High") {
            activeColor = "#EF4444"; // red
        }

        return (
            <View style={styles.gaugeContainer}>
                {/* Horizontal Bar */}
                <View style={styles.gaugeTrack}>
                    {/* Low zone */}
                    <View style={[styles.gaugeSegment, { backgroundColor: "#FFEBCD", flex: 3 }]} />
                    {/* Normal zone */}
                    <View style={[styles.gaugeSegment, { backgroundColor: "#DCFCE7", flex: 4 }]} />
                    {/* High zone */}
                    <View style={[styles.gaugeSegment, { backgroundColor: "#FEE2E2", flex: 3 }]} />
                </View>
                
                {/* Gauge Indicator Pin */}
                <View style={[styles.gaugeIndicatorPin, { left: `${positionPercent}%` }]}>
                    <View style={[styles.gaugeIndicatorDot, { backgroundColor: activeColor }]} />
                    <View style={[styles.gaugeIndicatorArrow, { borderTopColor: activeColor }]} />
                </View>

                {/* Range Labels */}
                <View style={styles.gaugeLabelsRow}>
                    <Text style={styles.gaugeLabelText}>Low</Text>
                    <Text style={styles.gaugeLabelTextVal}>{minNormal} (Min)</Text>
                    <Text style={styles.gaugeLabelTextVal}>{maxNormal} (Max)</Text>
                    <Text style={styles.gaugeLabelText}>High</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            {/* Top Toolbar Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBtn} onPress={() => router.back()}>
                    <MaterialCommunityIcons name="arrow-left" size={24} color="#071739" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Report Details</Text>
                <View style={styles.headerRightActions}>
                    <TouchableOpacity
                        style={styles.headerBtn}
                        onPress={() => router.push(`/reports/report-share?id=${report.id}`)}
                    >
                        <MaterialCommunityIcons name="share-variant-outline" size={22} color="#071739" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.headerBtn}
                        onPress={handleDownloadSim}
                        disabled={isDownloading}
                    >
                        {isDownloading ? (
                            <ActivityIndicator size="small" color="#2563EB" />
                        ) : (
                            <MaterialCommunityIcons
                                name={downloaded ? "check" : "download-outline"}
                                size={22}
                                color={downloaded ? "#10B981" : "#071739"}
                            />
                        )}
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Report Info Card */}
                <View style={styles.infoCard}>
                    <View style={styles.infoCardHeader}>
                        <MaterialCommunityIcons
                            name={report.type === "Pathology" ? "flask-outline" : report.type === "Radiology" ? "lungs" : "heart-pulse"}
                            size={24}
                            color="#2563EB"
                        />
                        <Text style={styles.infoCardTitle}>{report.title}</Text>
                    </View>

                    <View style={styles.gridContainer}>
                        <View style={styles.gridRow}>
                            <View style={styles.gridCol}>
                                <Text style={styles.gridLabel}>Patient Name</Text>
                                <Text style={styles.gridValue}>{report.patientInfo.name}</Text>
                            </View>
                            <View style={styles.gridCol}>
                                <Text style={styles.gridLabel}>Patient ID</Text>
                                <Text style={styles.gridValue}>{report.patientInfo.id}</Text>
                            </View>
                        </View>

                        <View style={styles.gridRow}>
                            <View style={styles.gridCol}>
                                <Text style={styles.gridLabel}>Age & Gender</Text>
                                <Text style={styles.gridValue}>
                                    {report.patientInfo.age} Yrs / {report.patientInfo.gender}
                                </Text>
                            </View>
                            <View style={styles.gridCol}>
                                <Text style={styles.gridLabel}>Referred By</Text>
                                <Text style={styles.gridValue}>{report.patientInfo.refDoctor}</Text>
                            </View>
                        </View>

                        <View style={styles.gridRow}>
                            <View style={styles.gridCol}>
                                <Text style={styles.gridLabel}>Collection Date</Text>
                                <Text style={styles.gridValue}>{report.patientInfo.collectionDate}</Text>
                            </View>
                            <View style={styles.gridCol}>
                                <Text style={styles.gridLabel}>Report Date</Text>
                                <Text style={styles.gridValue}>{report.patientInfo.reportDate}</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Parameters Section (for Pathology) */}
                {report.parameters && report.parameters.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Lab Parameters & Results</Text>
                        
                        {report.parameters.map((param, index) => {
                            // Text indicator color
                            let badgeColor = "#10B981";
                            if (param.status === "Borderline" || param.status === "Low") {
                                badgeColor = "#F59E0B";
                            } else if (param.status === "High") {
                                badgeColor = "#EF4444";
                            }

                            return (
                                <View key={index} style={styles.parameterCard}>
                                    <View style={styles.parameterHeader}>
                                        <View>
                                            <Text style={styles.parameterName}>{param.name}</Text>
                                            <Text style={styles.parameterRange}>
                                                Reference Range: {param.refRange} {param.unit}
                                            </Text>
                                        </View>
                                        <View style={styles.parameterResultWrapper}>
                                            <Text style={[styles.parameterValue, { color: badgeColor }]}>
                                                {param.value}
                                            </Text>
                                            <Text style={styles.parameterUnit}>{param.unit}</Text>
                                        </View>
                                    </View>

                                    {/* Interactive Visual Gauge */}
                                    {renderGauge(param)}
                                </View>
                            );
                        })}
                    </View>
                )}

                {/* Findings Section (for Radiology & ECG) */}
                {report.findings && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Medical Findings & Impression</Text>
                        <View style={styles.findingsCard}>
                            <Text style={styles.findingsText}>{report.findings}</Text>
                            <View style={styles.findingsFooter}>
                                <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={18} color="#10B981" />
                                <Text style={styles.findingsFooterText}>Verified by Clinical Radiologist / Cardiologist</Text>
                            </View>
                        </View>
                    </View>
                )}

                {/* AI Medical Insights */}
                <View style={styles.section}>
                    <LinearGradient
                        colors={["#F0FDF4", "#DCFCE7"]}
                        style={styles.aiInsightsCard}
                    >
                        <View style={styles.aiInsightsHeader}>
                            <View style={styles.aiRobotWrapper}>
                                <MaterialCommunityIcons name="robot" size={20} color="#166534" />
                            </View>
                            <View>
                                <Text style={styles.aiInsightsTitle}>AI Medical Insights</Text>
                                <Text style={styles.aiInsightsSubtitle}>Generated summary by LifeRelier AI assistant</Text>
                            </View>
                        </View>

                        <View style={styles.aiBulletList}>
                            {report.aiInsights.map((insight, idx) => (
                                <View key={idx} style={styles.aiBulletRow}>
                                    <View style={styles.aiBulletDot} />
                                    <Text style={styles.aiBulletText}>{insight}</Text>
                                </View>
                            ))}
                        </View>

                        <TouchableOpacity
                            style={styles.aiActionButton}
                            onPress={() => router.push("/(tabs)/aihub")}
                        >
                            <MaterialCommunityIcons name="chat-processing-outline" size={18} color="#FFFFFF" />
                            <Text style={styles.aiActionButtonText}>Ask AI Hub About These Results</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                {/* Doctor Recommendations */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Physician's Consultation Notes</Text>
                    <View style={styles.doctorNotesCard}>
                        <View style={styles.doctorNotesHeader}>
                            <MaterialCommunityIcons name="doctor" size={24} color="#64748B" />
                            <Text style={styles.doctorNotesAuthor}>{report.patientInfo.refDoctor}</Text>
                        </View>
                        <Text style={styles.doctorNotesText}>"{report.doctorNotes}"</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Quick Actions Bottom Bar */}
            <View style={styles.bottomBar}>
                <TouchableOpacity
                    style={styles.bottomBtnOutline}
                    onPress={() => router.push(`/reports/report-viewer?id=${report.id}`)}
                >
                    <MaterialCommunityIcons name="file-pdf-box" size={20} color="#2563EB" />
                    <Text style={styles.bottomBtnOutlineText}>Print / View PDF</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.bottomBtnSolid}
                    onPress={() => router.push(`/reports/report-share?id=${report.id}`)}
                >
                    <MaterialCommunityIcons name="share-variant" size={20} color="#FFFFFF" />
                    <Text style={styles.bottomBtnSolidText}>Share Securely</Text>
                </TouchableOpacity>
            </View>

            {/* Toast success overlay */}
            {downloaded && (
                <View style={styles.toast}>
                    <MaterialCommunityIcons name="check-circle" size={18} color="#FFFFFF" />
                    <Text style={styles.toastText}>PDF Report saved to local device downloads!</Text>
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
    errorContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    errorText: {
        fontSize: 18,
        color: "#64748B",
        marginTop: 12,
        marginBottom: 20,
    },
    backBtn: {
        backgroundColor: "#2563EB",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12,
    },
    backBtnText: {
        color: "#FFFFFF",
        fontWeight: "600",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
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
        borderRadius: 19,
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: "700",
        color: "#071739",
    },
    headerRightActions: {
        flexDirection: "row",
    },
    scrollContent: {
        paddingBottom: 110,
    },
    infoCard: {
        backgroundColor: "#FFFFFF",
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 24,
        padding: 20,
        shadowColor: "#0F172A",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.03,
        shadowRadius: 12,
        elevation: 2,
    },
    infoCardHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    infoCardTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: "#071739",
        marginLeft: 10,
    },
    gridContainer: {
        width: "100%",
    },
    gridRow: {
        flexDirection: "row",
        marginBottom: 14,
    },
    gridCol: {
        flex: 1,
    },
    gridLabel: {
        fontSize: 11,
        color: "#94A3B8",
        textTransform: "uppercase",
        fontWeight: "600",
    },
    gridValue: {
        fontSize: 14,
        fontWeight: "600",
        color: "#334155",
        marginTop: 2,
    },
    section: {
        marginTop: 24,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: "700",
        color: "#0F172A",
        marginBottom: 14,
    },
    parameterCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 16,
        marginBottom: 14,
        borderWidth: 1,
        borderColor: "#F1F5F9",
    },
    parameterHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 12,
    },
    parameterName: {
        fontSize: 15,
        fontWeight: "700",
        color: "#334155",
    },
    parameterRange: {
        fontSize: 12,
        color: "#94A3B8",
        marginTop: 2,
    },
    parameterResultWrapper: {
        flexDirection: "row",
        alignItems: "baseline",
    },
    parameterValue: {
        fontSize: 20,
        fontWeight: "800",
    },
    parameterUnit: {
        fontSize: 12,
        color: "#64748B",
        marginLeft: 2,
    },
    gaugeContainer: {
        width: "100%",
        marginTop: 10,
        position: "relative",
    },
    gaugeTrack: {
        height: 6,
        borderRadius: 3,
        flexDirection: "row",
        overflow: "hidden",
        width: "100%",
    },
    gaugeSegment: {
        height: "100%",
    },
    gaugeIndicatorPin: {
        position: "absolute",
        top: -6,
        alignItems: "center",
        width: 14,
        marginLeft: -7,
    },
    gaugeIndicatorDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#FFFFFF",
    },
    gaugeIndicatorArrow: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 4,
        borderRightWidth: 4,
        borderTopWidth: 5,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        marginTop: 1,
    },
    gaugeLabelsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
    },
    gaugeLabelText: {
        fontSize: 9,
        fontWeight: "600",
        color: "#94A3B8",
        textTransform: "uppercase",
    },
    gaugeLabelTextVal: {
        fontSize: 10,
        fontWeight: "700",
        color: "#64748B",
    },
    findingsCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: "#F1F5F9",
    },
    findingsText: {
        fontSize: 14,
        color: "#334155",
        lineHeight: 22,
    },
    findingsFooter: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16,
        paddingTop: 14,
        borderTopWidth: 1,
        borderTopColor: "#F1F5F9",
    },
    findingsFooterText: {
        fontSize: 12,
        color: "#64748B",
        marginLeft: 6,
        fontWeight: "500",
    },
    aiInsightsCard: {
        borderRadius: 24,
        padding: 20,
        shadowColor: "#10B981",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    aiInsightsHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    aiRobotWrapper: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
    },
    aiInsightsTitle: {
        fontSize: 16,
        fontWeight: "700",
        color: "#166534",
    },
    aiInsightsSubtitle: {
        fontSize: 11,
        color: "#2F855A",
    },
    aiBulletList: {
        marginBottom: 18,
    },
    aiBulletRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 10,
    },
    aiBulletDot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#166534",
        marginTop: 7,
        marginRight: 10,
    },
    aiBulletText: {
        fontSize: 13,
        color: "#1B4332",
        lineHeight: 18,
        flex: 1,
    },
    aiActionButton: {
        backgroundColor: "#15803D",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 12,
        borderRadius: 16,
    },
    aiActionButtonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "700",
        marginLeft: 8,
    },
    doctorNotesCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: "#E2E8F0",
    },
    doctorNotesHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    doctorNotesAuthor: {
        fontSize: 13,
        fontWeight: "700",
        color: "#475569",
        marginLeft: 6,
    },
    doctorNotesText: {
        fontSize: 13,
        color: "#64748B",
        fontStyle: "italic",
        lineHeight: 18,
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#F1F5F9",
        paddingHorizontal: 20,
        paddingVertical: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 10,
    },
    bottomBtnOutline: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: "#2563EB",
        borderRadius: 16,
        paddingVertical: 14,
        marginRight: 10,
        height: 52,
    },
    bottomBtnOutlineText: {
        color: "#2563EB",
        fontSize: 14,
        fontWeight: "700",
        marginLeft: 6,
    },
    bottomBtnSolid: {
        flex: 1.2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2563EB",
        borderRadius: 16,
        paddingVertical: 14,
        height: 52,
    },
    bottomBtnSolidText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "700",
        marginLeft: 6,
    },
    toast: {
        position: "absolute",
        bottom: 90,
        left: 20,
        right: 20,
        backgroundColor: "#334155",
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
