import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from 'assets/icon/smile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faFolder, faSadCry, faSchool } from '@fortawesome/free-solid-svg-icons';
import { faWeixin } from "@fortawesome/free-brands-svg-icons";
export default {
    title: "UI 组件/Icon",
    component: Icon,
};
export const Default = () => <Icon icon={SmileIcon} />
export const bigSmile = () => {
    return <Icon icon={SmileIcon} height={50} width={50}/>
}
export const RedSmile = () => {
    return <Icon icon={SmileIcon} color="#f00" opacity={0.5}/>
}
export const FontAwesome = () => {
    return <FontAwesomeIcon icon={faCommentDots} />
}
export const FontAwesomeColor = () => {
    return < FontAwesomeIcon icon={faCommentDots} style={{ color: "#ccc" }}/>
}
export const FontAwesomeSizes = () => {
    return <div>
    < FontAwesomeIcon icon={faCommentDots} style={{ fontSize: 50 }} />
    < FontAwesomeIcon icon={faFolder} style={{ fontSize: 60 }} />
    < FontAwesomeIcon icon={faSadCry} style={{ fontSize: 70 }} opacity={0.3} />
    < FontAwesomeIcon icon={faSchool} style={{fontSize: 80}}/> 
    </div>
}
export const SocialIcons = () => {
    return (
        <div>
          <Icon.Social
            icon={faWeixin}
            bgColor="#F06767"
            href="http://www.weibo.com"
          />
        </div>
    )
}