import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-expo";
import { LinearGradient } from "expo-linear-gradient";
import { Redirect, useRouter } from "expo-router";
import { Menu, Plus, Shield, X } from "lucide-react-native";
import React, { useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isLoaded, userId, sessionId, getToken } = useAuth();

  // Navigation items
  const navItems = [
    { href: "/", label: "Dashboard" },
    { href: "/generator", label: "Password Generator" },
    { href: "/add", label: "Add Password" },
  ];

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.navContainer}>
          {/* Logo Section */}
          <View style={styles.logoContainer}>
            <TouchableOpacity
              onPress={() => router.push("/")}
              style={styles.logoButton}
            >
              <View style={styles.logoWrapper}>
                <LinearGradient
                  colors={["#1e293b", "#334155", "#475569"]}
                  style={styles.logoGradient}
                >
                  <Shield color="white" size={20} />
                </LinearGradient>
                <View style={styles.logoTextContainer}>
                  <Text style={styles.logoText}>SecuroPass</Text>
                  <Text style={styles.logoSubtext}>Password Manager</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Desktop Navigation - Will be hidden on mobile */}
          <View style={styles.desktopNav}>
            {navItems.map((item) => (
              <TouchableOpacity
                key={item.href}
                onPress={() => Redirect({ href: item.href as string })}
                style={styles.navItem}
              >
                <Text style={styles.navText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Desktop Actions - Will be hidden on mobile */}
          <View style={styles.desktopActions}>
            <SignedIn>
              <TouchableOpacity
                onPress={() => Redirect({ href: "/" })}
                style={styles.addButton}
              >
                <LinearGradient
                  colors={["#1e293b", "#0f172a"]}
                  style={styles.addButtonGradient}
                >
                  <Plus color="white" size={16} />
                  <Text style={styles.addButtonText}>Add Password</Text>
                </LinearGradient>
              </TouchableOpacity>
              <View style={styles.divider} />
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <View style={styles.authButtons}>
                <SignInButton mode="modal">
                  <TouchableOpacity style={styles.signInButton}>
                    <Text style={styles.signInText}>Sign In</Text>
                  </TouchableOpacity>
                </SignInButton>
                <SignUpButton mode="modal">
                  <TouchableOpacity style={styles.signUpButton}>
                    <LinearGradient
                      colors={["#1e293b", "#0f172a"]}
                      style={styles.signUpGradient}
                    >
                      <Text style={styles.signUpText}>Get Started</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </SignUpButton>
              </View>
            </SignedOut>
          </View>

          {/* Mobile Actions */}
          <View style={styles.mobileActions}>
            <SignedIn>
              <TouchableOpacity
                onPress={() => router.push("/add")}
                style={styles.mobileAddButton}
              >
                <Plus color="white" size={16} />
                <Text style={styles.mobileAddText}>Add</Text>
              </TouchableOpacity>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <View style={styles.mobileAuthButtons}>
                <SignInButton mode="modal">
                  <TouchableOpacity style={styles.mobileSignInButton}>
                    <Text style={styles.mobileSignInText}>Sign In</Text>
                  </TouchableOpacity>
                </SignInButton>
                <SignUpButton mode="modal">
                  <TouchableOpacity style={styles.mobileSignUpButton}>
                    <Text style={styles.mobileSignUpText}>Sign Up</Text>
                  </TouchableOpacity>
                </SignUpButton>
              </View>
            </SignedOut>

            {/* Mobile Menu Button */}
            <TouchableOpacity
              onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={styles.menuButton}
            >
              {mobileMenuOpen ? (
                <X color="#334155" size={20} />
              ) : (
                <Menu color="#334155" size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* Mobile Menu */}
        <Animated.View
          style={[
            styles.mobileMenu,
            {
              height: mobileMenuOpen ? "auto" : 0,
              opacity: mobileMenuOpen ? 1 : 0,
              paddingBottom: mobileMenuOpen ? 24 : 0,
            },
          ]}
        >
          <ScrollView>
            {navItems.map((item) => (
              <TouchableOpacity
                key={item.href}
                onPress={() => {
                  router.push(item.href);
                  setMobileMenuOpen(false);
                }}
                style={styles.mobileMenuItem}
              >
                <Text style={styles.mobileMenuText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(226, 232, 240, 0.6)",
    position: "absolute",
    top: 0,
    zIndex: 50,
  },
  container: {
    width: "100%",
    paddingHorizontal: 24,
  },
  navContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 64,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoGradient: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  logoTextContainer: {
    display: "none", // Hidden by default on mobile
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundImage: "linear-gradient(to right, #1e293b, #475569)",
    color: "transparent",
    backgroundClip: "text",
  },
  logoSubtext: {
    fontSize: 12,
    color: "#64748b",
    fontWeight: "500",
    marginTop: -4,
  },
  desktopNav: {
    display: "none", // Hidden on mobile
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  navItem: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  navText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#334155",
  },
  desktopActions: {
    display: "none", // Hidden on mobile
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  addButton: {
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  addButtonGradient: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
  divider: {
    width: 1,
    height: 24,
    backgroundColor: "#e2e8f0",
  },
  authButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  signInButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  signInText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#334155",
  },
  signUpButton: {
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  signUpGradient: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  signUpText: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
  mobileActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  mobileAddButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e293b",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  mobileAddText: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
    display: "none", // Hidden on small screens
  },
  mobileAuthButtons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  mobileSignInButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  mobileSignInText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#334155",
  },
  mobileSignUpButton: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  mobileSignUpText: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
  menuButton: {
    padding: 8,
    borderRadius: 8,
  },
  mobileMenu: {
    overflow: "hidden",
    borderTopWidth: 1,
    borderTopColor: "rgba(226, 232, 240, 0.6)",
  },
  mobileMenuItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  mobileMenuText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#334155",
  },
});
