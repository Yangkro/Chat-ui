import React from "react";
import Input from ".";
import Icon from "components/Icon";
import { ReactComponent as ClipIcon } from 'assets/icon/clip.svg';
import {ReactComponent as SmileIcon} from 'assets/icon/smile.svg';
export default {
    title: "UI 组件/Input",
    component: Input,
};
export const Default = () => <Input />
export const Search = () => <Input.Search />
// 有前缀图标和后缀图标的组件
export const WithAffix = () => {
    // <Input prefix={ <Icon icon={ClipIcon} color="#ccc" />} />
    return (
        <Input prefix={<Icon icon={ClipIcon} color="#ccc" />} suffix={<Icon icon={SmileIcon} color="#ccc" />}/>  
    )
}
export const InputTextWithLabel = () => {
    return (
        <Input.Text label="昵称" />
    )
}
export const InputTextWithoutLabel = () => {
    return (
        <Input.Text />
    )
}