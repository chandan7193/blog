import React,{Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component{

  componentDidMount(){
      this.props.fetchPosts();
  }

  renderPosts(){
    console.log("Inside renderPosts",this.props.posts)
    return _.map(this.props.posts, post =>{
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render(){
    console.log("inseid",this.props.posts);
    return(
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }

}

function mapStateToProps(state){
  return { posts: state.posts}
}

export default connect (null, {fetchPosts}) (PostsIndex);
