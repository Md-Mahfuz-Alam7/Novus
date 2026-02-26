import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Text } from "@/components/ui/text";
import { useToast } from "@/components/ui/toast";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform
} from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const animationDelay = 60;
    const increaseDelayBy = 60;
    const animationDuration = 800;

    const toast = useToast();


    const onSubmit = async () => {
        router.push("/(main)/home");

        // if (!email.trim() || !password.trim()) {
        //     toast.show({
        //         description: "Please fill all the fields",
        //     });
        //     return;
        // }
        // good to go

    };

    return (
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
                            className="items-center justify-center "
                        >
                            <Image
                                style={{ width: 400, height: 300 }}
                                source={require("../../assets/images/logo.png")}
                                resizeMode="contain"
                            />
                        </Animated.View>

                        {/* form */}
                        <Box className="gap-5 flex-1 justify-center -mt-5">
                            <Animated.Text
                                entering={FadeInDown.delay(animationDelay).springify(animationDuration)}
                                className="text-2xl text-center font-semibold text-[#2E5E99] mb-6"
                            >
                                Login To Your Account
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
                                        value={email}
                                        onChangeText={setEmail}
                                        placeholder="Enter Your Email"
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
                                        value={password}
                                        onChangeText={setPassword}
                                        placeholder="Enter Your Password"
                                        secureTextEntry
                                        className="text-black"
                                        placeholderTextColor="#666"
                                    />
                                </Input>
                            </Animated.View>

                            <Animated.View
                                entering={FadeInDown.delay(animationDelay + increaseDelayBy * 3).springify(animationDuration)}
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
                                            Login
                                        </ButtonText>
                                    )}
                                </Button>
                            </Animated.View>

                            <Animated.Text
                                entering={FadeInDown.delay(animationDelay + increaseDelayBy * 4).springify(animationDuration)}
                                className="text-center text-lg text-white/80 font-medium py-2"
                            >
                                or
                            </Animated.Text>

                            <Animated.View
                                entering={FadeInDown.delay(animationDelay + increaseDelayBy * 5).springify(animationDuration)}
                            >
                                <Button
                                    onPress={() => { }}
                                    className="rounded-full w-full h-14 bg-white border border-black"
                                    size="xl"
                                >
                                    {/* Placeholder for Google Icon */}
                                    <ButtonText className="text-black font-bold text-xl">
                                        Continue with Google
                                    </ButtonText>
                                </Button>
                            </Animated.View>

                            <Animated.View
                                entering={FadeInDown.delay(animationDelay + increaseDelayBy * 6).springify(animationDuration)}
                                className="flex-row justify-center mt-6"
                            >
                                <Text className="text-white/90 text-lg">Do not have an account? </Text>
                                <Link href="/(auth)/signup" asChild>
                                    <Text className="text-[#2E5E99] font-bold text-lg underline">Sign Up</Text>
                                </Link>
                            </Animated.View>
                        </Box>
                    </Box>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </ImageBackground>
    )
};

export default Login;
