import '../Componants/Sidebar.css';

function Sidebar() {

    const sidebar=[
        {id:1,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true",text: "Home"},
        {id:2,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true",text: "Explores"},
        {id:3,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true",text: "Shorts"},
        {id:4,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true",text: "Subscriptions"},
        {id:5,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true",text: "Library"},
        {id:6,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true",text: "History"},
        {id:7,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true",text: "Your videos"},
        {id:8,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true",text: "Watch later"},
        {id:9,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true",text: "Liked videos"},
        {id:10,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true",text: "Show More"},
      ];
    
      const subscription=[
        {id:11,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true",text: "Nadir On The Go"},
        {id:12,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",text: "Coke Studio Bangla"},
        {id:13,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",text: "MKBHD"},
        {id:14,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",text: "Figma"},
        {id:15,image:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",text: "ATC Android ToTo C..."},
      ];
    return(
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
          <div className="menu-item" key={item.id}>
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
    )
}

export default Sidebar;