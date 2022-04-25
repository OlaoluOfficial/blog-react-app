import Sidebar from '../../components/sidebar/Sidebar';
import './singlePost.css';

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Olaolu</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quo delectus earum aspernatur sequi, consequatur ducimus repellat ut
          provident necessitatibus suscipit dolorum! Animi, sed pariatur labore
          excepturi maiores quas ea atque recusandae deleniti tenetur natus,
          repellendus quibusdam iusto beatae ipsa accusamus ex delectus ipsum
          voluptatem odio perferendis laboriosam aut quasi. Vitae cumque, sed
          odit veniam maxime repellat laborum earum commodi eaque id, dolor eius
          similique in hic modi voluptatum perspiciatis fugit ducimus at
          inventore nobis iure aliquid. Nobis sint voluptatum qui ipsam ab
          laboriosam officia, ex quis distinctio. Soluta, dolore facilis commodi
          voluptate at mollitia praesentium et porro assumenda natus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quo delectus earum aspernatur sequi, consequatur ducimus repellat ut
          provident necessitatibus suscipit dolorum! Animi, sed pariatur labore
          excepturi maiores quas ea atque recusandae deleniti tenetur natus,
          repellendus quibusdam iusto beatae ipsa accusamus ex delectus ipsum
          voluptatem odio perferendis laboriosam aut quasi. Vitae cumque, sed
          odit veniam maxime repellat laborum earum commodi eaque id, dolor eius
          similique in hic modi voluptatum perspiciatis fugit ducimus at
          inventore nobis iure aliquid. Nobis sint voluptatum qui ipsam ab
          laboriosam officia, ex quis distinctio. Soluta, dolore facilis commodi
          voluptate at mollitia praesentium et porro assumenda natus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quo delectus earum aspernatur sequi, consequatur ducimus repellat ut
          provident necessitatibus suscipit dolorum! Animi, sed pariatur labore
          excepturi maiores quas ea atque recusandae deleniti tenetur natus,
          repellendus quibusdam iusto beatae ipsa accusamus ex delectus ipsum
          voluptatem odio perferendis laboriosam aut quasi. Vitae cumque, sed
          odit veniam maxime repellat laborum earum commodi eaque id, dolor eius
          similique in hic modi voluptatum perspiciatis fugit ducimus at
          inventore nobis iure aliquid. Nobis sint voluptatum qui ipsam ab
          laboriosam officia, ex quis distinctio. Soluta, dolore facilis commodi
          voluptate at mollitia praesentium et porro assumenda natus.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quo delectus earum aspernatur sequi, consequatur ducimus repellat ut
          provident necessitatibus suscipit dolorum! Animi, sed pariatur labore
          excepturi maiores quas ea atque recusandae deleniti tenetur natus,
          repellendus quibusdam iusto beatae ipsa accusamus ex delectus ipsum
          voluptatem odio perferendis laboriosam aut quasi. Vitae cumque, sed
          odit veniam maxime repellat laborum earum commodi eaque id, dolor eius
          similique in hic modi voluptatum perspiciatis fugit ducimus at
          inventore nobis iure aliquid. Nobis sint voluptatum qui ipsam ab
          laboriosam officia, ex quis distinctio. Soluta, dolore facilis commodi
          voluptate at mollitia praesentium et porro assumenda natus.
        </p>
      </div>
    </div>
  );
}
