export const StatusFilters = {
    All: 'all',
    Active: 'ongoing',
    Completed: 'expired',
  }
  
  const initialState = {
    status: StatusFilters.All,
    categorys: [],
  }
  
  export default function filtersReducer(state = initialState, action) {
    switch (action.type) {
      case 'filters/statusFilterChanged': {
        return {
         
          ...state,
          status: action.payload,
        }
      }
      case 'filters/categoryFilterChanged': {
        let { category, changeType } = action.payload
        const { categorys } = state
  
        switch (changeType) {
          case 'added': {
            if (categorys.includes(category)) {
            
              return state
            }
  
            return {
              ...state,
              categorys: state.categorys.concat(category)
            }
          }
          case 'removed': {
            return {
              ...state,
              categorys: state.categorys.filter(
                (existingCategory) => existingCategory !== category
              ),
            }
          }
          default:
            return state
        }
      }
      default:
        return state
    }
  }
  
  export const statusFilterChanged = (status) => ({
    type: 'filters/statusFilterChanged',
    payload: status,
  })
  
  export const categoryFilterChanged = (category, changeType) => {
    return {
      type: 'filters/categoryFilterChanged',
      payload: { category, changeType },
    }
  }
  