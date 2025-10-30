import BlogPreview from '@/components/blogPreview';

export default function Blog() {
  return (
        <main>
            <h1 className = "page-title">
                Blog
            </h1>

            Bloggin' it
            <div id = "blog-entries">
                {blogs.map(blog => 
      <BlogPreview // This is how we call the component
			
			// These are the props we are passing in
      name={blog.name}
      description={blog.description}
      image={blog.image}
      posted={blog.posted}
      text={blog.text}
    />
  )}
            </div>
        </main>
  )
}