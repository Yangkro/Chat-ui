import React from "react";
import VoiceMessage from ".";
export default {
    title: "UI 组件/VoiceMessage",
    component: VoiceMessage,
};
export const Default = () => <VoiceMessage time="13: 25" />
export const MineVoiceMessage = () => {
    return (
        <VoiceMessage time="13: 25" type="mine"/>
    )
}