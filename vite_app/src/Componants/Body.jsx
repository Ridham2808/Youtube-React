// // // // // // // // // // // // // // // // // // // // // // // // // // Normal react code, and also get data from API

// import { useState,useEffect } from 'react';
// import '../Componants/Body.css';


// function Body() {

//   const iconsData = [
//         {id:"1",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"},
//         {id:"2",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"},
//         {id:"3",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"},
//         {id:"4",src:"https://yt3.ggpht.com/ytc/AIdro_l54ENFgzNHh3l98sDBZeM-W4EUbacFBWEFOHKqJxWh-Wk=s68-c-k-c0x00ffffff-no-rj"},
//       ];
    
//       const categories = [
//         {id:1,name:"All"},
//         {id:2,name:"Cook Studio"},
//         {id:3,name:"UX"},
//         {id:4,name:"Case Study"},
//         {id:5,name:"Music"},
//         {id:6,name:"Bnagla Lofi"},
//         {id:7,name:"Tour"},
//         {id:8,name:"Saintmartin"},
//         {id:9,name:"Tech"},
//         {id:10,name:"iPhone 13"},
//         {id:11,name:"User Interface Design"},
//         {id:12,name:"Computer Design"},
//       ];


//     // const videos = [
//     //     {
//     //       id:1,
//     //       thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
//     //       logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
//     //       title:"Bulbuli | Coke Studio Bangla",
//     //       channel:"Coke Studio Bangla",
//     //       views:"1.5M views",
//     //       time:"2 days ago",
//     //     },
//     //     {
//     //       id: 2,
//     //       thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
//     //       logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
//     //       title:"Infinix Note 12 | AMOLED",
//     //       channel:"ATC Android ToTo Company",
//     //       views:"4.2M views",
//     //       time:"2 days ago",
//     //     },
//     //     {
//     //         id:3,
//     //         thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
//     //         logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
//     //         title:"My first UX Design case study-This got me my fist job.",
//     //         channel:"Saptarshi Prakash",
//     //         views:"4.8k views",
//     //         time:"1 year ago",
//     //       },
//     //       {
//     //         id: 4,
//     //         thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
//     //         logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
//     //         title:"My Mix",
//     //         channel:"Lopamudra Mitra, Anupam Roy, and more",
//     //       },
//     //       {
//     //         id:5,
//     //         thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",
//     //         logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
//     //         title:"UX Design - What is it? (From AJ &Smart)",
//     //         channel:"Aj&s]Smar",
//     //         views:"150kMviws",
//     //         time:"3 years ago",
//     //       },
//     //       {
//     //         id: 6,
//     //         thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
//     //         logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
//     //         title:"Mix-Mombati | Mohon Sharif | Dhaka | Dose | Mahib Ahsan ft Anika",
//     //         channel:"Mohon Sharif, Odd Signature, Shayan Chowdhury Arnob, and more",
//     //         views:"4.2M views",
//     //         time:"2 days ago",
//     //       },
//     //       {
//     //         id:7,
//     //         thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
//     //         logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
//     //         title:"Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
//     //         channel:"Aj&s]Smar ",
//     //         views:"150kMviws",
//     //         time:"3 years ago",
//     //       },
//     //       {
//     //         id: 8,
//     //         thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
//     //         logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",
//     //         title:"Infinix Note 12 | AMOLED",
//     //         channel:"ATC Android ToTo Company",
//     //         views:"4.2M views",
//     //         time:"2 days ago",
//     //       },
//     //       {
//     //         id:9,
//     //         thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
//     //         logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true",
//     //         title:"Bulbuli | Coke Studio Bangla",
//     //         channel:"Coke Studio Bangla",
//     //         views:"1.5M views",
//     //         time:"2 days ago",
//     //       },
//     //       {
//     //         id:10,
//     //         thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
//     //         logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",
//     //         title:"Infinix Note 12 | AMOLED",
//     //         channel:"ATC Android ToTo Company",
//     //         views:"4.2M views",
//     //         time:"2 days ago",
//     //       },
//     //       {
//     //         id:11,
//     //         thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
//     //         logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",
//     //         title:"Infinix Note 12 | AMOLED",
//     //         channel:"ATC Android ToTo Company",
//     //         views:"4.2M views",
//     //         time:"2 days ago",
//     //       },
//     //       {
//     //         id:12,
//     //         thumbnail:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
//     //         logo2:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true",
//     //         title:"Infinix Note 12 | AMOLED",
//     //         channel:"ATC Android ToTo Company",
//     //         views:"4.2M views",
//     //         time:"2 days ago",
//     //       },
          
        
//     //   ];


