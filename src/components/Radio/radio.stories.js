import React from "react";
import Radio from ".";
export default {
    title: "UI 组件/Radio",
    component: Radio,
};
export const Default = () => <Radio>选项</Radio>
// Radio使用input标签渲染的，所有必须保持name属性一致，才能保证互斥
export const RadioGroup = () => (
    <Radio.Group label="请选择">
        <Radio name="option">选项1</Radio>
        <Radio name="option">选项2</Radio>
        <Radio name="option">选项3</Radio>
    </Radio.Group>
)