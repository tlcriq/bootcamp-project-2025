import BlogPreview from '@/components/blogPreview';
import blogs from "@/app/blogData";

export default function Blog() {
  return (
        <main>
            <h1 className = "page-title">
                Blog
            </h1>

            [Bloggin' it]
            <div id = "blog-entries">
                {blogs.map( (blog) => 
                  <BlogPreview
                  
                  // These are the props we are passing in
                  key={blog.title}
                  title={blog.title}
                  description={blog.description}
                  image={blog.image}
                  imageAlt={blog.imageAlt}
                  date={blog.date}
                  slug={blog.slug}
                  text=""
                  />
                )}
            </div>
        </main>
  )
}