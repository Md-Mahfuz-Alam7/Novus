import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Modal as RNModal } from "react-native";
import { Input, InputField } from "./ui/input";
import { Button, ButtonSpinner, ButtonText } from "./ui/button";

export function EmailVerificationModal({
    isOpen,
    onClose,
    onSubmitCode,
    loading = false,
}) {
    const [code, setCode] = useState("");

    const handleSubmit = () => {
        if (!code.trim() || code.trim().length !== 6) return;
        onSubmitCode(code);
    };

    return (
        <RNModal
            visible={isOpen}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.backdrop}>
                <View style={styles.content}>
                    <Text style={styles.title}>Verify Email</Text>
                    
                    <Text style={styles.description}>
                        Enter the 6 digit verification code sent to your email address to confirm your account.
                    </Text>

                    <Input variant="rounded" size="md" className="w-full mt-4">
                        <InputField
                            placeholder="Enter Verification Code"
                            keyboardType="number-pad"
                            value={code}
                            onChangeText={setCode}
                            maxLength={6}
                        />
                    </Input>

                    <View style={styles.footer}>
                        <Button
                            variant="outline"
                            size="lg"
                            action="secondary"
                            className="mr-3 rounded-full flex-1"
                            onPress={onClose}
                            isDisabled={loading}
                        >
                            <ButtonText className="text-black">Cancel</ButtonText>
                        </Button>

                        <Button
                            onPress={handleSubmit}
                            className="rounded-full flex-1 bg-[#2E5E99]"
                            size="lg"
                            isDisabled={loading || code.trim().length !== 6}
                        >
                            {loading ? (
                                <ButtonSpinner className="text-white" />
                            ) : (
                                <ButtonText>Verify</ButtonText>
                            )}
                        </Button>
                    </View>
                </View>
            </View>
        </RNModal>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        backgroundColor: 'white',
        borderRadius: 24,
        padding: 24,
        width: '100%',
        maxWidth: 400,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 12,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 24,
    },
});
