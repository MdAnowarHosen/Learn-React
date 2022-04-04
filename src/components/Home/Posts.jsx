import React, { PureComponent } from "react";
const axios = require("axios");
export class Posts extends PureComponent {
  // Pure Component || to get that, type "rpce"

  state = {
    posts: []
  };
  componentDidMount() {
    // Make a request for a user with a given ID
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // handle success
        this.setState({ posts: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  render() {
    const posts = this.state.posts;
    const allposts = posts.map((post, idx) => {
      return (
        <div>
          <div className="h3 text-dark text-decoration-none mb-2">
            <a key={idx}>{post.title}</a>
          </div>

          <br />
          <p>{post.body}</p>
        </div>
      );
    });
    return (
      <div>
        <hr />
        <div>{allposts}</div>
      </div>
    );
  }
}

export default Posts;
