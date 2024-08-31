export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <form className="contact-form">
                <h6 className="title">Email:</h6>
                <input className="input field" type="text" />
                <h6 className="title">Subject:</h6>
                <input className="input field" type="text" />
                <h6 className="title">Body:</h6>
                <textarea className="input body"></textarea>
                <input className="send-btn" type="submit" value="Send" />
            </form>
        </>
    );
}