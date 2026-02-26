import CourseList from "../../components/course-list";
import SettingsMenu from "../../components/setting-menu";
import { Box } from "../../components/ui/box";
import { Input, InputField, InputSlot } from "../../components/ui/input";
import { Spinner } from "../../components/ui/spinner";
import { Text } from "../../components/ui/text";
import { dummyCourses } from "../../constants/data";

import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const home = () => {
    const safearea = useSafeAreaInsets();
    const [loading, setLoading] = useState(false);
    const [courses, setCourses] = useState(dummyCourses);

    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedQuery(query), 500);
        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        if (debouncedQuery) {
            const filtered = dummyCourses.filter(course => 
                course.title.toLowerCase().includes(debouncedQuery.toLowerCase())
            );
            setCourses(filtered);
        } else {
            setCourses(dummyCourses);
        }
    }, [debouncedQuery]);

    return (
        <View className="flex-1 px-7" style={{ paddingTop: safearea.top }}>
            {/* header */}

            <Box className="flex-row items-center justify-between ">
                {/* name & avatar */}
                <Box className="flex-row items-center gap-3">
                    <Image
                        source={require("../../assets/images/avatar.png")}
                        className="w-12 h-12 rounded-full"
                    />
                    <Box>
                        <Text size="md" className="text-secondary-500">
                            Welcome !
                        </Text>
                        <Text size="lg" className="font-medium">
                            Mihsan Alam
                        </Text>
                    </Box>
                </Box>

                {/* menu */}
                <SettingsMenu />
            </Box>

            {/* search */}
            <Box className="mt-12">
                <Input
                    variant="rounded"
                    size="md"
                    className="w-full h-16 pl-3 border border-secondary-600 bg-secondary-200"
                >
                    <InputSlot className="pl-3">
                        <Feather name="search" size={24} color="rgba(0,0,0,0.8) " />
                    </InputSlot>
                    <InputField
                        placeholder="Search for courses"
                        value={query}
                        onChangeText={setQuery}
                    />
                </Input>
            </Box>
            {/* course list */}

            <Box className="flex-1 mt-10">
                <Box className="flex-row justify-between items-center mb-3">
                    <Text size="2xl" className="font-medium">
                        Explore Courses
                    </Text>
                    <Pressable onPress={() => router.push("/courses")}>
                        <MaterialCommunityIcons
                            name="arrow-right"
                            size={22}
                            color="rgba(0,0,0,0.7)"
                        />
                    </Pressable>
                </Box>

                {loading ? (
                    <Box className="mt-36">
                        <Spinner size="large" color="gray" />
                    </Box>
                ) : (
                    <CourseList data={courses} />
                )}
            </Box>
        </View>
    );
};

export default home;
