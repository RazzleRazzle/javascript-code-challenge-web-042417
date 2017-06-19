$(document).ready(function(){
  class Comment {
    constructor(text) {
      this.text = text
    }

    render () {
      return(`<li>${this.text}</li>`)
    }
  }

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

  class App {
    constructor() {
      this.myContainer = document.querySelector("#comment-list")
      this.myButton = document.querySelector("#button")
      this.myText = document.querySelector('.form-field')
      this.commentList = new CommentList()
      this.myButton.addEventListener('click', this.goGoGo.bind(this))
    }

    goGoGo() {
      event.preventDefault()
      const myInput = this.myText.value
      this.commentList.addComment(myInput)
      this.render()
    }

    render() {
      this.myContainer.innerHTML = this.commentList.render()
    }
  }

  const JakesDopeCommentList = new App()

  JakesDopeCommentList.render()
})
