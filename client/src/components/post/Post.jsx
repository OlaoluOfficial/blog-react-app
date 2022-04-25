import './post.css';

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus facere
        delectus expedita cupiditate dolorum dolorem tempore animi repellendus
        eaque consectetur, dicta, vero, harum iusto et voluptates ad explicabo
        aliquid odit recusandae iste quis voluptatem voluptate? Recusandae
        animi, exercitationem fuga maxime nostrum praesentium beatae possimus
        voluptas nesciunt quia autem distinctio modi!
      </p>
    </div>
  );
}
