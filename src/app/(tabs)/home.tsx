import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/utils/themeManager";

import {
    Header,
    Greeting,
    AIAssistantCard,
    HealthScore,
    QuickStats,
    AppointmentCard,
    RecentReportCard,
    HealthInsights,
    EmergencyBanner,
} from "@/components/dashboard";
export default function HomeScreen() {
    const { colors } = useTheme();

    return (
        <SafeAreaView
            style={[styles.container, { backgroundColor: colors.background }]}
            edges={["top"]}
        >
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
                style={{ backgroundColor: colors.background }}
            >
                <Header />

                <Greeting
                    userName="Rahul"
                    greeting="Good Morning"
                    subtitle="Here's your health summary for today."
                />

                <AIAssistantCard />

                <HealthScore />

                <QuickStats />

                <AppointmentCard />

                <RecentReportCard />

                <HealthInsights />

                <EmergencyBanner />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    content: {
        paddingBottom: 120,
    },
});