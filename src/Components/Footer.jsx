const Footer = () => {
  return (
    <>
      <footer>
        <div className="">
          <h1>Gautamjs</h1>
          <p>All Rigth Reserved &copy; {new Date().getFullYear()}</p>
        </div>
        <div>
          <h5>Follow Us</h5>
          <div>
            <a href="https://www.youtube.com/@fornext_GV" target="_blank">
              Youtube
            </a>
            <a
              href="https://www.instagram.com/gautam_vaishnav_0234/"
              target="_blank"
            >
              Instagram
            </a>
            <a href="https://github.com/Gautamvaishnav-git" target="_blank">
              Github
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
