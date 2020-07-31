import { useTrail } from 'react-spring'
// 自定义的hooks动画函数
// 接收项目列表的数量
export default function useStaggeredList(number) {
    // 通过useTrail来设置动画
    const trailAnimes = useTrail(number, {
      transform: "translate3d(0px, 0px, 0px)",
      from: { transform: "translate3d(-50px, 0px, 0px)" },
      config: {
        mass: 0.8,
        tension: 280,
        friction: 20,
      },
      delay: 200,
    })
  return trailAnimes;
}