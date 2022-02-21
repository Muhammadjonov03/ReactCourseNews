import React from 'react'

const AddNews = (props) => {
  const newsTitle = React.createRef()
  const titleChange = (e) => {
    props.dispatch(props.onNewsTitleInputChangeActionCreator(e.target.value))
  }
  const onAddNewsClicked = () => {
    props.dispatch(props.addNewsActionCreator())
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