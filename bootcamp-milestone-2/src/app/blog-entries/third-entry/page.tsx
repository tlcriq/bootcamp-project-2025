import BlogEntry from '@/components/blogEntry';
import blogs from "@/app/blogData";

export default function ThirdEntry() {
  return (
    <main className="rounded">
        <BlogEntry
            key={blogs[2].title}
            title={blogs[2].title}
            description={blogs[2].description}
            image={blogs[2].image}
            imageAlt={blogs[2].imageAlt}
            date={blogs[2].date}
            slug={blogs[2].slug}
            text={blogs[2].text}
        />
        <p>
            Hey! Here's a quick update about this milestone (this may look more like patch notes than a blog):
        </p>
            <ul className="blog-list">
                <li>Everything has been refactored into React.</li>
                <li>The resume is now implemented as a pdf! Very proud of this</li>
                <li>A logo has been added.</li>
                <li>Blogs are now individual components.</li>
            </ul>
    </main>
    
  );
}