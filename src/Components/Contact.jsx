const Contact = () => {
  return (
    <>
      <div className="contact">
        <main>
          <h1>Contact us</h1>
          <form>
            <div>
              <label>Name</label>
              <input type="text" placeholder="name" required />
            </div>
            <div>
              <label>Email</label>
              <input type="Email" placeholder="xyz@gmail.com" required />
            </div>
            <div>
              <label>Message</label>
              <input
                type="text"
                placeholder="tell us about your query...."
                required
              />
            </div>
            <div>
              <label>Name</label>
              <input type="text" placeholder="name" required />
            </div>
            <button type="sbumit">Send</button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Contact;
