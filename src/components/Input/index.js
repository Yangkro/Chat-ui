import React from 'react'
import PropTypes from 'prop-types'
import StyledInput, { InputContainer,Prefix, Suffix } from './style'
import Icon from 'components/Icon'
import { ReactComponent as SearchIcon }from 'assets/icon/search.svg';
import { useTheme } from 'styled-components';
import InputText from './InputText';
// preffix前缀图标 suffix为后缀图标
function Input({
  placeholder = "请输入内容...",
  prefix,
  suffix,
    ...rest }) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder}/>
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
    )
}
function Search({ placeholder = "请输入内容...", ...rest }) {
  // 通过useTheme来访问theme中的属性
  const theme = useTheme()
  return (
    <Input 
      placeholder={placeholder}
      prefix={<Icon icon={SearchIcon} width={18} height={18} color={theme.gray3}/>}
      {...rest}
    />
  )
}
//将search组件作为Input组件的子组件导出
Input.Search = Search
// 将InputText作为子组件导出
Input.Text = InputText
Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any
}

export default Input