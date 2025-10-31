import React from 'react';
import type { Blog } from "@/app/blogData"
import style from './blogStyles.module.css'
import Image from "next/image"
import Link from "next/link";

export default function BlogPreview(props : Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.rounded}>
      <h2 className = {style.blogTitle}> {props.title} </h2>
      <div>
				<Image src={props.image} alt={props.imageAlt} className = {style.blogImage} width={500} height={500} ></Image>
        <p>{props.description}</p>
				<p>Posted {props.date}</p>
        <Link href={"/blog-entries/"+props.slug}>See more</Link>
      </div>
	  </div>
  );
}