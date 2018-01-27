const actionTypes = {
    incrementLikes: 'INCREMENT_LIKES',
    addComment: 'ADD_COMMENT',
    removeComment: 'REMOVE_COMMENT',
};

// Increment
function increment(index) {
    return {
        type: actionTypes.incrementLikes,
        index,
    };
}

// Add comment
function addComment(postId, author, comment) {
    return {
        type: actionTypes.addComment,
        postId,
        author,
        comment,
    };
}

// Remove comment
function removeComment(postId, index) {
    return {
        type: actionTypes.removeComment,
        index,
        postId,
    };
}

const actions = {
    increment,
    addComment,
    removeComment,
};

export default actions;