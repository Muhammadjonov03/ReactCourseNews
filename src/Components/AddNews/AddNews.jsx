import React from 'react'

const AddNews = (props) => {
  debugger
  const newsTitle = React.createRef()
  const titleChange = (e) => {
    props.dispatch({type: 'ON_NEWS_TITLE_INPUT_CHANGED', text: e.target.value})
  }
  const onAddNewsClicked = () => {
    props.dispatch({type: 'ADD_NEWS'})
  }
  return (
    <div>
      <input ref={newsTitle} type="text" id="title"value={props.addNewsInputTitle} onChange={titleChange}/>
      <br />
      <button onClick={onAddNewsClicked}>Add News</button>
    </div>
  )
}

export default AddNews