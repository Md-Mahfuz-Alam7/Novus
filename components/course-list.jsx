import React from "react";
import { FlatList, Image, Pressable, StyleSheet } from "react-native";
import { Box } from "./ui/box";
import { Text } from "./ui/text";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

const CourseList = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item)=> item?.id}
            renderItem = {({item}) => <CourseCard item={item}/>}
            contentContainerClassName="pt-5"
            showsVerticalScrollIndicator= {false}
        />
    );
};

const CourseCard = ({ item }) => {
    return (
        <Pressable
            onPress= {() => 
                router.push({
                    pathname: "(main)/course-details",
                    params: {
                        id: item?.id,
                        title: item?.title,
                        description: item?.description,
                        thumbnailURL: item?.thumbnailURL,
                        type: item?.type,
                    },
                })
            }
            className="flex-1 gap-4 w-full bg-secondary-200 p-2 pb-5 rounded-[28px] border border-secondary-300"
            >
                {/* course thumbnail */}
                <Box className="relative w-full h-60">
                    <Image
                        source={require("../assets/images/dummy-course.png")}
                        className= "w-full h-full rounded-3xl object-cover"
                    />
                    <Box className="absolute h-full w-full items-center justify-center">
                        <Box className="bg-white/40 h-11 w-11 rounded-full items-center justify-center">
                            <Ionicons name="play" size={24} color="white" className="ml-1" />
                        </Box>
                    </Box>
                </Box>

                {/* course title */}
                <Box className="pl-2">
                    <Text size="lg" className="font-medium">
                        {item?.title}
                    </Text>

                    <Box className="flex-row items-center gap-4">
                        <Text size="sm" className="text-[#2E5E99]">{item?.type === 'free' ? 'Free' : 'Premium'}</Text>
                        <Box className="flex-row items-center gap-1">
                            <Ionicons name ="time-outline" className="mt-[1px]" size={14} color="rgba(0,0,0,0.5)" />
                        <Text size="sm" className="text-secondary-500">
                            4h, 20 mins 
                        </Text>
                        </Box>
                    </Box>
                </Box>
            </Pressable>
    );
};

export default CourseList;