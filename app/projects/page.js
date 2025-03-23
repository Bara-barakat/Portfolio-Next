// "use client";

// import React, { useState } from "react";
// import "./styleprojects.css";

// export default function Projects() {
//   const [activeProject, setActiveProject] = useState(null);
//   const [filter, setFilter] = useState("all");

//   const handleImageClick = (project) => {
//     setActiveProject(activeProject === project ? null : project);
//   };

//   const handleFilterChange = (category) => {
//     setFilter(category);
//   };

//   return (
//     <div className="projects-container">
//       {/* Buttons to filter projects */}
//       <div className="filter-buttons">
//         <button onClick={() => handleFilterChange("all")}>All</button>
//         <button onClick={() => handleFilterChange("html-css")}>HTML/CSS</button>
//         <button onClick={() => handleFilterChange("javascript")}>
//           JavaScript
//         </button>
//         <button onClick={() => handleFilterChange("react")}>
//           React (Next)
//         </button>
//         <button onClick={() => handleFilterChange("full")}>
//           Full Stack (PHP)
//         </button>
//       </div>

//       {/* Project List */}
//       <div className="project-container">
//         {/* Project 1 */}
//         {(filter === "all" || filter === "full") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/zonan.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="#" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//                 className="tt"
//               >
//                 <h3>Zonan-Ecommerce Multi vendor </h3>
//               </div>
//               <a
//                 href="https://github.com/Bara-barakat/Zonan-Full-Ecommerce"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "full") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/fean.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/fean.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//                 className="tt"
//               >
//                 <h3>Fean-Ecommerce </h3>
//               </div>
//               <a
//                 href="https://github.com/Bara-barakat/Feane"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "full") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/Tres.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/Tres.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//                 className="tt"
//               >
//                 <h3>Tray Restaurant </h3>
//               </div>
//               <a
//                 href="https://github.com/Bara-barakat/"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "full") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/dashboard.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/dashboard.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//                 className="tt"
//               >
//                 <h3>Dashboard </h3>
//               </div>
//               <a
//                 href="https://github.com/Bara-barakat/"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* ////////////////////////////////////////////////////////////////// */}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "react") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/coffee1.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="#" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//                 className="tt"
//               >
//                 <h3>Coffee House </h3>
//                 <h3>Technologies: React </h3>
//               </div>
//               <a
//                 href="https://github.com/Bara-barakat?tab=repositories"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "react") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/porto.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="#" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                 }}
//                 className="tt"
//               >
//                 <h3>Portfolio </h3>
//                 <h3>Technologies: React </h3>
//               </div>
//               <a
//                 href="https://github.com/Bara-barakat?tab=repositories"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* ///////////////////////////////////////////////////////////// */}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "html-css") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/cara-min.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/cara.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>E Commerce Cera</h3>
//               <a
//                 href="https://github.com/Bara-barakat/Ecommerce"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "html-css") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/vendoora.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/vendoora.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>E Commerce Vendoora</h3>
//               <a
//                 href="https://github.com/Bara-barakat/Vendoora"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "html-css") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/clock-min.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="#" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Clock</h3>
//               <a
//                 href="https://github.com/Bara-barakat/"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "html-css") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/Login.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/login.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Login</h3>
//               <a
//                 href="https://github.com/Bara-barakat/"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "html-css") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/Cloud1.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/Cloud1.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Cloude Server</h3>
//               <a
//                 href="https://github.com/Bara-barakat/Cloud-hosting"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "html-css") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/cloud2.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/cloud2.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Cloude Server</h3>
//               <a
//                 href="https://github.com/Bara-barakat/"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "html-css") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/grid.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/grid.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Grid img</h3>
//               <a
//                 href="https://github.com/Bara-barakat/"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 1 */}
//         {(filter === "all" || filter === "html-css") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/cookies.png"
//               alt="Project 1 Cover"
//               onClick={() => handleImageClick("project1")}
//             />
//             {activeProject === "project1" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Store Cookies</h3>
//               <a
//                 href="https://github.com/Bara-barakat/cookies-and-more"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* ///////////////////////////////////////////////////////////// */}

