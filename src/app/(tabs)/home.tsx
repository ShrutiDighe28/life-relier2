import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/dashboard/Header";
import Greeting from "@/components/dashboard/Greeting";
import AIAssistantCard from "@/components/dashboard/AIAssistantCard";
import HealthScoreCard from "@/components/dashboard/HealthScoreCard";
import QuickStats from "@/components/dashboard/QuickStats";
import AppointmentCard from "@/components/dashboard/AppointmentCard";
import RecentReportCard from "@/components/dashboard/RecentReportCard";
import HealthInsights from "@/components/dashboard/HealthInsights";
import EmergencyBanner from "@/components/dashboard/EmergencyBanner";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container} edges={["top"]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Header />

                <Greeting
                    userName="Rahul"
                    greeting="Good Morning"
                    subtitle="Here's your health summary for today."
                />

                <AIAssistantCard />

                <HealthScoreCard />

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