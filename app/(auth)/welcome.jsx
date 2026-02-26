import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import { Image, ImageBackground, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

const Welcome = () => {
    const animationDelay = 100;
    const increaseDelayBy = 100;
    const animationDuration = 1000;

    return (
        <ImageBackground
            source={require("../../assets/images/background.jpeg")}
            resizeMode="cover"
            className="flex-1 justify-center items-center"
        >
            <View className="flex-1 justify-around -mt-5 w-full items-center">
                {/* logo */}
                <Animated.View
                    entering={FadeInDown.springify(animationDuration)}
                    className="gap-4 flex-row items-center justify-center p-4"
                >
                    <Image
                        source={require("../../assets/images/logo.png")}
                        style={{ width: 400, height: 300 }}
                        resizeMode="contain"
                    />
                </Animated.View>

                {/* get started */}
                <View className="gap-8 items-center w-full">
                    <Animated.View
                        entering={FadeInDown.delay(
                            animationDelay + increaseDelayBy * 1
                        ).springify(animationDuration)}
                        className="gap-2 items-center"
                    >
                        <Text size="4xl" bold className="text-white text-center">
                            Start Your Learning
                        </Text>
                        <Text size="4xl" className="text-white text-center">
                            Journey Here!
                        </Text>
                    </Animated.View>

                    <Animated.View
                        entering={FadeInDown.delay(
                            animationDelay + increaseDelayBy * 2
                        ).springify(animationDuration)}
                        className="gap-4 flex-row items-center justify-center"
                    >
                        <Button
                            onPress={() => router.push("/(auth)/login")}
                            size="xl"
                            className="rounded-full bg-white px-24 py-2"
                            action="primary"
                        >
                            <ButtonText className="text-typography font-bold text-2xl">
                                Get Started
                            </ButtonText>
                        </Button>
                    </Animated.View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Welcome;