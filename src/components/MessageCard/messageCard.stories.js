import React from "react";
import MessageCard from ".";
import face1 from "assets/images/face-male-1.jpg"
export default {
    title: "UI 组件/MessageCard",
    component: MessageCard,
};
export const Default = () => (
    <MessageCard 
        avatarSrc={face1}
        name="李明浩"
        avatarStatus= "online"
        statusText = "在线"
        time = "2 小时之前"
        message="即使在最深的谷底，也要学会仰望星空"
        unreadCount = {2}
    />
)
export const Active = () => (
    <MessageCard 
        avatarSrc={face1}
        name="李明浩"
        avatarStatus= "online"
        statusText = "在线"
        time = "2 小时之前"
        message="即使在最深的谷底，也要学会仰望星空"
        unreadCount={2}
        active
    />
)

export const Replied = () => (
    <MessageCard 
        avatarSrc={face1}
        name="李明浩"
        avatarStatus= "online"
        statusText = "在线"
        time = "2 小时之前"
        message="即使在最深的谷底，也要学会仰望星空"
        unreadCount={2}
        active
        replied
    />
)
export const RepliedInactive = () => (
    <MessageCard 
        avatarSrc={face1}
        name="李明浩"
        avatarStatus= "online"
        statusText = "在线"
        time = "2 小时之前"
        message="即使在最深的谷底，也要学会仰望星空"
        unreadCount={2}
        replied
    />
)