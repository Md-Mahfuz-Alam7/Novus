import { Box } from "../../components/ui/box";
import { Button, ButtonText } from "../../components/ui/button";
import { Input, InputField } from "../../components/ui/input";
import { Spinner } from "../../components/ui/spinner";
import { Text } from "../../components/ui/text";
import { useToast } from "../../components/ui/toast";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    View
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { EmailVerificationModal } from "../../components/email-verification-modal";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const animationDelay = 60;
    const increaseDelayBy = 60;
    const animationDuration = 800;


    const toast = useToast();

    const onSubmit = () => {
        if (!name.trim() || !email.trim() || !password.trim()) {
            toast.show({
                placement: "top",
                duration: 3000,
                render: ({ id }) => {
                    return (
                        <View className="bg-warning-600 p-4 rounded-lg mx-4 mt-12">
                            <Text className="text-white font-medium">Please fill all the fields</Text>
                        </View>
                    );
                },
            });
            return;
        }

        

        

        setModalVisible(true);
    };

    const onSubmitCode = async (code) => {
        setLoading(true);
        // Simulate verification
        setTimeout(() => {
            setLoading(false);
            setModalVisible(false);
            router.push("/(main)/home");
        }, 1000);
    };
    return (
        <>
        <ImageBackground
            source={require("../../assets/images/background.jpeg")}
            resizeMode="cover"
            className="flex-1"
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                className="flex-1"
            >
                <SafeAreaView className="flex-1">
                    <Box className="flex-1 px-6">
                        {/* logo */}
                        <Animated.View
                            entering={FadeInDown.springify(animationDuration)}
                            className="items-center justify-center"
                        >
                            <Image
                                style={{ width: 400, height: 300 }}
                                source={require("../../assets/images/logo.png")}
                                resizeMode="contain"
                            />
                        </Animated.View>

                        {/* form */}
                        <Box className="gap-5 flex-1 justify-center -mt-8">
                            <Animated.Text
                                entering={FadeInDown.delay(animationDelay).springify(animationDuration)}
                                className="text-2xl text-center font-semibold text-[#2E5E99] mb-6"
                            >
                                Create Your Account
                            </Animated.Text>

                            <Animated.View
                                entering={FadeInDown.delay(animationDelay + increaseDelayBy * 1).springify(animationDuration)}
                            >
                                <Input
                                    variant="rounded"
                                    size="xl"
                                    className="w-full bg-white/90 border-0 h-14 px-4 rounded-full"
                                >
                                    <InputField
                                        value={name}
                                        onChangeText={setName}
                                        placeholder="Full Name"
                                        className="text-black"
                                        placeholderTextColor="#666"
                                    />
                                </Input>
                            </Animated.View>

                            <Animated.View
                                entering={FadeInDown.delay(animationDelay + increaseDelayBy * 2).springify(animationDuration)}
                            >
                                <Input
                                    variant="rounded"
                                    size="xl"
                                    className="w-full bg-white/90 border-0 h-14 px-4 rounded-full"
                                >
                                    <InputField
                                        value={email}
                                        onChangeText={setEmail}
                                        placeholder="Enter Your Email"
                                        className="text-black"
                                        placeholderTextColor="#666"
                                    />
                                </Input>
                            </Animated.View>

                            <Animated.View
                                entering={FadeInDown.delay(animationDelay + increaseDelayBy * 3).springify(animationDuration)}
                            >
                                <Input
                                    variant="rounded"
                                    size="xl"
                                    className="w-full bg-white/90 border-0 h-14 px-4 rounded-full"
                                >
                                    <InputField
                                        value={password}
                                        onChangeText={setPassword}
                                        placeholder="Create Password"
                                        secureTextEntry
                                        className="text-black"
                                        placeholderTextColor="#666"
                                    />
                                </Input>
                            </Animated.View>

                            <Animated.View
                                entering={FadeInDown.delay(animationDelay + increaseDelayBy * 4).springify(animationDuration)}
                            >
                                <Button
                                    onPress={onSubmit}
                                    className="rounded-full w-full h-14 bg-[#2E5E99]"
                                    size="xl"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <Spinner color="white" />
                                    ) : (
                                        <ButtonText className="text-white font-bold text-xl">
                                            Sign Up
                                        </ButtonText>
                                    )}
                                </Button>
                            </Animated.View>

                            <Animated.Text
                                entering={FadeInDown.delay(animationDelay + increaseDelayBy * 5).springify(animationDuration)}
                                className="text-center text-lg text-white/80 font-medium py-2"
                            >
                                or
                            </Animated.Text>

                            <Animated.View
                                entering={FadeInDown.delay(animationDelay + increaseDelayBy * 6).springify(animationDuration)}
                            >
                                <Button
                                    onPress={() => { }}
                                    className="rounded-full w-full h-14 bg-white border border-black"
                                    size="xl"
                                >
                                    <ButtonText className="text-black font-bold text-xl">
                                        Continue with Google
                                    </ButtonText>
                                </Button>
                            </Animated.View>

                            <Animated.View
                                entering={FadeInDown.delay(animationDelay + increaseDelayBy * 7).springify(animationDuration)}
                                className="flex-row justify-center mt-6"
                            >
                                <Text className="text-white/90 text-lg">Already have an account? </Text>
                                <Link href="/(auth)/login" asChild>
                                    <Text className="text-[#2E5E99] font-bold text-lg underline">Login</Text>
                                </Link>
                            </Animated.View>
                        </Box>
                    </Box>
                </SafeAreaView>
            </KeyboardAvoidingView>
            </ImageBackground>

            {modalVisible && (
                <EmailVerificationModal
                    isOpen={modalVisible}
                    onClose={() => setModalVisible(false)}
                    loading={loading}
                    onSubmitCode={onSubmitCode}
                />
            )}

        </>
    )
};

export default Signup;