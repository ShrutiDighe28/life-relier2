import { Alert, Platform } from "react-native";

// ═══════════════════════════════════════════════════════════════════════════
// OTP Delivery Service
// ═══════════════════════════════════════════════════════════════════════════
//
// DEV MODE:   Shows a visible alert with the OTP code so you can test
//             the registration flow without a real SMS/email provider.
//             Also logs to the Metro/Expo console.
//
// PRODUCTION: POSTs to your backend API which dispatches the OTP via
//             Twilio (SMS) and SendGrid (email). API keys never live
//             in the client bundle.
//
// To connect a real SMS provider later, update the PRODUCTION PATH below
// with your backend endpoint URL.
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Your backend API base URL.
 * Change this when you deploy your server.
 */
const API_BASE_URL = "https://api.liferelier.com/v1";

/**
 * Sends an OTP to the user's registered email and mobile number.
 *
 * @param email  - User's email address
 * @param mobile - User's 10-digit mobile number
 * @param otp    - The generated 6-digit OTP
 * @returns true if delivery succeeded
 */
export const sendOtpToUser = async (
  email: string,
  mobile: string,
  otp: string
): Promise<boolean> => {
  if (!__DEV__) {
    // ── PRODUCTION PATH ────────────────────────────────────────────
    // Replace with your actual backend endpoint that sends SMS/Email
    try {
      const response = await fetch(`${API_BASE_URL}/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, mobile, otp }),
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  // ── DEVELOPMENT PATH ───────────────────────────────────────────────
  // OTP is shown via Alert so you can complete the registration flow.
  // Also logged to Metro/Expo console for debugging.

  // eslint-disable-next-line no-console
  console.warn(
    `[LifeRelier DEV] OTP dispatched → ${otp} | Email: ${email} | Mobile: ${mobile}`
  );

  const maskedMobile = mobile
    ? `+91 ${mobile.slice(0, 2)}****${mobile.slice(-2)}`
    : "N/A";

  const maskedEmail = email
    ? `${email.slice(0, 3)}***@${email.split("@")[1] || ""}`
    : "N/A";

  const alertTitle = "📲 OTP Verification Code";
  const alertMessage =
    `Your OTP is: ${otp}\n\n` +
    `📧 Sent to: ${maskedEmail}\n` +
    `📱 Sent to: ${maskedMobile}\n\n` +
    `Enter this code on the verification screen.\n\n` +
    `⚠️ Dev mode — In production, this will be\ndelivered via SMS & email.`;

  if (Platform.OS === "web") {
    if (typeof window !== "undefined") {
      window.alert(`${alertTitle}\n\n${alertMessage}`);
    }
  } else {
    Alert.alert(
      alertTitle,
      alertMessage,
      [
        {
          text: "Copy OTP",
          onPress: () => {
            // Clipboard copy — works if expo-clipboard is installed
            try {
              const Clipboard = require("expo-clipboard");
              Clipboard.setStringAsync?.(otp);
            } catch {
              // expo-clipboard not installed, just dismiss
            }
          },
        },
        { text: "OK", style: "default" },
      ],
      { cancelable: true }
    );
  }

  return true;
};
