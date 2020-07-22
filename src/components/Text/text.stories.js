import React from "react";
import Text from ".";
export default {
    title: "排版/Text",
    component: Text,
};
export const Default = () => <Text>默认</Text>
export const Secondary = () => <Text type="secondary">次要文本</Text>
export const Medium = () => <Text size="medium">medium文本</Text>
export const LargeAndBold = () => {
    return (
    <Text size="large" bold>
    large 加粗文本
    </Text>
    )
}
