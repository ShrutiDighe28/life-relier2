import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Svg, { Path } from "react-native-svg";
import LogoBrand from "@/components/LogoBrand";

export default function LoginScreen() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [rememberMe, setRememberMe] = useState(true);
    const [secureText, setSecureText] = useState(true);

    const handleLogin = () => {
        // TODO: Authentication
        router.replace("/(tabs)/home");
    };

    return (
        <SafeAreaView style={styles.container}>

            {/* ================= Decorations ================= */}

            <Image
                source={require("@/assets/images/decorations/plus.png")}
                style={[
                    styles.plus,
                    {
                        top: 70,
                        left: 30,
                    },
                ]}
            />

            <Image
                source={require("@/assets/images/decorations/plus.png")}
                style={[
                    styles.plus,
                    {
                        top: 180,
                        right: 32,
                    },
                ]}
            />

            <Image
                source={require("@/assets/images/decorations/hexagon.png")}
                style={[
                    styles.hexagon,
                    {
                        top: 150,
                        left: -18,
                    },
                ]}
            />

            <Image
                source={require("@/assets/images/decorations/hexagon.png")}
                style={[
                    styles.hexagon,
                    {
                        top: 260,
                        right: -12,
                    },
                ]}
            />

            <Image
                source={require("@/assets/images/decorations/dots.png")}
                style={[
                    styles.dots,
                    {
                        top: 260,
                        right: 18,
                    },
                ]}
            />

            {/* ================= Back Button ================= */}

            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.back()}
            >
                <MaterialCommunityIcons
                    name="arrow-left"
                    size={24}
                    color="#071739"
                />
            </TouchableOpacity>

            {/* ================= Logo ================= */}

            <LogoBrand size={40} fontSize={28} style={{ marginTop: 40 }} centered />

            <Text style={styles.subtitle}>
                Healthcare Platform
            </Text>

            {/* ================= Heading ================= */}

            <Text style={styles.heading}>
                Welcome Back! 👋
            </Text>

            <Text style={styles.description}>
                Sign in to continue your{"\n"}healthcare journey
            </Text>

            {/* ================= Email ================= */}

            <View style={styles.inputContainer}>

                <MaterialCommunityIcons
                    name="account-outline"
                    size={24}
                    color="#64748B"
                    style={styles.inputIcon}
                />

                <TextInput
                    placeholder="Email or Mobile Number"
                    placeholderTextColor="#94A3B8"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

            </View>

            {/* ================= Password ================= */}

            <View style={styles.inputContainer}>

                <MaterialCommunityIcons
                    name="lock-outline"
                    size={24}
                    color="#64748B"
                    style={styles.inputIcon}
                />

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="#94A3B8"
                    secureTextEntry={secureText}
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                />

                <TouchableOpacity
                    onPress={() => setSecureText(!secureText)}
                >
                    <MaterialCommunityIcons
                        name={
                            secureText
                                ? "eye-off-outline"
                                : "eye-outline"
                        }
                        size={24}
                        color="#64748B"
                    />
                </TouchableOpacity>

            </View>
            {/* ================= Remember Me ================= */}

            <View style={styles.optionsRow}>

                <TouchableOpacity
                    style={styles.rememberContainer}
                    onPress={() => setRememberMe(!rememberMe)}
                >
                    <View
                        style={[
                            styles.checkbox,
                            rememberMe && styles.checkboxSelected,
                        ]}
                    >
                        {rememberMe && (
                            <MaterialCommunityIcons
                                name="check"
                                size={16}
                                color="#FFFFFF"
                            />
                        )}
                    </View>

                    <Text style={styles.rememberText}>
                        Remember Me
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() =>
                        router.push("/forgot-password")
                    }
                >
                    <Text style={styles.forgotText}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

            </View>

            {/* ================= Sign In Button ================= */}

            <TouchableOpacity
                activeOpacity={0.9}
                onPress={handleLogin}
                style={styles.buttonContainer}
            >
                <LinearGradient
                    colors={["#2563EB", "#0A48D6"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.button}
                >
                    <View style={styles.buttonContent}>

                        <Text style={styles.buttonText}>
                            Sign In
                        </Text>

                        <View style={styles.arrowCircle}>
                            <MaterialCommunityIcons
                                name="arrow-right"
                                size={24}
                                color="#2563EB"
                            />
                        </View>

                    </View>
                </LinearGradient>
            </TouchableOpacity>

            {/* ================= Register ================= */}

            <View style={styles.registerContainer}>

                <Text style={styles.registerText}>
                    {"Don't have an account?"}
                </Text>

                <TouchableOpacity
                    onPress={() =>
                        router.push("/register")
                    }
                >
                    <Text style={styles.createAccount}>
                        Create Account
                    </Text>
                </TouchableOpacity>

            </View>

            {/* ================= Divider ================= */}

            <View style={styles.dividerContainer}>

                <View style={styles.line} />

                <Text style={styles.orText}>
                    OR
                </Text>

                <View style={styles.line} />

            </View>

            {/* ================= Google ================= */}

            <TouchableOpacity style={styles.googleButton}>

                <Image
                    source={require("@/assets/images/auth/google.png")}
                    style={styles.googleIcon}
                />

                <Text style={styles.googleText}>
                    Continue with Google
                </Text>

            </TouchableOpacity>

            {/* ================= Bottom Waves ================= */}

            <Svg
                width="100%"
                height={210}
                style={styles.wave}
            >
                <Path
                    d="M0 70 C120 15 250 120 430 70 L430 210 L0 210 Z"
                    fill="#EEF5FF"
                />

                <Path
                    d="M0 100 C150 55 280 160 430 105 L430 210 L0 210 Z"
                    fill="#D8E9FF"
                />

                <Path
                    d="M0 135 C170 85 290 185 430 135 L430 210 L0 210 Z"
                    fill="#2563EB"
                />
            </Svg>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 24,
        alignItems: "center",
    },

    backButton: {
        position: "absolute",
        top: 55,
        left: 24,

        width: 44,
        height: 44,

        borderRadius: 22,

        backgroundColor: "#FFFFFF",

        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,

        elevation: 4,

        zIndex: 10,
    },

    logo: {
        width: 260,
        height: 72,
        resizeMode: "contain",
        marginTop: 40,
    },

    subtitle: {
        marginTop: -6,
        fontSize: 18,
        color: "#64748B",
        fontWeight: "500",
    },

    heading: {
        marginTop: 26,
        fontSize: 34,
        fontWeight: "800",
        color: "#071739",
        textAlign: "center",
    },

    description: {
        marginTop: 12,
        fontSize: 18,
        color: "#64748B",
        textAlign: "center",
        lineHeight: 28,
        marginBottom: 32,
    },

    inputContainer: {
        width: "100%",
        height: 64,

        flexDirection: "row",
        alignItems: "center",

        paddingHorizontal: 20,

        backgroundColor: "#FFFFFF",

        borderRadius: 22,

        marginBottom: 18,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.08,
        shadowRadius: 14,

        elevation: 6,
    },

    inputIcon: {
        marginRight: 14,
    },

    input: {
        flex: 1,
        fontSize: 17,
        color: "#071739",
    },

    optionsRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        marginTop: 6,
        marginBottom: 28,
    },

    rememberContainer: {
        flexDirection: "row",
        alignItems: "center",
    },

    checkbox: {
        width: 24,
        height: 24,

        borderRadius: 7,

        borderWidth: 2,
        borderColor: "#CBD5E1",

        justifyContent: "center",
        alignItems: "center",
    },

    checkboxSelected: {
        backgroundColor: "#2563EB",
        borderColor: "#2563EB",
    },

    rememberText: {
        marginLeft: 10,
        fontSize: 15,
        color: "#071739",
        fontWeight: "500",
    },

    forgotText: {
        color: "#2563EB",
        fontSize: 15,
        fontWeight: "600",
    },

    buttonContainer: {
        width: "100%",
    },

    button: {
        height: 64,

        borderRadius: 32,

        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#2563EB",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 12,

        elevation: 10,
    },

    buttonContent: {
        flexDirection: "row",
        alignItems: "center",
    },

    buttonText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "700",
        marginRight: 16,
    },

    arrowCircle: {
        width: 42,
        height: 42,

        borderRadius: 21,

        backgroundColor: "#FFFFFF",

        justifyContent: "center",
        alignItems: "center",
    },

    registerContainer: {
        alignItems: "center",
        marginTop: 26,
    },

    registerText: {
        color: "#64748B",
        fontSize: 16,
    },

    createAccount: {
        marginTop: 8,
        color: "#2563EB",
        fontSize: 18,
        fontWeight: "700",
    },

    dividerContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",

        marginVertical: 28,
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#E2E8F0",
    },

    orText: {
        marginHorizontal: 18,
        color: "#94A3B8",
        fontWeight: "700",
        fontSize: 16,
    },

    googleButton: {
        width: "100%",
        height: 62,

        borderRadius: 22,

        backgroundColor: "#FFFFFF",

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.08,
        shadowRadius: 14,

        elevation: 6,
    },

    googleIcon: {
        width: 26,
        height: 26,
        resizeMode: "contain",
        marginRight: 14,
    },

    googleText: {
        color: "#071739",
        fontSize: 18,
        fontWeight: "600",
    }, plus: {
        position: "absolute",
        width: 22,
        height: 22,
        resizeMode: "contain",
        opacity: 0.45,
    },

    hexagon: {
        position: "absolute",
        width: 82,
        height: 82,
        resizeMode: "contain",
        opacity: 0.30,
    },

    dots: {
        position: "absolute",
        width: 56,
        height: 56,
        resizeMode: "contain",
        opacity: 0.40,
    },

    wave: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
    },
});