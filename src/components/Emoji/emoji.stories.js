/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import Emoji from ".";
export default {
    title: "UI 组件/Emoji",
    component: Emoji,
};
export const Default = () => (
    <div>
        <Emoji label="smile">🙂</Emoji>
        <Emoji label="hello">😀</Emoji>
        <Emoji label="car">🚗</Emoji>
    </div>
   )