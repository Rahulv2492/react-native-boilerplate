const withReducer = (reducer_name, reducer = null) => (state = {}, action) => {
    switch (action.type) {
        case `REQUESTING_${reducer_name}`:
            return {
                ...state,
                ...action.state,
                isLoading: true,
                success: false,
                error: false,
            };
        case `SUCCESS_${reducer_name}`:
            return {
                ...state,
                ...action.state,
                isLoading: false,
                success: true,
                error: false,
            };
        case `FAILED_${reducer_name}`:
            return {
                ...state,
                ...action.state,
                isLoading: false,
                success: false,
                error: true,
            };
        case `INVALIDATE_${reducer_name}`:
            return {
                ...state,
                ...action.state,
                isLoading: false,
                success: false,
                error: false,
            };
        default:
            return reducer ? reducer(state, action) : state;
    }
};

export default withReducer;
