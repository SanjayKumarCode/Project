// import React from 'react';
// import './Banner.css';
// import banner from "../../assets/banner.png"
// const Banner = () => {
//   return (
//     <div className='Banner_Con'>

//       <div className='static_text'> 
//       {/* <div className='lottery_text1'><text className='lottery_text'>Matok Bought 1 lottery tickets</text></div> */}
//       </div> 


//       <div className='banner_tarality'><img className='tarality_img' src={banner} alt='tarality_chain' /></div>


//       {/* <div className='background-image'>   
//       </div> */}


//       <div className="button-container">
//       <button className="custom-button">Button 1</button>
//       <button className="custom-button">Button 2</button>
//       <button className="custom-button">Button 3</button>
//     </div>



//     </div>
//   );
// };

// export default Banner;



// import React from 'react';
// import './Banner.css';
// import banner from "../../assets/banner.png"
// const Banner = () => {
//   return (
//     <div className='Banner_Con'>
//       <div className='static_text'>  
//       </div> 
//       <div className='banner_tarality'><img className='tarality_img' src={banner} alt='tarality_chain' /></div>
//     </div>
//   );
// };

// export default Banner;



import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css'; 
import Wallet from '../Card/Wallet';

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

    pauseOnHover: false,
  };

  return (
    <div className='container'>
    <div className="scrolling-banner">
      <Slider {...settings}>
        <div>
          <img src="https://wallpapers.com/images/hd/fiery-bitcoin-digital-art-2w2x7casl1hx4gak.jpg" alt="/" />
        </div>
        <div>
          <img src="https://image.cnbcfm.com/api/v1/image/105610790-1544148793140gettyimages-1064216666.jpeg?v=1689868866&w=1600&h=900" alt="/" />
        </div>

        <div>
          <img src="https://wallpaper.dog/large/20530263.jpg" alt="/" />
        </div>

        <div>
          <img src="https://c4.wallpaperflare.com/wallpaper/511/674/480/blue-lightning-blue-fon-coin-hd-wallpaper-preview.jpg" alt="/" />
        </div>

        <div>
          <img src="https://dailyhodl.com/wp-content/uploads/2020/03/bt89sfhje.jpg?w=810" alt="/" />
        </div>
      </Slider>

      {/*Card */}

      <div className="Card-content">
      {/* <h2>Slide 1 Title</h2>
      <p>Slide 1 Description</p>*/}
      <div><Wallet/></div>
    </div>

    </div>
    
    </div>
  );
};

export default Banner;













