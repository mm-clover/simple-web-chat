type Action = {
    type: string
    payload?: any
}
export const chatReducer = (state: any, action: Action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                data: [
                    ...state.data,
                    action.payload
                ],
                checkNew: true
            };
        case 'GET_MESSAGES':
            let localData = localStorage.getItem("messages")
            return {
                data: localData ? JSON.parse(localData) : [],
                checkNew: false,
            };
        default:
            return state
    }
};