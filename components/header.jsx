import React from "react";
import { View } from "react-native";
import { Text } from "./ui/text";

const Header = ({ title }) => {
    return (
        <View>
            <Text size="xl">{title}</Text>
        </View>
    );
};

export default Header;
