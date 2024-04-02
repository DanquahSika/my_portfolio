import React from "react";
import svgback from "../../assets/images/svgback.svg";
import featured from "../../assets/images/featured.jpg";
import { Link } from "react-router-dom";
import blogimage from "../../assets/images/blogimg1.jpg";
const Blog = () => {
  return (
    <div className="background relative h-full">
      {" "}
      <div className="featured-blog relative">
        <div className="image-blog">
          <img src={featured} alt="" />
        </div>
        <div className="blog-text absolute top-0 left-10 p-4 text-white text-center">
          <h1 text className="text-3xl font-bold text-center">
            Learn Javascript the right way
          </h1>
        </div>
        <button className="absolute bottom-0 left-0 rounded border-white border-2 p-2 m-4 hover:bg-white hover:text-violet-900">
          <Link to="https://www.freecodecamp.org/news/full-javascript-course-for-beginners/">
            Read more
          </Link>
        </button>
      </div>
      <h3 className="text-center text-2xl p-2">Trending blog articles</h3>
      <div className="flex justify-center items-center p-3 flex-wrap">
        <div className="blog-example w-96 mx-3">
          <div className="image-blog">
            <img src={blogimage} alt="" />
          </div>
          <div className="blog-text">
            <h5 className="text-center underline underline-offset-8 pb-1">
              Learn Javascript the right way
            </h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum odio
            fugiat recusandae et, eius nostrum, voluptate dicta facere numquam
            modi fuga, nihil architecto cumque dignissimos quisquam deserunt
            assumenda aliquid magnam.
          </div>

          <button className="rounded border-white border-2 p-2 hover:bg-white  hover:text-violet-900">
            <Link to="https://medium.com/javascript-scene/learn-javascript-b631a4af11f2">
              Read More
            </Link>
          </button>
        </div>
        <div className="blog-example w-96 mx-3">
          <div className="image-blog">
            <img src={blogimage} alt="" />
          </div>
          <div className="blog-text">
            <h5 className="text-center underline underline-offset-8 pb-1">
              Learn to code all-day
            </h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum odio
            fugiat recusandae et, eius nostrum, voluptate dicta facere numquam
            modi fuga, nihil architecto cumque dignissimos quisquam deserunt
            assumenda aliquid magnam.
          </div>
          <button className="rounded border-white border-2 p-2 hover:bg-white hover:text-violet-900">
            <Link to="https://medium.com/javascript-scene/learn-javascript-b631a4af11f2">
              Read More
            </Link>
          </button>
        </div>
        <div className="blog-example w-96 mx-3">
          <div className="image-blog">
            <img src={blogimage} alt="" />
          </div>
          <div className="blog-text">
            <h5 className="text-center underline underline-offset-8 pb-1 ">
              Learn to code all-day
            </h5>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum odio
            fugiat recusandae et, eius nostrum, voluptate dicta facere numquam
            modi fuga, nihil architecto cumque dignissimos quisquam deserunt
            assumenda aliquid magnam.
          </div>
          <button className="rounded border-white border-2 p-2 hover:bg-white  hover:text-violet-900">
            <Link to="https://medium.com/javascript-scene/learn-javascript-b631a4af11f2">
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
