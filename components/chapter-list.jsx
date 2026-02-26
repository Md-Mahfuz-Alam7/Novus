import React from "react";
import { FlatList, Pressable } from "react-native";
import { Box } from "./ui/box";
import { Text } from "./ui/text";
import Ionicons from "@expo/vector-icons/Ionicons";

const ChapterList = ({ chapters }) => {
    return (
        <Box className="gap-3">
            <Box className="flex-row items-center gap-2 mb-2">
                <Ionicons name="list" size={20} color="#488cdf" />
                <Text size="xl" className="font-semibold" style={{ color: "#488cdf" }}>Chapters</Text>
                <Text size="xl" className="font-semibold" style={{ color: "#488cdf" }}>{chapters?.length || 0}</Text>
            </Box>
            <FlatList
                data={chapters}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable className="flex-row items-center gap-3 bg-secondary-100 p-4 rounded-2xl mb-3">
                        <Box className="bg-[#488cdf] h-10 w-10 rounded-full items-center justify-center">
                            <Ionicons name="book-outline" size={20} color="white" />
                        </Box>
                        <Box className="flex-1">
                            <Text size="md" className="font-medium">{item.title}</Text>
                            <Box className="flex-row items-center gap-1 mt-1">
                                <Ionicons name="time-outline" size={14} color="rgba(0,0,0,0.5)" />
                                <Text size="sm" className="text-secondary-500">{item.duration}</Text>
                            </Box>
                        </Box>
                    </Pressable>
                )}
                scrollEnabled={false}
            />
        </Box>
    );
};

export default ChapterList;
