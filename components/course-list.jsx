import React from "react";
import { FlatList, Image, Pressable } from "react-native";
import { Box } from "./ui/box";
import { Text } from "./ui/text";
import { router } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { urlFor } from "../lib/sanity";

const CourseList = ({ data }) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item)=> item?._id}
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
                        id: item?._id,
                        title: item?.title,
                        description: item?.description,
                    },
                })
            }
            className="flex-1 gap-4 w-full bg-secondary-200 p-2 pb-5 rounded-[28px] border border-secondary-300 mb-4"
            >
                {/* course thumbnail */}
                <Box className="relative w-full h-60">
                    <Image
                        source={item?.image ? { uri: urlFor(item.image).url() } : require("../assets/images/dummy-course.png")}
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

                    <Box className="flex-row items-center gap-4 mt-2">
                        <Box className="bg-[#2E5E99] px-3 py-1.5 rounded-full">
                            <Text size="sm" className="text-white font-semibold">{item?.price > 0 ? `$${item?.price}` : 'Free'}</Text>
                        </Box>
                        <Box className="flex-row items-center gap-1.5 bg-white px-3 py-1.5 rounded-full">
                            <Ionicons name ="time-outline" size={16} color="#2E5E99" />
                            <Text size="sm" className="text-[#2E5E99] font-semibold">
                                {item?.duration}h
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Pressable>
    );
};

export default CourseList;