//     const [video , setVideo] = useState([]);
//     useEffect(() => {
//       fetch('https://youtube-api-1-0rar.onrender.com/grid' )
//           .then((response) => response.json())
//           .then((data) => setVideo(data))
//           .catch((error) => console.error('Error fetching deta: ' ,error));
//         },[]);

//     return(
//         <>

// <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" 
//         className='oneimage' />
//         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" className='secondimage' />
        
//         <div className="top-bar">
//       <div className="search-bar">
//         <input type="text" placeholder="Search" className="search-input" />
//       </div>
//       <div className="icon-section">
//         {iconsData.map((icon) => (
//           <img key={icon.id} id={icon.id} src={icon.src} className="icon" />
//         ))}
//       </div>
//     </div>

//     <hr className="line2" />

//     <div className="category-bar">
//       {categories.map((category) => {
//         return (
//           <div key={category.id} className="category-item">
//             <button className="category-button">{category.name}</button>
//           </div>
//         );
//       })}
//     </div>

//         <hr className="line2" />

// <div className="video-grid">
//   {video.map((video) => (
//     <div key={video.id} className="video-card">
//       <img src={video.thumbnail} alt="Thumbnail" className="thumbnail" />
//       <div className="video-info">
//         <img src={video.logo2} alt="Channel Logo2" className="logo2" />
//         <div className="text-info">
//           <h3 className="video-title">{video.title}</h3>
//           <p className="channel-name">{video.channel}</p>
//           <p className="video-stats">
//             {video.views} • {video.time}
//           </p>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
//         </>
//     )
// }

// export default Body;




// // // // // // // // // // // // // // // // // // // // // // // // // Code which get data from Youtube (without search) 



// import { useState, useEffect } from 'react'; 
// import '../Componants/Body.css'

// function Body() {

//   const iconsData = [
//     {id:"1",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"},
//     {id:"2",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"},
//     {id:"3",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"},
//     {id:"4",src:"https://yt3.ggpht.com/ytc/AIdro_l54ENFgzNHh3l98sDBZeM-W4EUbacFBWEFOHKqJxWh-Wk=s68-c-k-c0x00ffffff-no-rj"},
//   ];

//   const categories = [
//     {id:1,name:"All"},
//     {id:2,name:"Cook Studio"},
//     {id:3,name:"UX"},
//     {id:4,name:"Case Study"},
//     {id:5,name:"Music"},
//     {id:6,name:"Bnagla Lofi"},
//     {id:7,name:"Tour"},
//     {id:8,name:"Saintmartin"},
//     {id:9,name:"Tech"},
//     {id:10,name:"iPhone 13"},
//     {id:11,name:"User Interface Design"},
//     {id:12,name:"Computer Design"},
//   ];


//   const [video, setVideo] = useState([]);
  
//   useEffect(() => {
//     // YouTube API endpoint to search for videos
//     const apiKey = 'AIzaSyDW-yQQX9so8xgi-kNtWoxLx2lJZ_V7R7o';
//     const query = 'your search term here';  // Modify search term as needed
//     const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&type=video&maxResults=8`;

