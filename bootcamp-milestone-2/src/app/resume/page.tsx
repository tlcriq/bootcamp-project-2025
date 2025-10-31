export default function Resume() {
    return (
        <main>
            <h1 className = "page-title">
                Resume
            </h1>

            <div className="button">
                <a href="resume.pdf" download> Download resume </a>
            </div>
            <object data="resume.pdf" type="application/pdf" width="85%" height="1400px" className="resume">
                <p>Alternative text - include a link <a href="resume.pdf">to the PDF!</a></p>
            </object>

        </main>
    );
}