import React, { Component } from 'react';

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.renderComment= this.renderComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderComment(comment, index) {
        return (
            <div className="comment" key={index}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment"
                            onClick={this.props.removeComment.bind(null, this.props.params.postId, index)}>
                        &times;
                    </button>
                </p>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        const postId = this.props.params.postId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    }

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
}