//     // Fetch data from YouTube API
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         // Extract the video details from the response
//         const videoData = data.items.map(item => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           channel: item.snippet.channelTitle,
//           thumbnail: item.snippet.thumbnails.high.url,
//           time: 'Unknown', // You can fetch additional details like duration if needed
//           views: '0' // You can also fetch view count from the `videos` endpoint
//         }));
//         setVideo(videoData);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <>
//     <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" 
//         className='oneimage' />
//         <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" className='secondimage' />
        
//         <div className="top-bar">
//       <div className="search-bar">
//         <input type="text" placeholder="Search" className="search-input" />
//       </div>
//       <div className="icon-section">
//         {iconsData.map((icon) => (
//           <img key={icon.id} id={icon.id} src={icon.src} className="icon" />
//         ))}
//       </div>
//     </div>

//     <hr className="line2" />

//     <div className="category-bar">
//       {categories.map((category) => {
//         return (
//           <div key={category.id} className="category-item">
//             <button className="category-button">{category.name}</button>
//           </div>
//         );
//       })}
//     </div>


//       <hr className="line2" />
//       <div className="video-grid">
//         {video.map((videoItem) => (
//           <div key={videoItem.id} className="video-card">
//             <img src={videoItem.thumbnail} alt="Thumbnail" className="thumbnail" />
//             <div className="video-info">
//               <img src="default-logo.png" alt="Channel Logo2" className="logo2" />
//               <div className="text-info">
//                 <h3 className="video-title">{videoItem.title}</h3>
//                 <p className="channel-name">{videoItem.channel}</p>
//                 <p className="video-stats">
//                   {videoItem.views} • {videoItem.time}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Body;


// // // // // // // // // // // // // // // // // // // // // // Code Which get data from youtube and also Search Any video



// import { useState, useEffect } from 'react'; 
// import '../Componants/Body.css';

// function Body() {
//   const iconsData = [
//     {id:"1",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"},
//     {id:"2",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"},
//     {id:"3",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"},
//     {id:"4",src:"https://yt3.ggpht.com/ytc/AIdro_l54ENFgzNHh3l98sDBZeM-W4EUbacFBWEFOHKqJxWh-Wk=s68-c-k-c0x00ffffff-no-rj"},
//   ];

//   const categories = [
//     {id:1,name:"All"},
//     {id:2,name:"Cook Studio"},
//     {id:3,name:"UX"},
//     {id:4,name:"Case Study"},
//     {id:5,name:"Music"},
//     {id:6,name:"Bnagla Lofi"},
//     {id:7,name:"Tour"},
//     {id:8,name:"Saintmartin"},
//     {id:9,name:"Tech"},
//     {id:10,name:"iPhone 13"},
//     {id:11,name:"User Interface Design"},
//     {id:12,name:"Computer Design"},
//   ];

//   const [video, setVideo] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     // Fetch default random videos
//     fetchVideos("random videos");
//   }, []);

//   const fetchVideos = (query) => {
//     const apiKey = 'AIzaSyDW-yQQX9so8xgi-kNtWoxLx2lJZ_V7R7o';
//     const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&10q=${query}&key=${apiKey}&type=video&maxResults=8`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const videoData = data.items.map((item) => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           channel: item.snippet.channelTitle,
//           thumbnail: item.snippet.thumbnails.high.url,
//           time: 'Unknown',
//           views: '0'
//         }));
//         setVideo(videoData);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   };

//   const handleSearch = (e) => {
//     if (e.key === 'Enter' && searchQuery.trim() !== "") {
//       fetchVideos(searchQuery);
//     }
//   };

//   return (
//     <>
//       <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" className='oneimage' />
//       <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" className='secondimage' />

//       <div className="top-bar">
//         <div className="search-bar">
//           <input 
//             type="text" 
//             placeholder="Search" 
//             className="search-input" 
//             value={searchQuery} 
//             onChange={(e) => setSearchQuery(e.target.value)} 
//             onKeyDown={handleSearch} 
//           />
//         </div>
//         <div className="icon-section">
//           {iconsData.map((icon) => (
//             <img key={icon.id} id={icon.id} src={icon.src} className="icon" />
//           ))}
//         </div>
//       </div>

