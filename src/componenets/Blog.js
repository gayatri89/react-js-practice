import { useState } from "react";

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
    <>
      <h1>The Gayatri's Blog Lisitng</h1>
      <h2>Start editing to see some magic happen!</h2>

      {blogs &&
        blogs.map((item, index) => (
          <div key={index}>
            console.log(item)
            <h5>{item.title}</h5>
            <p>{item.body}</p>
          </div>
        ))}
    </>
  );
};

export default Blog;
