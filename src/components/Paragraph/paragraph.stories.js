import React from "react";
import Paragraph from ".";
export default {
    title: "排版/Paragraph",
    component: Paragraph,
};
export const Default = () => (
    // React只允许返回一个根标签，可以使用React.Fragment包裹，可以避免使用div包裹，简写形式为使用一对空的尖括号
    // <React.Fragment>
    //     <Paragraph>这是一个段落1</Paragraph>
    //     <Paragraph>这是一个段落2</Paragraph>
    // </React.Fragment>
    <>
    <Paragraph>这是一个段落3</Paragraph>
    <Paragraph>这是一个段落4</Paragraph>
    </>
)
export const Ellipsis = () => {
    return (
    <Paragraph ellipsis = "ellipsis">
在我们继续之前，请记住 Hook 是：
完全可选的。 你无需重写任何已有代码就可以在一些组件中尝试 Hook。但是如果你不想，你不必现在就去学习或使用 Hook。
100% 向后兼容的。 Hook 不包含任何破坏性改动。
现在可用。 Hook 已发布于 v16.8.0。
没有计划从 React 中移除 class。 你可以在本页底部的章节读到更多关于 Hook 的渐进策略。
Hook 不会影响你对 React 概念的理解。 恰恰相反，Hook 为已知的 React 概念提供了更直接的 API：props， state，context，refs 以及生命周期。稍后我们将看到，Hook 还提供了一种更强大的方式来组合他们。
如果不想了解添加 Hook 的具体原因，可以直接跳到下一章节开始学习 Hook！ 当然你也可以继续阅读这一章节来了解原因，并且可以学习到如何在不重写应用的情况下使用 Hook。
动机
Hook 解决了我们五年来编写和维护成千上万的组件时遇到的各种各样看起来不相关的问题。无论你正在学习 React，或每天使用，或者更愿尝试另一个和 React 有相似组件模型的框架，你都可能对这些问题似曾相识。
在组件之间复用状态逻辑很难
    </Paragraph>
   )

}
    