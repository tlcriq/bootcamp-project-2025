import BlogPreview from '@/components/blogPreview';
import connectDB from "@/database/db";
import BlogEntry from "@/database/blogSchema";

async function getBlogs() {
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await BlogEntry.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return null
	}
}


export default async function Blog() {
  const blogs = await getBlogs();

  return (
        <main>
            <h1 className = "page-title">
                Blog
            </h1>

            [Bloggin' it]
            <div id = "blog-entries">
                {blogs == null ?
                  <p> Couldn't access blogs </p> :
                  blogs.map( (blog) => 
                    <BlogPreview
                    
                    // These are the props we are passing in
                    key={blog.title}
                    title={blog.title}
                    description={blog.description}
                    image={blog.image}
                    imageAlt={blog.imageAlt}
                    date={blog.date}
                    slug={blog.slug}
                    />
                )}
            </div>
        </main>
  )
}
