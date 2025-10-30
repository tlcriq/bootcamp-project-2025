import React from 'react';
import type { Blog } from "@/app/blogData"
import style from './blogPreview.module.css'
import Image from "next/image"

export default function BlogPreview(props : Blog) {
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones
    <div className={style.div}>
      <h3>{props.title}</h3>
      <div>
				<Image src={"./@/@/@/public/"+props.image} alt={props.imageAlt} width={500} height={500} ></Image>
        <p>{props.description}</p>
				<p>Posted {props.date}</p>
      </div>
	  </div>
  );
}