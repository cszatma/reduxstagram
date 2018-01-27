import { actionTypes } from '../actions/actionCreators';

export default function posts(state = [], action) {
    if (action.type === actionTypes.incrementLikes) {
        const index = action.index;
        return [
            ...state.slice(0, index),
            {
                ...state[index],
                likes: state[index].likes + 1,
            },
            ...state.slice(index + 1),
        ];
    } else {
        return state;
    }
}