//         {/* Project 2 */}
//         {(filter === "all" || filter === "javascript") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/clever.png"
//               alt="Project 2 Cover"
//               onClick={() => handleImageClick("project2")}
//             />
//             {activeProject === "project2" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/clever.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Clever</h3>
//               <a
//                 href="https://github.com/Bara-barakat/"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 2 */}
//         {(filter === "all" || filter === "javascript") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/wet.png"
//               alt="Project 2 Cover"
//               onClick={() => handleImageClick("project2")}
//             />
//             {activeProject === "project2" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/wet.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Weather-App</h3>
//               <a
//                 href="https://github.com/Bara-barakat/Weather-App"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 2 */}
//         {(filter === "all" || filter === "javascript") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/landing-min.png"
//               alt="Project 2 Cover"
//               onClick={() => handleImageClick("project2")}
//             />
//             {activeProject === "project2" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/land.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Landing-Page</h3>
//               <a
//                 href="https://github.com/Bara-barakat/landing-page"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 2 */}
//         {(filter === "all" || filter === "javascript") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/ai-min.png"
//               alt="Project 2 Cover"
//               onClick={() => handleImageClick("project2")}
//             />
//             {activeProject === "project2" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="#" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Ai Gen</h3>
//               <a
//                 href="https://github.com/Bara-barakat/"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 2 */}
//         {(filter === "all" || filter === "javascript") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/carency-min.png"
//               alt="Project 2 Cover"
//               onClick={() => handleImageClick("project2")}
//             />
//             {activeProject === "project2" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="#" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Currency</h3>
//               <a
//                 href="https://github.com/Bara-barakat/Currency-Conversion."
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 2 */}
//         {(filter === "all" || filter === "javascript") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/tic-min.png"
//               alt="Project 2 Cover"
//               onClick={() => handleImageClick("project2")}
//             />
//             {activeProject === "project2" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/tic.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Tic Tac</h3>
//               <a
//                 href="https://github.com/Bara-barakat/Tic-Tac"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 2 */}
//         {(filter === "all" || filter === "javascript") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/listin-min.png"
//               alt="Project 2 Cover"
//               onClick={() => handleImageClick("project2")}
//             />
//             {activeProject === "project2" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/list.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Todo List</h3>
//               <a
//                 href="https://github.com/Bara-barakat/To-Do-List"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 2 */}
//         {(filter === "all" || filter === "javascript") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/cruds-min.png"
//               alt="Project 2 Cover"
//               onClick={() => handleImageClick("project2")}
//             />
//             {activeProject === "project2" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="/Video/crud.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Cruds</h3>
//               <a
//                 href="https://github.com/Bara-barakat/Cruds"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}

//         {/* Project 2 */}
//         {(filter === "all" || filter === "javascript") && (
//           <div className="project">
//             <img
//               src="/AllIMGN/pp/win-min.png"
//               alt="Project 2 Cover"
//               onClick={() => handleImageClick("project2")}
//             />
//             {activeProject === "project2" && (
//               <div className="video-overlay">
//                 <video controls>
//                   <source src="#" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//                 <button
//                   className="close-video"
//                   onClick={() => setActiveProject(null)}
//                 >
//                   X
//                 </button>
//               </div>
//             )}
//             <div className="project-content">
//               <h3>Win</h3>
//               <a
//                 href="https://github.com/Bara-barakat/Win"
//                 className="github-link"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 GitHub
//               </a>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import "./styleprojects.css";

