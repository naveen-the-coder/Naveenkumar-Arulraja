import "../styles/Contact.css";

import handshakeImage from "../assets/handshake.webp";

const Contact = () => {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const phone = "918056924997"; // international format without +
    const ua = typeof navigator !== "undefined" ? navigator.userAgent || "" : "";
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|Opera Mini|IEMobile/i.test(ua);

    if (isMobile) {
      // Try to open the WhatsApp app first, fallback to wa.me after a short delay
      window.location.href = `whatsapp://send?phone=${phone}`;
      setTimeout(() => {
        window.location.href = `https://wa.me/${phone}`;
      }, 800);
    } else {
      // Open WhatsApp Web for desktop/laptop
      window.open(`https://web.whatsapp.com/send?phone=${phone}`, "_blank");
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "saravanansankaralingam3@gmail.com";
    const ua = typeof navigator !== "undefined" ? navigator.userAgent || "" : "";
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|Opera Mini|IEMobile/i.test(ua);
    const subject = ""; // you can prefill subject if desired
    const body = ""; // you can prefill body if desired

    if (isMobile) {
      // Open native mail app via mailto
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    } else {
      // Open Gmail compose in a new tab for desktop users
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(gmailUrl, "_blank");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name?.value?.trim() || "";
    const email = form.elements.email?.value?.trim() || "";
    const message = form.elements.message?.value?.trim() || "";

    const phone = "918056924997";
    const ua = typeof navigator !== "undefined" ? navigator.userAgent || "" : "";
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|Opera Mini|IEMobile/i.test(ua);

    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const encoded = encodeURIComponent(text);

    if (isMobile) {
      // try app then fallback
      window.location.href = `whatsapp://send?phone=${phone}&text=${encoded}`;
      setTimeout(() => {
        window.location.href = `https://wa.me/${phone}?text=${encoded}`;
      }, 800);
    } else {
      // open web.whatsapp in new tab for desktop
      window.open(`https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`, "_blank");
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-header">
        <span className="eyebrow">Contact / தொடர்பு</span>
        <h2 className="section-title">Let’s connect and build something exceptional.</h2>
        {/* <p className="contact-copy">
          Reach out for new projects, freelance work, or collaboration on AI-driven applications.
          I’m available for thoughtful conversations and meaningful opportunities.
        </p> */}
      </div>

      <div className="contact-grid">
        <div className="contact-panel contact-info">
          <div className="info-card">
            <h3>Reach me directly</h3>
            <p>For fast replies, message me on WhatsApp or send an email.</p>
            <div className="info-card-image">
              <img src={handshakeImage} alt="Let's work together" />
            </div>
            <a
              href="https://wa.me/917871811737"
              onClick={handleWhatsAppClick}
              className="contact-link cursor-target"
            >
              WhatsApp/Call : +91 7871811737
            </a>
            <a
              href="mailto:naveenkumararulraja@gmail.com"
              onClick={handleEmailClick}
              className="contact-link cursor-target"
            >
              Email : naveenkumararulraja@gmail.com
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="form-row">
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" className="cursor-target"/>
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="Your email" className="cursor-target"/>
            </label>
          </div>

          <label>
            Message
            <textarea name="message" rows="6" placeholder="Write Your Message..." className="cursor-target"/>
          </label>

          <button type="submit" className="contact-button cursor-target">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;