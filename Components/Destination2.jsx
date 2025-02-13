import VideoBg from "../assest/CoverVideo2.mp4";
import image2 from "../assest/NorwayImage.jpg";

export default function Cover() {
  return (
    <div className="Main">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={VideoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div className="header">
        <div className="logo">
          <p>Travel Pack</p>
        </div>
        <div className="options">
          <p className="option">Home</p>
          <p className="option">Destinations</p>
          <p className="option">Blog</p>
          <p className="option">Contact</p>
        </div>
        <div className="login">
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>
      <div className="numbers">
      <a href="destination1">01</a>
        <a href="destination2">02</a>
        <a href="">03</a>
        <a href="">04</a>
      </div>
      <div className="image">
        <div className="basic">
          <div className="img">
            <img src={image2}></img>
          </div>
          <div className="info1">
            <p className="fairytale">BEAUTY</p>
            <p className="india">OF NORWAY</p>
            <p className="info2">
              We're happy to help you find some ideas for planning your trip well helps you get what you want and find the experience you wish for.
            </p>
            <div className="read">
              <i class="fa-sharp fa-solid fa-circle-down"></i>
              <p>Read More</p>
            </div>
          </div>
        </div>
        <div className="info">
        <div className="info3">
            <p className="land">Land of Tiger</p>
            <p className="subland">One of the main attractions for the widlife lovers around the world</p>
        </div>
        <div className="info4">
        <p className="land">Emerlead Beaches</p>
        <p className="subland">A great opportunity to relax from worries in the best beaches in India</p>
        </div>
        <div className="info5">
        <p className="land">Land of Tiger</p>
        <p className="subland">One of the main attractions for the widlife lovers around the world</p>
        </div>
        </div>
      </div>
    </div>
  );
}
