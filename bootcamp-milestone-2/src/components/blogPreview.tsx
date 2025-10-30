import React from 'react';
import type { Blog } from "@/app/blogData"
import style from './blogPreview.module.css'
import Image from "next/image"
import Link from "next/link";

export default function BlogPreview(props : Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className="rounded">
      <h2 className = "blog-title">{props.title}</h2>
      <div>
				<Image src={props.image} alt={props.imageAlt} className = "blogImage" width={500} height={500} ></Image>
        <p>{props.description}</p>
				<p>Posted {props.date}</p>
        <Link href={"/blogs/"+props.slug}>See more</Link>
      </div>
	  </div>
  );
}