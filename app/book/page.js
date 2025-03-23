// import "./stylebook.css";

// export default function BookPage() {
//   return (
//     <div className="containerbook">
//       <h1>Books Recommended for Beginners</h1>
//       <div className="booklist">
//         <button>ar</button>
//         <button>en</button>
//       </div>

//       <div className="bookc">
//         <div className="book">
//           <img src="/book/v-min.png" alt="img" className="book-img" />
//           <p>Book 1 description</p>
//         </div>
//         <div className="book">
//           <img src="/book/o-min.png" alt="img" className="book-img" />
//           <p>Book 1 description</p>
//         </div>
//         <div className="book">
//           <img src="/book/cs-min.png" alt="img" className="book-img" />
//           <p>Book 1 description</p>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import "./stylebook.css";

export default function BookPage() {
  const [language, setLanguage] = useState("en");

  const books = {
    en: [
      {
        img: "/book/os-min.png",
        description:
          "a book aimed at programmers and developers interested in learning the fundamentals of operating systems.",
      },
      {
        img: "/book/db-min.png",
        description:
          "Here's a basic overview of the key steps involved in database design",
      },
      {
        img: "/book/od-min.png",
        description:
          "understand how data structures work and how to implement them.",
      },
      {
        img: "/book/ejs-min.png",
        description:
          " It is widely considered one of the best resources for learning, especially for beginners who want to dive deep into the language and its intricacies.",
      },
    ],
    ar: [
      { img: "/book/v-min.png", description: "اطار عمل مهم وسهل للمبتدئين" },
      {
        img: "/book/o-min.png",
        description: "من اهم الكتب التي يجب قرائتها لكل مبرمج",
      },
      {
        img: "/book/cs-min.png",
        description: "كتاب أكثر توسعا ولكن يكفي الذي قبله",
      },
      {
        img: "/book/dbp-min.png",
        description: "كتاب مهم في معرفه هياكل البيانات",
      },
      {
        img: "/book/ddb-min.png",
        description: "معرفه تصميم قواعد البيانات والتعامل معها",
      },
      {
        img: "/book/post-min.png",
        description: "واحده من اهم قواعد البيانات",
      },
      {
        img: "/book/js-min.png",
        description: "من اهم اللغات البرمجيه",
      },
    ],
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="containerbook">
      <h1>Books Recommended for Beginners</h1>
      <div className="booklist">
        <button onClick={() => handleLanguageChange("ar")}>ar</button>
        <button onClick={() => handleLanguageChange("en")}>en</button>
      </div>

      <div className="bookc">
        {books[language].map((book, index) => (
          <div className="book" key={index}>
            <img src={book.img} alt="book-img" className="book-img" />
            <p>{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
