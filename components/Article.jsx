import "../src/App.css";
function Article() {
  return (
    <div className="main">
      <article>
        <h2>11/12/10</h2>
        <h1>On the Street in Brooklyn</h1>
        <img
          src="/blog-image-1.jpg"
          alt="On the Street in  Brooklyn"
        />
        <p className="drop-cap-paragraph">
          <div className="drop-capContainer">
            <span className="drop-cap">L</span>
            <span className="drop-cap-wrap">
              orem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
              orem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
              orem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
            </span>
          </div>
          Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <hr></hr>
      </article>
      <article>
        <h2>11/12/10</h2>
        <h1>On the Street in Brooklyn</h1>
        <img
          src="/blog-image-2.jpg"
          alt="On the Street in  Brooklyn"
        />
        <p className="drop-cap-paragraph">
          <div className="drop-capContainer">
            <span className="drop-cap">L</span>
            <span className="drop-cap-wrap">
              orem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam. orem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam.
              orem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam.
            </span>
          </div>
          Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
      </article>
    </div>
  );
}

export default Article;
