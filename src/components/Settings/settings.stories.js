import React from "react";
import Settings, { SettingsItem } from ".";
export default {
    title: "页面组件/Settings",
    component: Settings,
};
export const Default = () => <Settings />
export const WithoutDescription = () => (
    <SettingsItem label="这是一个没有描述的设置项"/>
)
export const WithDescription = () => (
    <SettingsItem label="这是一个有描述的设置项" description="我就是描述信息"/>
)
export const WithMenu = () => (
    <SettingsItem label="我有子菜单" type="menu"/>
)