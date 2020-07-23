import React from "react";
import ChatBubble from ".";
export default {
    title: "UI 组件/ChatBubble",
    component: ChatBubble,
};
export const Default = () => (
    <ChatBubble time="昨天 下午14:25">这是一条其他人发来的消息</ChatBubble>
)