//       <hr className="line2" />

//       <div className="category-bar">
//         {categories.map((category) => {
//           return (
//             <div key={category.id} className="category-item">
//               <button className="category-button">{category.name}</button>
//             </div>
//           );
//         })}
//       </div>

//       <hr className="line2" />
//       <div className="video-grid">
//         {video.map((videoItem) => (
//           <div key={videoItem.id} className="video-card">
//             <img src={videoItem.thumbnail} alt="Thumbnail" className="thumbnail" />
//             <div className="video-info">
//               <img src="default-logo.png" alt="Channel Logo2" className="logo2" />
//               <div className="text-info">
//                 <h3 className="video-title">{videoItem.title}</h3>
//                 <p className="channel-name">{videoItem.channel}</p>
//                 <p className="video-stats">
//                   {videoItem.views} • {videoItem.time}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default Body;



// // // // // // // // // // // // // // // // Code Which get data from youtube and also Search Any video and play any video



// import { useState, useEffect } from 'react';
// import '../Componants/Body.css';

// function Body() {
//   const iconsData = [
//     { id: "1", src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" },
//     { id: "2", src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" },
//     { id: "3", src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" },
//     { id: "4", src: "https://yt3.ggpht.com/ytc/AIdro_l54ENFgzNHh3l98sDBZeM-W4EUbacFBWEFOHKqJxWh-Wk=s68-c-k-c0x00ffffff-no-rj" },
//   ];

//   const categories = [
//     { id: 1, name: "All" },
//     { id: 2, name: "Cook Studio" },
//     { id: 3, name: "UX" },
//     { id: 4, name: "Case Study" },
//     { id: 5, name: "Music" },
//     { id: 6, name: "Bnagla Lofi" },
//     { id: 7, name: "Tour" },
//     { id: 8, name: "Saintmartin" },
//     { id: 9, name: "Tech" },
//     { id: 10, name: "iPhone 13" },
//     { id: 11, name: "User Interface Design" },
//     { id: 12, name: "Computer Design" },
//   ];

//   const [video, setVideo] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   useEffect(() => {
//     // Fetch default random videos
//     fetchVideos("random videos");
//   }, []);

//   const fetchVideos = (query) => {
//     const apiKey = 'AIzaSyDW-yQQX9so8xgi-kNtWoxLx2lJZ_V7R7o';
//     const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&type=video&maxResults=8`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const videoData = data.items.map((item) => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           channel: item.snippet.channelTitle,
//           thumbnail: item.snippet.thumbnails.high.url,
//         }));
//         setVideo(videoData);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   };

//   const handleSearch = (e) => {
//     if (e.key === 'Enter' && searchQuery.trim() !== "") {
//       fetchVideos(searchQuery);
//     }
//   };

//   const handleRemoveVideo = () => {
//     setSelectedVideo(null);
//   };

//   return (
//     <>
//       <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" className='oneimage' />
//       <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" className='secondimage' />

//       <div className="top-bar">
//         <div className="search-bar">
//           <input 
//             type="text" 
//             placeholder="Search" 
//             className="search-input" 
//             value={searchQuery} 
//             onChange={(e) => setSearchQuery(e.target.value)} 
//             onKeyDown={handleSearch} 
//           />
//         </div>
//         <div className="icon-section">
//           {iconsData.map((icon) => (
//             <img key={icon.id} id={icon.id} src={icon.src} className="icon" />
//           ))}
//         </div>
//       </div>

//       <hr className="line2" />

//       <div className="category-bar">
//         {categories.map((category) => (
//           <div key={category.id} className="category-item">
//             <button className="category-button">{category.name}</button>
//           </div>
//         ))}
//       </div>

//       <hr className="line2" />

