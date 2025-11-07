import Link from "next/link";

export default function Portfolio() {
    return (
    <main>
            <h1 className = "page-title">
                Portfolio
            </h1>

            <div className="project">
                <Link href="/">
                    <img src="website_1.1.png" alt="The website you're already at" height={400} className="project-image" />
                </Link>
                <div className="project-details">
                    <p className="project-name"> <strong>Personal Website</strong> </p>
                    <p className="project-description">
                        A website which shows my personal skills and experience
                    </p>
                    <Link href="/">LEARN MORE</Link>
                </div>
            </div>
    </main>
    );
}
