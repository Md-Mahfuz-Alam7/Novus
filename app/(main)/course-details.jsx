import ChapterList from "../../components/chapter-list";
import { Box } from "../../components/ui/box";
import { Text } from "../../components/ui/text";
import { Button, ButtonText } from "../../components/ui/button";
import { Spinner } from "../../components/ui/spinner";
import Ionicon from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { courseService } from "../../services/courseService";
import { urlFor } from "../../lib/sanity";


const CourseDetails = () => {
    const safearea = useSafeAreaInsets();
    const params = useLocalSearchParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCourse();
    }, [params.id]);

    const fetchCourse = async () => {
        try {
            setLoading(true);
            const data = await courseService.getCourseById(params.id);
            setCourse(data);
        } catch (error) {
            console.error('Error fetching course:', error);
        } finally {
            setLoading(false);
        }
    };

    const isPaid = course?.type === "premium";

    if (loading) {
        return (
            <Box className="flex-1 items-center justify-center">
                <Spinner size="large" />
            </Box>
        );
    }

    return (
        <Box className="px-7 flex-1" style={{ paddingTop: safearea.top }}>
            <Pressable onPress={() => router.back()} className="mb-5">
                <Ionicon name="chevron-back" size={32} color="#2E5E99" />
            </Pressable>
            <ScrollView
                contentContainerClassName="pb-7 gap-7"
                showsVerticalScrollIndicator={false}
            >
                {/* thumbnail */}
                <Box className="w-full h-60">
                    <Image
                        source={course?.image ? { uri: urlFor(course.image).url() } : require("../../assets/images/dummy-course.png")}
                        className="w-full h-full rounded-3xl object-cover"
                    />
                </Box>

                {/* title & desc */}
                <Box className="gap-2">
                    <Text size="2xl" className="font-semibold">
                        {course?.title}
                    </Text>
                    <Text size="sm" className="text-typography-400">
                        {course?.description}
                    </Text>
                </Box>

                {/* chapter */}

                {isPaid && (
                    <Box className="gap-7">
                        <Box className="bg-secondary-200/60 flex items-center py-14 border border-secondary-500 rounded-2xl">
                            <Box className="bg-[#488cdf] h-16 w-16 flex items-center justify-center rounded-full">
                                <Ionicon name="diamond-outline" size={30} color="white" />
                            </Box>
                            <Box className="items-center gap-1 mt-4">
                                <Text size="2xl" className="font-semibold">
                                    Go Premium
                                </Text>
                                <Text size="xs" className="text-typography-500 text-center px-4">
                                    Buy our premium Membership to watch this course.
                                </Text>
                            </Box>
                        </Box>

                        <Button
                            size="xl"
                            action="primary"
                            className="w-full rounded-full bg-[#488cdf]"
                        >
                            <ButtonText>Subscribe</ButtonText>
                        </Button>
                    </Box>
                )}

                <ChapterList chapters={course?.chapters || []} />
            </ScrollView>
        </Box>
    );
};

export default CourseDetails;
