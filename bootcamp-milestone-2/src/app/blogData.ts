export interface Blog {
    title: string
    date: string
    description: string
    image: string
    imageAlt: string
    slug: string
    text: string
}

const blogs: Blog[] = [
    {
        title: "Initial Testing Entry",
        date: "October 10th, 2025",
        description: "This is my blog. This is an example post, so here's a picture of how the site looked a couple days ago.",
        image: "/this_website.png",
        imageAlt: "Just the html here",
        slug: "firstEntry",
        text: "<p >There's the initial version of my website. Look how far we've come.<br>" + 
                "This is just an example post, but you clicked on it, so here's some exclusive " +
                "text. I am ambidextrous. I once had a pet fish. I enjoy reading Randall Munroe " +
                "and Isaac Asimov. <br><br><br> Wow, look how far down this goes." +
                "Imagine all the text you could fit here.</p>"
    },
    {
        title: "Second Testing Entry",
        date: "October 10th, 2025",
        description: "I am creating a typescript function to make these interactable. Here's how the site looks now.",
        image: "/website_1.1.png",
        imageAlt: "second page version",
        slug: "second-entry",
        text: "<p >All right! Website is just about done. Here's a look at what " +
                "the progress is right now (I figure I should archive the versions " +
                "it goes through). I have typescript finished, and I've done a bit " +
                "of polish on the site's shapes, types and colors with css.</p><p>" +
                "For now, I'm not being super fussy about the appearance, because I " +
                "know the next assignment is to tear it down andstart from the top " +
                "with React.<br>Hope you've enjoyed the look! Have a nice day.</p>"
    },
    {
        title: "Milestone 2 Update",
        date: "October 30th, 2025",
        description: "Refactoring in React is nearly finished! Adding another blog entry to track progress.",
        image: "/website_2.0.png",
        imageAlt: "appearance mostly unchanged",
        slug: "third-entry",
        text: ""
    }
];

export default blogs;