import {actionTypes} from '../actions/actionCreators';

function postComments(state = [], action) {
    switch (action.type) {
        case actionTypes.addComment:
            return [...state, {
                user: action.author,
                text: action.comment,
            }];
        case actionTypes.removeComment:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

export default function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action),
        };
    }

    return state;
}
