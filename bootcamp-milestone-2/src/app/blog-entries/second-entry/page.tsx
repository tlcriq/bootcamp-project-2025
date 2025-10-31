import BlogEntry from '@/components/blogEntry';
import blogs from "@/app/blogData";

export default function SecondEntry() {
  return (
    <main className="rounded">
        <BlogEntry
            key={blogs[1].title}
            title={blogs[1].title}
            description={blogs[1].description}
            image={blogs[1].image}
            imageAlt={blogs[1].imageAlt}
            date={blogs[1].date}
            slug={blogs[1].slug}
        />
        <p >
            All right! Website is just about done. Here's a look at 
            what the progress is right now (I figure I should archive 
            the versions it goes through). I have typescript finished, 
            and I've done a bit of polish on the site's shapes, types and colors
            with css.
            <br />
            For now, I'm not being super fussy about the appearance, 
            because I know the next assignment is to tear it down and
            start from the top with React.
            <br />
            Hope you've enjoyed the look! Have a nice day.
        </p>
    </main>
  );
}