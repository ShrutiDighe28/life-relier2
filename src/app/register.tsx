import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { LinearGradient } from "expo-linear-gradient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Svg, { Path } from "react-native-svg";

export default function RegisterScreen() {
    const router = useRouter();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [securePassword, setSecurePassword] = useState(true);
    const [secureConfirmPassword, setSecureConfirmPassword] =
        useState(true);

    const [acceptedTerms, setAcceptedTerms] =
        useState(false);

    const handleRegister = () => {
        // TODO
        router.push("/otp");
    };

    return (
        <View style={styles.root}>

            {/* Bottom Waves */}

            <Svg
                width="100%"
                height={220}
                viewBox="0 0 430 220"
                preserveAspectRatio="xMidYMax slice"
                style={styles.wave}
            >
                <Path
                    d="M0 60 C120 10 250 120 430 70 L430 220 L0 220 Z"
                    fill="#EEF5FF"
                />

                <Path
                    d="M0 95 C140 50 260 150 430 95 L430 220 L0 220 Z"
                    fill="#DCEBFF"
                />

                <Path
                    d="M0 125 C150 80 260 180 430 135 L430 220 L0 220 Z"
                    fill="#2563EB"
                />
            </Svg>

            <SafeAreaView
                style={styles.container}
                edges={["top", "left", "right"]}
            >

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 40,
                    }}
                >

                    {/* Decorations */}

                    <Image
                        source={require("@/assets/images/decorations/plus.png")}
                        style={[
                            styles.plus,
                            {
                                top: 60,
                                left: 25,
                            },
                        ]}
                    />

                    <Image
                        source={require("@/assets/images/decorations/hexagon.png")}
                        style={[
                            styles.hexagon,
                            {
                                top: 120,
                                right: -20,
                            },
                        ]}
                    />

                    <Image
                        source={require("@/assets/images/decorations/dots.png")}
                        style={[
                            styles.dots,
                            {
                                top: 220,
                                left: 10,
                            },
                        ]}
                    />

                    {/* Back Button */}

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

                    {/* Logo */}

                    <Image
                        source={require("@/assets/images/life_relier_logo.png")}
                        style={styles.logo}
                    />

                    <Text style={styles.subtitle}>
                        Healthcare Platform
                    </Text>

                    {/* Heading */}

                    <Text style={styles.heading}>
                        Create Account
                    </Text>

                    <Text style={styles.description}>
                        Join Life Relier to manage{"\n"}
                        your health securely.
                    </Text>
                    {/* ================= Full Name ================= */}

                    <View style={styles.inputContainer}>

                        <Image
                            source={require("@/assets/images/auth/person.png")}
                            style={styles.icon}
                        />

                        <TextInput
                            placeholder="Full Name"
                            placeholderTextColor="#94A3B8"
                            style={styles.input}
                            value={fullName}
                            onChangeText={setFullName}
                        />

                    </View>

                    {/* ================= Email ================= */}

                    <View style={styles.inputContainer}>

                        <Image
                            source={require("@/assets/images/auth/email.png")}
                            style={styles.icon}
                        />

                        <TextInput
                            placeholder="Email Address"
                            placeholderTextColor="#94A3B8"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                        />

                    </View>

                    {/* ================= Mobile ================= */}

                    <View style={styles.inputContainer}>

                        <Image
                            source={require("@/assets/images/auth/phone.png")}
                            style={styles.icon}
                        />

                        <TextInput
                            placeholder="Mobile Number"
                            placeholderTextColor="#94A3B8"
                            keyboardType="phone-pad"
                            maxLength={10}
                            style={styles.input}
                            value={mobile}
                            onChangeText={setMobile}
                        />

                    </View>

                    {/* ================= Password ================= */}

                    <View style={styles.inputContainer}>

                        <Image
                            source={require("@/assets/images/auth/password.png")}
                            style={styles.icon}
                        />

                        <TextInput
                            placeholder="Password"
                            placeholderTextColor="#94A3B8"
                            secureTextEntry={securePassword}
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                        />

                        <TouchableOpacity
                            onPress={() =>
                                setSecurePassword(!securePassword)
                            }
                        >
                            <Image
                                source={
                                    securePassword
                                        ? require("@/assets/images/auth/eye-off.png")
                                        : require("@/assets/images/auth/eye.png")
                                }
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>

                    </View>

                    {/* ================= Confirm Password ================= */}

                    <View style={styles.inputContainer}>

                        <Image
                            source={require("@/assets/images/auth/password.png")}
                            style={styles.icon}
                        />

                        <TextInput
                            placeholder="Confirm Password"
                            placeholderTextColor="#94A3B8"
                            secureTextEntry={secureConfirmPassword}
                            style={styles.input}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />

                        <TouchableOpacity
                            onPress={() =>
                                setSecureConfirmPassword(
                                    !secureConfirmPassword
                                )
                            }
                        >
                            <Image
                                source={
                                    secureConfirmPassword
                                        ? require("@/assets/images/auth/eye-off.png")
                                        : require("@/assets/images/auth/eye.png")
                                }
                                style={styles.eyeIcon}
                            />
                        </TouchableOpacity>

                    </View>

                    {/* ================= Terms ================= */}

                    <TouchableOpacity
                        style={styles.termsContainer}
                        onPress={() =>
                            setAcceptedTerms(!acceptedTerms)
                        }
                    >
                        <View
                            style={[
                                styles.checkbox,
                                acceptedTerms &&
                                styles.checkboxSelected,
                            ]}
                        >
                            {acceptedTerms && (
                                <MaterialCommunityIcons
                                    name="check"
                                    size={16}
                                    color="#FFFFFF"
                                />
                            )}
                        </View>

                        <Text style={styles.termsText}>
                            I agree to the{" "}
                            <Text style={styles.link}>
                                Terms & Conditions
                            </Text>
                        </Text>

                    </TouchableOpacity>
                    {/* ================= Register Button ================= */}

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={handleRegister}
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
                                    Create Account
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

                    {/* ================= Already Have Account ================= */}

                    <View style={styles.loginContainer}>

                        <Text style={styles.loginText}>
                            Already have an account?
                        </Text>

                        <TouchableOpacity
                            onPress={() => router.replace("/login")}
                        >
                            <Text style={styles.signInText}>
                                Sign In
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

                    {/* ================= Google Register ================= */}

                    <TouchableOpacity
                        style={styles.googleButton}
                        activeOpacity={0.9}
                    >

                        <Image
                            source={require("@/assets/images/auth/google.png")}
                            style={styles.googleIcon}
                        />

                        <Text style={styles.googleText}>
                            Continue with Google
                        </Text>

                    </TouchableOpacity>

                </ScrollView>

            </SafeAreaView>

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    container: {
        flex: 1,
        paddingHorizontal: 24,
    },

    backButton: {
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

        marginBottom: 20,
    },

    logo: {
        width: 270,
        height: 75,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 8,
    },

    subtitle: {
        textAlign: "center",
        fontSize: 18,
        color: "#64748B",
        marginTop: -6,
        marginBottom: 24,
    },

    heading: {
        fontSize: 34,
        fontWeight: "800",
        color: "#071739",
        textAlign: "center",
    },

    description: {
        textAlign: "center",
        fontSize: 17,
        color: "#64748B",
        lineHeight: 25,
        marginTop: 10,
        marginBottom: 28,
    },

    inputContainer: {
        flexDirection: "row",
        alignItems: "center",

        width: "100%",
        height: 64,

        backgroundColor: "#FFFFFF",

        borderRadius: 22,

        paddingHorizontal: 18,

        marginBottom: 16,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.08,
        shadowRadius: 12,

        elevation: 6,
    },

    icon: {
        width: 26,
        height: 26,
        resizeMode: "contain",
        marginRight: 14,
    },

    input: {
        flex: 1,
        fontSize: 16,
        color: "#071739",
    },

    eyeIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },

    termsContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        marginBottom: 30,
    },

    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 6,

        borderWidth: 2,
        borderColor: "#CBD5E1",

        justifyContent: "center",
        alignItems: "center",
    },

    checkboxSelected: {
        backgroundColor: "#2563EB",
        borderColor: "#2563EB",
    },

    termsText: {
        marginLeft: 12,
        color: "#475569",
        fontSize: 15,
        flex: 1,
    },

    link: {
        color: "#2563EB",
        fontWeight: "700",
    },

    buttonContainer: {
        width: "100%",
        marginTop: 6,
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
        marginRight: 14,
    },

    arrowCircle: {
        width: 42,
        height: 42,
        borderRadius: 21,

        backgroundColor: "#FFFFFF",

        justifyContent: "center",
        alignItems: "center",
    },

    loginContainer: {
        alignItems: "center",
        marginTop: 24,
    },

    loginText: {
        color: "#64748B",
        fontSize: 16,
    },

    signInText: {
        marginTop: 8,
        color: "#2563EB",
        fontSize: 18,
        fontWeight: "700",
    },

    dividerContainer: {
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
        marginHorizontal: 16,
        color: "#94A3B8",
        fontWeight: "700",
    },

    googleButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

        width: "100%",
        height: 62,

        backgroundColor: "#FFFFFF",

        borderRadius: 22,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.08,
        shadowRadius: 12,

        elevation: 6,

        marginBottom: 50,
    },

    googleIcon: {
        width: 26,
        height: 26,
        resizeMode: "contain",
        marginRight: 12,
    },

    googleText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#071739",
    },

    plus: {
        position: "absolute",
        width: 22,
        height: 22,
        resizeMode: "contain",
        opacity: 0.45,
    },

    hexagon: {
        position: "absolute",
        width: 80,
        height: 80,
        resizeMode: "contain",
        opacity: 0.35,
    },

    dots: {
        position: "absolute",
        width: 58,
        height: 58,
        resizeMode: "contain",
        opacity: 0.45,
    },

    wave: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    },
});