const projectsData = [
  {
    id: "project1",
    title: "Zonan-Ecommerce Multi vendor",
    image: "/AllIMGN/pp/zonan.png",
    video: "/Video/zonan.mp4",
    github: "https://github.com/Bara-barakat/Zonan-Full-Ecommerce",
    category: "full",
  },
  {
    id: "project2",
    title: "Fean-Ecommerce",
    image: "/AllIMGN/pp/fean.png",
    video: "/Video/fean.mp4",
    github: "https://github.com/Bara-barakat/Feane",
    category: "full",
  },
  {
    id: "project3",
    title: "Tray Restaurant",
    image: "/AllIMGN/pp/Tres.png",
    video: "/Video/Tres.mp4",
    github: "https://github.com/Bara-barakat/",
    category: "full",
  },
  {
    id: "project4",
    title: "Dashboard",
    image: "/AllIMGN/pp/dashboard.png",
    video: "/Video/dashboard.mp4",
    github: "https://github.com/Bara-barakat/",
    category: "full",
  },
  {
    id: "project5",
    title: "Coffee House",
    image: "/AllIMGN/pp/coffee1.png",
    video: "/Video/coffee.mp4",
    github: "https://github.com/Bara-barakat?tab=repositories",
    category: "react",
  },
  {
    id: "project6",
    title: "Portfolio",
    image: "/AllIMGN/pp/porto.png",
    video: "/Video/portfolio.mp4",
    github: "https://github.com/Bara-barakat?tab=repositories",
    category: "react",
  },
  {
    id: "project7",
    title: "E Commerce Cara",
    image: "/AllIMGN/pp/cara-min.png",
    video: "/Video/cara.mp4",
    github: "https://github.com/Bara-barakat/Ecommerce",
    category: "html-css",
  },
  {
    id: "project8",
    title: "E Commerce Vendoora",
    image: "/AllIMGN/pp/vendoora.png",
    video: "/Video/vendoora.mp4",
    github: "https://github.com/Bara-barakat/Vendoora",
    category: "html-css",
  },
  {
    id: "project9",
    title: "Clock",
    image: "/AllIMGN/pp/clock-min.png",
    video: "/Video/clock.mp4",
    github: "https://github.com/Bara-barakat/",
    category: "html-css",
  },
  {
    id: "project10",
    title: "Login",
    image: "/AllIMGN/pp/Login.png",
    video: "/Video/login.mp4",
    github: "https://github.com/Bara-barakat/",
    category: "html-css",
  },
  {
    id: "project11",
    title: "Cloude Server",
    image: "/AllIMGN/pp/Cloud1.png",
    video: "/Video/Cloud1.mp4",
    github: "https://github.com/Bara-barakat/Cloud-hosting",
    category: "html-css",
  },
  {
    id: "project12",
    title: "Cloude Server 2",
    image: "/AllIMGN/pp/cloud2.png",
    video: "/Video/cloud2.mp4",
    github: "https://github.com/Bara-barakat/",
    category: "html-css",
  },
  {
    id: "project13",
    title: "Grid img",
    image: "/AllIMGN/pp/grid.png",
    video: "/Video/grid.mp4",
    github: "https://github.com/Bara-barakat/",
    category: "html-css",
  },
  {
    id: "project14",
    title: "Store Cookies",
    image: "/AllIMGN/pp/cookies.png",
    video: "/Video/cookies.mp4",
    github: "https://github.com/Bara-barakat/cookies-and-more",
    category: "html-css",
  },
  {
    id: "project15",
    title: "Clever",
    image: "/AllIMGN/pp/clever.png",
    video: "/Video/clever.mp4",
    github: "https://github.com/Bara-barakat/",
    category: "javascript",
  },
  {
    id: "project16",
    title: "Weather-App",
    image: "/AllIMGN/pp/wet.png",
    video: "/Video/wet.mp4",
    github: "https://github.com/Bara-barakat/Weather-App",
    category: "javascript",
  },
  {
    id: "project17",
    title: "Landing-Page",
    image: "/AllIMGN/pp/landing-min.png",
    video: "/Video/land.mp4",
    github: "https://github.com/Bara-barakat/landing-page",
    category: "javascript",
  },
  {
    id: "project18",
    title: "Ai Gen",
    image: "/AllIMGN/pp/ai-min.png",
    video: "#",
    github: "https://github.com/Bara-barakat/",
    category: "javascript",
  },
  {
    id: "project19",
    title: "Currency",
    image: "/AllIMGN/pp/carency-min.png",
    video: "#",
    github: "https://github.com/Bara-barakat/Currency-Conversion.",
    category: "javascript",
  },
  {
    id: "project20",
    title: "Tic Tac",
    image: "/AllIMGN/pp/tic-min.png",
    video: "/Video/tic.mp4",
    github: "https://github.com/Bara-barakat/Tic-Tac",
    category: "javascript",
  },
  {
    id: "project21",
    title: "Todo List",
    image: "/AllIMGN/pp/listin-min.png",
    video: "/Video/list.mp4",
    github: "https://github.com/Bara-barakat/To-Do-List",
    category: "javascript",
  },
  {
    id: "project22",
    title: "Cruds",
    image: "/AllIMGN/pp/cruds-min.png",
    video: "/Video/crud.mp4",
    github: "https://github.com/Bara-barakat/Cruds",
    category: "javascript",
  },
  {
    id: "project23",
    title: "Win",
    image: "/AllIMGN/pp/win-min.png",
    video: "#",
    github: "https://github.com/Bara-barakat/Win",
    category: "javascript",
  },
];

const Project = ({ project, activeProject, handleImageClick }) => (
  <div className="project">
    <img
      src={project.image}
      alt={`${project.title} Cover`}
      onClick={() => handleImageClick(project.id)}
    />
    {activeProject === project.id && (
      <div className="video-overlay">
        <video controls>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button className="close-video" onClick={() => handleImageClick(null)}>
          X
        </button>
      </div>
    )}
    <div className="project-content">
      <h3>{project.title}</h3>
      <a
        href={project.github}
        className="github-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
);

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleImageClick = (project) => {
    setActiveProject(activeProject === project ? null : project);
  };

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  return (
    <div className="projects-container">
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("html-css")}>HTML/CSS</button>
        <button onClick={() => handleFilterChange("javascript")}>
          JavaScript
        </button>
        <button onClick={() => handleFilterChange("react")}>
          React (Next)
        </button>
        <button onClick={() => handleFilterChange("full")}>
          Full Stack (PHP)
        </button>
      </div>

      <div className="project-container">
        {projectsData
          .filter((project) => filter === "all" || project.category === filter)
          .map((project) => (
            <Project
              key={project.id}
              project={project}
              activeProject={activeProject}
              handleImageClick={handleImageClick}
            />
          ))}
      </div>
    </div>
  );
}
