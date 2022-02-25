export const PROFILE_POPUP_TOGGLED_ACTION_TYPE = 'PROFILE_POPUP_TOGGLED_ACTION_TYPE' 
export const onProfilePopupToggledActionCreator = () => {
  return {type: PROFILE_POPUP_TOGGLED_ACTION_TYPE}
}

const headerReducer = (state, action) => {
  switch(action.type) {
    case PROFILE_POPUP_TOGGLED_ACTION_TYPE:
      state.profilePopupVisible = !state.profilePopupVisible
      return state
    default: return state
  }
}


export default headerReducer