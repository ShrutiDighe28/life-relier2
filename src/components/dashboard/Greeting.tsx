import React from "react";
import { View, Text, StyleSheet } from "react-native";

type GreetingProps = {
    greeting?: string;
    userName?: string;
    subtitle?: string;
};

export default function Greeting({
    greeting = "Good Morning",
    userName = "Rahul",
    subtitle = "Here's your health summary for today.",
}: GreetingProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                {greeting},
                <Text style={styles.userName}> {userName} 👋</Text>
            </Text>

            <Text style={styles.subtitle}>
                {subtitle}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 22,
        marginTop: 22,
        marginBottom: 18,
    },

    greeting: {
        fontSize: 30,
        fontWeight: "800",
        color: "#071739",
        lineHeight: 38,
    },

    userName: {
        color: "#2563EB",
    },

    subtitle: {
        marginTop: 8,
        fontSize: 17,
        color: "#64748B",
        lineHeight: 24,
    },
});