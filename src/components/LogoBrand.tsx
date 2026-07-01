import React from "react";
import { View, Text, Image, ViewStyle } from "react-native";
import { useTheme } from "@/utils/themeManager";

interface LogoBrandProps {
    size?: number;
    fontSize?: number;
    style?: ViewStyle;
    centered?: boolean;
}

export default function LogoBrand({ size = 32, fontSize = 22, style, centered = false }: LogoBrandProps) {
    const { colors } = useTheme();
    // Aspect ratio of the original logo life_relier_logo.png is roughly 3.47
    // We crop only the icon mark from the left (which fits in a square) by setting the parent width to size * 1.15
    const imageWidth = size * 3.47;

    return (
        <View
            style={[
                {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: centered ? "center" : "flex-start",
                },
                style,
            ]}
        >
            {/* Constrained crop container showing ONLY the logo symbol */}
            <View style={{ width: size * 1.15, height: size, overflow: "hidden", marginRight: 6 }}>
                <Image
                    source={require("@/assets/images/logo/life_relier_logo.png")}
                    style={{
                        width: imageWidth,
                        height: size,
                        resizeMode: "stretch",
                        marginLeft: 0,
                    }}
                />
            </View>

            {/* Official Corporate Name Text - adapting dynamically for dark mode contrast */}
            <Text
                style={{
                    fontSize: fontSize,
                    fontWeight: "800",
                    letterSpacing: -0.5,
                }}
            >
                <Text style={{ color: "#0062C4" }}>Life </Text>
                <Text style={{ color: colors.text }}>Relier</Text>
            </Text>
        </View>
    );
}
