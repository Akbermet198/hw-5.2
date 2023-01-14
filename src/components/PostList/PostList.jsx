import PostItem from "../PostItem/PostItem"
import './PostList.css'

const PostList =({posts})=>{
//  console.log(posts)
 return (
  <div className="postList">
{posts.map(post=>(
 <PostItem post ={post} key={post.name}/>
))}
  </div>
 )
}
export default PostList