
"use client"
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './blog-card';
const { stripHtml } = require('string-strip-html');
// import { MediumClient } from 'medium-sdk-ts';



import React, { useEffect, useState } from 'react';
import axios from "axios";

// const medium = new MediumClient("2015607e6357629454219c22b2c5318afa9bedf412c48a54a242d26d0519c2448");
const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@namasricharan";
// const url ="https://medium.com/@yourhandle/latest?format=json  "
// const posts = await medium.getPosts('@namsricharan');

const textEllipsis = (str, length = 100, ending = '...') => {
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

const extractThumbnailFromMedium = (html) => {
  const figureRegex =
    /<figure[^>]*>(.*?)<img[^>]*src="([^"]*)"[^>]*>.*?<\/figure>/i;

  const match = figureRegex.exec(html);

  if (match && match.length >= 3) {
    return match[2];
  } else {
    return '';
  }
};

const formatMediumPost = (post) => {
  return {
    title: post.title.trim(),
    description: textEllipsis(
      stripHtml(post.content, {
        stripTogetherWithTheirContents: ['script', 'style', 'xml', 'figure'],
      })
        .result.replace('\n', '')
        .trim()
    ),
    thumbnail:
      post.thumbnail ||
      extractThumbnailFromMedium(
        stripHtml(post.content, {
          ignoreTagsWithTheirContents: ['figure'],
          stripTogetherWithTheirContents: ['script', 'style', 'xml', 'p'],
        })
          .result.replace('\n', '')
          .trim()
      ),
    link: post.guid,
    categories: post.categories,
    publishedAt: new Date(post.pubDate),
  };
};

function getBlogs() {
  return axios.get(url)
    .then(response => response.data.items)
    .catch(error => {
      console.log(error);
      return [];
    });
}

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then(data => {
      setBlogs(data);
    });
  }, []);

  return (


    <div id='blogs' className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="spartan-font bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Blogs
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
        {
          blogs.slice(0, 3).map((blog, i) => (

            <BlogCard blog={formatMediumPost(blog)} key={i} />
          ))
        }
      </div>

      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/blog"
        >
          <span>View More

          </span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>

  );
};

export default Blog;