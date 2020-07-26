import React from "react";
import FilterList from ".";
export default {
    title: "页面组件/FilterList",
    component: FilterList,
};
export const Default = () => <FilterList           opyions={["最新消息优先", "在线好友优先"]}
actionLabel="创建会话"></FilterList>