//       {selectedVideo ? (
//         <div className="video-player">
//           <iframe
//             src={`https://www.youtube.com/embed/${selectedVideo}`}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="video-frame-main"
//           ></iframe>
//           <button className="remove-button" onClick={handleRemoveVideo}>Remove</button>
//         </div>
//       ) : (
//         <div className="video-grid">
//           {video.map((videoItem) => (
//             <div key={videoItem.id} className="video-card" onClick={() => setSelectedVideo(videoItem.id)}>
//               <img 
//                 src={videoItem.thumbnail} 
//                 alt="Thumbnail" 
//                 className="thumbnail" 
//               />
//               <div className="video-info">
//                 <img src="default-logo.png" alt="Channel Logo2" className="logo2" />
//                 <div className="text-info">
//                   <h3 className="video-title">{videoItem.title}</h3>
//                   <p className="channel-name">{videoItem.channel}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// }

// export default Body;




// // // // // Code Which get data from youtube and also Search Any video and play any video and also upper side button click




import { useState, useEffect } from 'react';
import '../Componants/Body.css';

function Body() {
  const iconsData = [
    { id: "1", src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" },
    { id: "2", src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" },
    { id: "3", src: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" },
    { id: "4", src: "https://yt3.ggpht.com/ytc/AIdro_l54ENFgzNHh3l98sDBZeM-W4EUbacFBWEFOHKqJxWh-Wk=s68-c-k-c0x00ffffff-no-rj" },
  ];

  const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Cook Studio" },
    { id: 3, name: "UX" },
    { id: 4, name: "Case Study" },
    { id: 5, name: "Music" },
    { id: 6, name: "Bnagla Lofi" },
    { id: 7, name: "Tour" },
    { id: 8, name: "Saintmartin" },
    { id: 9, name: "Tech" },
    { id: 10, name: "iPhone 13" },
    { id: 11, name: "User Interface Design" },
    { id: 12, name: "Computer Design" },
  ];

  const [video, setVideo] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState("random videos");

  useEffect(() => {
    // Fetch videos based on the active category
    fetchVideos(activeCategory);
  }, [activeCategory]);

  const fetchVideos = (query) => {
    const apiKey = 'AIzaSyDW-yQQX9so8xgi-kNtWoxLx2lJZ_V7R7o';
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${apiKey}&type=video&maxResults=8`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const videoData = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.high.url,
        }));
        setVideo(videoData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchQuery.trim() !== "") {
      fetchVideos(searchQuery);
    }
  };

  const handleRemoveVideo = () => {
    setSelectedVideo(null);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" className='oneimage' />
      <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" className='secondimage' />

      <div className="top-bar">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search" 
            className="search-input" 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            onKeyDown={handleSearch} 
          />
        </div>
        <div className="icon-section">
          {iconsData.map((icon) => (
            <img key={icon.id} id={icon.id} src={icon.src} className="icon" />
          ))}
        </div>
      </div>

      <hr className="line2" />

      <div className="category-bar">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <button className="category-button" onClick={() => handleCategoryClick(category.name)}>
              {category.name}
            </button>
          </div>
        ))}
      </div>

      <hr className="line2" />

      {selectedVideo ? (
        <div className="video-player">
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-frame-main"
          ></iframe>
          <button className="remove-button" onClick={handleRemoveVideo}>Remove Player</button>
        </div>
      ) : (
        <div className="video-grid">
          {video.map((videoItem) => (
            <div key={videoItem.id} className="video-card" onClick={() => setSelectedVideo(videoItem.id)}>
              <img 
                src={videoItem.thumbnail} 
                alt="Thumbnail" 
                className="thumbnail" 
              />
              <div className="video-info">
                <img src="default-logo.png" alt="Channel Logo2" className="logo2" />
                <div className="text-info">
                  <h3 className="video-title">{videoItem.title}</h3>
                  <p className="channel-name">{videoItem.channel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Body;
