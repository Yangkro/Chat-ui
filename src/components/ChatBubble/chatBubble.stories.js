import React from "react";
import ChatBubble from ".";
import VoiceMessage from "components/VoiceMessage";
export default {
    title: "UI 组件/ChatBubble",
    component: ChatBubble,
    // 改变气泡的内边距问题，也可以在外层容器中添加padding
    decorators: [storyFn => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};
export const FromOthers = () => (
    <ChatBubble time="昨天 下午14:25">这是一条其他人发来的消息</ChatBubble>
)
export const Mine = () => (
    <ChatBubble time="昨天 下午14:25" type="mine">这是一条其他人发来的消息</ChatBubble>
)
export const VoiceMessageType = () => {
    return (
    <ChatBubble time="昨天 下午18:30">
        <VoiceMessage time = "01: 24" />
    </ChatBubble>
    )
}
export const VoiceMessageTypeMine = () => {
    return (
    <ChatBubble time="昨天 下午18:30" type="mine">
        <VoiceMessage time = "01: 24" type="mine" />
    </ChatBubble>
    )
}