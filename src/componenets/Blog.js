import { useState } from "react";
import "../styles.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new websites",
      body: "lorem ipsum...",
      author: "mario",
      id: 1
    },
    { title: "Welcome party", body: "lore ipsum....", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3
    }
  ]);

  return (
    <div className="main">
      <h1>The Gayatri's Blog Lisitng</h1>
      <h2>Start editing to see some magic happen!</h2>

      {blogs &&
        blogs.map((item, index) => (
          <div className="blog" key={index}>
            {console.log(item)}
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Blog;
