import React from "react";
import emailjs from "emailjs-com";
const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2rukfx8",
        "template_027hg3o",
        e.target,
        "user_ufsEXxdMV04hdNrwVpze0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div id="contactus">
      <section id="Contact" className="contact">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-5 col-sm-6 mt-5">
              <h1 className="contactHeader mt-5 mb-4">Reach Out to me!</h1>
              <h6
                className="info"
                style={{ fontSize: "20px", paddingBottom: "8px" }}
              >
                DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR
                ALL
              </h6>
              <p className="info" style={{ fontSize: "15px" }}>
                I'm a Full Stack Web Developer | Android App Developer | Open
                Source Contributor
              </p>

              {/* <p className="info" style={{ fontSize: "15px" }}>
           LinkedIn: www.linkedin.com/in/tanvir-ahamed-466051190
         </p> */}
            </div>

            <div className="col-md-6 col-sm-6 mt-5 offset-md-1">
              <form onSubmit={sendEmail}>
                <div class="form-group mt-5">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your Email Address"
                    name="email"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Your Name/ Company's Name"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    placeholder="Your Message"
                    name="message"
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  />
                </div>

                <button
                  type="submit"
                  formTarget="_blank"
                  className="px-5 py-2 btn btn-secondary"
                >
                  <b>Send</b>
                </button>
              </form>
              <div id="status" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
