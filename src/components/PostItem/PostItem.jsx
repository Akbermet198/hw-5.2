import './PostItem.css'

const PostItem = ({post})=>{
 
 return (
  <div className='post'>
<strong  >
 {post.name}
</strong>
<div  >({post.age} years old)</div>
  </div>
 )
}
export default PostItem