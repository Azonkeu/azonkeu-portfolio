import React from "react";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative" style={{ backgroundColor: "#0a192f", maxWidth: '100%' }}>
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" style={{ marginTop: "7%" }}>
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/d/u/0/embed?mid=1gF_WbX0vKfWx9YBgPUxD9cXUlrg&hl=en&ie=UTF8&msa=0&ll=7.514980999999993%2C13.051758000000014&spn=10.875883%2C10.964355&z=6&output=embed"
          />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md" style={{ marginLeft: "auto", marginRight: '0' }}>
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1" style={{color: '#ddefaa'}}>
                Checkpoint, Molyko <br />
                Buea, Cameroon 
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="mailto:mazonkeu@gmail.com" className="leading-relaxed" style={{color: '#ddefaa'}}>
                mazonkeu@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <a href="tel:00237652126440" className="leading-relaxed" style={{color: '#ddefaa'}}>+237-652-126440</a>
            </div>
          </div>
        </div>
        <form
          netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" style={{ marginTop: "3%" }}>
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Get In Touch
          </h2>
          <p className="leading-relaxed mb-5 text-white">
           I'm always interested in new opportunities. If you need something built, Want to work together or simply want to chat, please send me an email at <a href="mailto:mazonkeu@gmail.com" style={{color: '#ddefaa'}}>mazonkeu@gmail.com</a> or simply fill out the form below.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;