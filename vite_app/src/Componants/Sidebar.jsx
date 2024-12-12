// import '../Componants/Sidebar.css';

// function Sidebar() {

//     const sidebar=[
//         {id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true",text: "Home"},
//         {id:2,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true",text: "Explores"},
//         {id:3,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true",text: "Shorts"},
//         {id:4,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true",text: "Subscriptions"},
//       ];

//       const sidebar2=[
//         {id:5,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true",text: "Library"},
//         {id:6,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true",text: "History"},
//         {id:7,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true",text: "Your videos"},
//         {id:8,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true",text: "Watch later"},
//         {id:9,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true",text: "Liked videos"},
//         {id:10,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true",text: "Show More"},
//       ];
    
//       const subscription=[
//         {id:11,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true",text: "Nadir On The Go"},
//         {id:12,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",text: "Coke Studio Bangla"},
//         {id:13,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",text: "MKBHD"},
//         {id:14,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",text: "Figma"},
//         {id:15,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",text: "ATC Android ToTo C..."},
//         {id:16,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",text: "Saptarshi Prakash"},
//         {id:17,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",text: "[Aj&s]Smar"},
//         {id:18,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",text: "Code With Harry"},
//         {id:19,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true",text: "Fitness"},
//       ];

//     return(
//         <>
//         <div className="whole">
//       <div className="sidebar">
//         <div className="logo-section">
//           <img
//             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
//             alt="YouTube Logo"
//             className="logo"
//           />
//         </div>

//         {sidebar.map((item) => (
//           <div className="menu-item" key={item.id}>
//             <img src={item.image} className="icon" />
//             <span>{item.text}</span>
//           </div>
//         ))}

// <hr className="line" />

//         {sidebar2.map((item) => (
//           <div className="menu-item" key={item.id}>
//             <img src={item.image} className="icon" />
//             <span>{item.text}</span>
//           </div>
//         ))}

//         <hr className="line" />

//         <h4 className="section-title">SUBSCRIPTIONS</h4>
//         {subscription.map((item) => (
//           <div className="menu-item" key={item.id}>
//             <img src={item.image} className="channel-icon" />
//             <span>{item.text}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//         </>
//     )
// }

// export default Sidebar;






// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






import '../Componants/Sidebar.css';

function Sidebar({ setVideoCategory, onCategoryClick }) {
  const sidebar = [
    { id: 1, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true", text: "Home" },
    { id: 2, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true", text: "Explore", category: "explore" },
    { id: 3, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true", text: "Shorts", category: "shorts" },
    { id: 4, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true", text: "Subscriptions", category: "subscriptions" },
  ];

  const sidebar2 = [
    { id: 5, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true", text: "Library", category: "library" },
    { id: 6, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true", text: "History", category: "history" },
    { id: 7, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true", text: "Your videos", category: "your_videos" },
    { id: 8, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true", text: "Watch later", category: "watch_later" },
    { id: 9, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true", text: "Liked videos", category: "liked_videos" },
    { id: 10, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true", text: "Show More", category: "show_more" },
  ];

  const subscription = [
    { id: 11, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true", text: "Nadir On The Go" },
    { id: 12, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true", text: "Coke Studio Bangla" },
    { id: 13, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true", text: "MKBHD" },
    { id: 14, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true", text: "Figma" },
    { id: 15, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true", text: "ATC Android ToTo C..." },
    { id: 16, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true", text: "Saptarshi Prakash" },
    { id: 17, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true", text: "[Aj&s]Smar" },
    { id: 18, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true", text: "Code With Harry" },
    { id: 19, image: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true", text: "Fitness" },
  ];

  const handleClick = (category) => {
    if (category && setVideoCategory) {
      switch (category) {
        case 'explore':
          setVideoCategory("explore videos");
          break;
        case 'shorts':
          setVideoCategory("shorts videos");
          break;
        case 'subscriptions':
          setVideoCategory("subscriptions videos");
          break;
        case 'library':
          setVideoCategory("library videos");
          break;
        case 'history':
          setVideoCategory("history videos");
          break;
        case 'your_videos':
          setVideoCategory("your videos videos");
          break;
        case 'watch_later':
          setVideoCategory("watch later videos");
          break;
        case 'liked_videos':
          setVideoCategory("liked videos videos");
          break;
        case 'show_more':
          setVideoCategory("show more videos");
          break;
        default:
          setVideoCategory("random videos");
      }
    }

    if (onCategoryClick && category === 'explore') {
      onCategoryClick("explore");
    }
  };

  return (
    <>
      <div className="whole">
        <div className="sidebar">
          <div className="logo-section">
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
              alt="YouTube Logo"
              className="logo"
            />
          </div>

          {sidebar.map((item) => (
            <div className="menu-item" key={item.id} onClick={() => handleClick(item.category)}>
              <img src={item.image} className="icon" />
              <span>{item.text}</span>
            </div>
          ))}

          <hr className="line" />

          {sidebar2.map((item) => (
            <div className="menu-item" key={item.id} onClick={() => handleClick(item.category)}>
              <img src={item.image} className="icon" />
              <span>{item.text}</span>
            </div>
          ))}

          <hr className="line" />

          <h4 className="section-title">SUBSCRIPTIONS</h4>
          {subscription.map((item) => (
            <div className="menu-item" key={item.id}>
              <img src={item.image} className="channel-icon" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
