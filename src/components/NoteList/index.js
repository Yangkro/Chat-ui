import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteList, { Notes }  from './style'
import FilterList from 'components/FilterList'
import NoteCard from 'components/NoteCard'
import useStaggeredList from 'hooks/useStaggeredList'
import { animated } from 'react-spring'
// 导入数据文件
import noteData from "data/notes"
function NoteList({
    children,
  ...rest }) {
  const trailAnimes = useStaggeredList(9)
    return (
        <StyledNoteList{...rest}>
        <FilterList
          options={["最新笔记优先", "最近改动优先"]}
          actionLabel="添加笔记">
          <Notes>
            {noteData.map((note, i) => {
              return (
                <animated.div key={note.id} style={trailAnimes[i]}>
                  <NoteCard key={note.id} note={note}/>
                </animated.div>
                
              )
            })}
          </Notes>
          </FilterList>
        </StyledNoteList>
    )
}
NoteList.propTypes = {
  children:PropTypes.any,
}

export default NoteList