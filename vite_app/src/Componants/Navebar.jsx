import '../Componants/Navebar.css';

function Navebar() {

    const iconsData = [
        {id:"1",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"},
        {id:"2",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"},
        {id:"3",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"},
        {id:"4",src:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true"},
      ];
    
      const categories = [
        {id:1,name:"All"},
        {id:2,name:"Cook Studio"},
        {id:3,name:"UX"},
        {id:4,name:"Case Study"},
        {id:5,name:"Music"},
        {id:6,name:"Bnagla Lofi"},
        {id:7,name:"Tour"},
        {id:8,name:"Saintmartin"},
        {id:9,name:"Tech"},
        {id:10,name:"iPhone 13"},
        {id:11,name:"User Interface Design"},
        {id:12,name:"Computer Design"},
      ];


    return(
        <>
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" 
        className='oneimage' />
        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" className='secondimage' />
        
        <div className="top-bar">
      <div className="search-bar">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="icon-section">
        {iconsData.map((icon) => (
          <img key={icon.id} id={icon.id} src={icon.src} className="icon" />
        ))}
      </div>
    </div>

    <hr className="line2" />

    <div className="category-bar">
      {categories.map((category) => {
        return (
          <div key={category.id} className="category-item">
            <button className="category-button">{category.name}</button>
          </div>
        );
      })}
    </div>
        </>
    )
}

export default Navebar;