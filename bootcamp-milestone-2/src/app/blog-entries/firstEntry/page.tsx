import BlogEntry from '@/components/blogEntry';
import blogs from "@/app/blogData";

export default function FirstEntry() {
  return (
    <main className="rounded">
      <BlogEntry
          key={blogs[0].title}
          title={blogs[0].title}
          description={blogs[0].description}
          image={blogs[0].image}
          imageAlt={blogs[0].imageAlt}
          date={blogs[0].date}
          slug={blogs[0].slug}
      />
      <p >
        There's the initial version of my website. Look how far we've come.
        <br />
        This is just an example post, but you clicked on it, so here's some
        exclusive text. I am ambidextrous. I once had a pet fish. 
        I enjoy reading Randall Munroe and Isaac Asimov.
        <br /><br /><br />
        Wow, look how far down this goes. Imagine all the text you could fit here.
      </p>
    </main>
  );
}