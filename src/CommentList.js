class CommentList {
  constructor () {
    this.comments = []
  }

  renderComments () {
    return this.comments.map( comment => comment.render())
  }

  addComment (text) {
    const comment = new Comment(text)
    this.comments.push(comment)
  }

  render () {
    return this.renderComments().join('')
  }
}
