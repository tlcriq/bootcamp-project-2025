export default function Contact() {
    return (
        <main>
            <div className="rounded">
                <h1 className = "page-title">
                    Contact
                </h1>

                <p className = "contact-info"> Or find me - Tate Criqui on LinkedIn, @tate_uplate on instagram!</p>
                <form id="contact-form">
                    Name: <input type="text" id="name" />
                    Email: <input type="email" id="email" />
                    Message:
                    <textarea>

                    </textarea>
                    <input type="submit" />
                </form>
            </div>
        </main>
    );
}