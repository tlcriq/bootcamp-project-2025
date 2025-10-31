import React from 'react';
import type { Blog } from "@/app/blogData"
import style from './blogStyles.module.css'
import Image from "next/image"

export default function BlogEntry(props : Blog) {
  return (
		<div>
            <h1 className = "page-title">
                {props.title}
            </h1>
            <div className = {style.canYouCenterADiv}>
                {props.date} 
            </div>
            <div className = {style.canYouCenterADiv}>
                <Image src={props.image} alt={props.imageAlt} className = {style.blogImage} width={500} height={500} ></Image>
                <img className={style.blogImage} src={style.image} alt={style.imageAlt} />
            </div>
        </div>
  );
}