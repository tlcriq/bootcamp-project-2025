export interface Blog {
    title: string
    date: string
    description: string
    image: string
    imageAlt: string
    slug: string
}

const blogs: Blog[] = [
    {
        title: "Initial Testing Entry",
        date: "October 10th, 2025",
        description: "This is my blog. This is an example post, so here's a picture of how the site looked a couple days ago.",
        image: "/this_website.png",
        imageAlt: "Just the html here",
        slug: "first-entry"
    },
    {
        title: "Second Testing Entry",
        date: "October 10th, 2025",
        description: "I am creating a typescript function to make these interactable. Here's how the site looks now.",
        image: "/website_1.1.png",
        imageAlt: "second page version",
        slug: "second-entry"
    },
    {
        title: "Milestone 2 Update",
        date: "October 30th, 2025",
        description: "Refactoring in React is nearly finished! Adding another blog entry to track progress.",
        image: "/website_2.0.png",
        imageAlt: "appearance mostly unchanged",
        slug: "third-entry"
    }
];

export default blogs;