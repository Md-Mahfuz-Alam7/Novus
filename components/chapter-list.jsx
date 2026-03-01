import React from "react";
import { FlatList, Pressable } from "react-native";
import { Box } from "./ui/box";
import { Text } from "./ui/text";
import Ionicons from "@expo/vector-icons/Ionicons";

const ChapterList = ({ chapters }) => {
    return (
        <Box className="gap-4">
            <Box className="flex-row items-center gap-2 mb-1">
                <Ionicons name="list" size={22} color="#2E5E99" />
                <Text size="xl" className="font-bold text-[#2E5E99]">Chapters</Text>
                <Box className="bg-[#2E5E99] px-2.5 py-0.5 rounded-full ml-1">
                    <Text size="sm" className="font-bold text-white">{chapters?.length || 0}</Text>
                </Box>
            </Box>
            <FlatList
                data={chapters}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <Pressable className="flex-row items-center gap-4 bg-white p-4 rounded-2xl mb-3 border border-secondary-300 shadow-sm">
                        <Box className="bg-[#2E5E99] h-12 w-12 rounded-xl items-center justify-center">
                            <Ionicons name="play-circle" size={24} color="white" />
                        </Box>
                        <Box className="flex-1">
                            <Text size="md" className="font-semibold text-gray-800">{item.title}</Text>
                            <Box className="flex-row items-center gap-1.5 mt-1.5">
                                <Ionicons name="time" size={15} color="#2E5E99" />
                                <Text size="sm" className="text-[#2E5E99] font-medium">{item.duration} {item.durationUnit || 'mins'}</Text>
                            </Box>
                        </Box>
                        <Ionicons name="chevron-forward" size={20} color="#2E5E99" />
                    </Pressable>
                )}
                scrollEnabled={false}
            />
        </Box>
    );
};

export default ChapterList;
