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
        title: "Initial testing entry",
        date: "October 10th, 2025",
        description: "This is my blog. This is an example post, so here's a picture of how the site looked a couple days ago.",
        image: "this_website.png",
        imageAlt: "Just the html here",
        slug: "first-entry"
    },
    {
        title: "Second testing entry",
        date: "October 10th, 2025",
        description: "I am creating a typescript function to make these interactable. Here's how the site looks now.",
        image: "website_1.1.png",
        imageAlt: "second page version",
        slug: "second-entry"
    }
];

export default blogs;