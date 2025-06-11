import ReadMoreVideo from "url:../asset/ReadMoreIndiaVideo.mp4";

export default function ReadMoreIndia() {
  return (
    <div className="readmore-main">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="readmore-background-video"
      >
        <source src={ReadMoreVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="readmore-heading">
        Fairytale India - Full Tour Details
      </div>

      <div className="readmore-description">
        India is not just a destination — it’s an experience. This 15-day
        immersive journey takes you from the snow-covered Himalayas to the
        golden deserts, serene beaches, spiritual cities, and cultural
        heartlands of India. A magical blend of landscapes, colors, flavors, and
        history awaits.
      </div>

      <div className="readmore-itinerary-package">
        <div className="readmore-itinerary">
          <h2>Itinerary</h2>
          <ul>
            <li>
              Day 1–2: Delhi (Capital Welcome)
              <ul>
                <li>Arrival & hotel check-in.</li>
                <li>City tour including Red Fort and Qutub Minar.</li>
              </ul>
            </li>
            <li>
              Day 3–4: Agra (Taj Mahal & Fort)
              <ul>
                <li>Visit the Taj Mahal and Agra Fort.</li>
                <li>Explore local markets and cuisine.</li>
              </ul>
            </li>
            <li>
              Day 5–6: Jaipur (Pink City Wonders)
              <ul>
                <li>Visit Amber Fort, City Palace, and Hawa Mahal.</li>
                <li>Explore local bazaars and enjoy Rajasthani cuisine.</li>
              </ul>
            </li>
            <li>
              Day 7–8: Varanasi (Spiritual Heart)
              <ul>
                <li>Experience the Ganga Aarti ceremony.</li>
                <li>Boat ride on the Ganges at sunrise.</li>
              </ul>
            </li>
            <li>
              Day 9–10: Kerala (Backwaters & Beaches)
              <ul>
                <li>Houseboat cruise in Alleppey.</li>
                <li>Relax on Varkala Beach.</li>
              </ul>
            </li>
            <li>
              Day 11–12: Goa (Beach Bliss)
              <ul>
                <li>Relax on the beaches of North and South Goa.</li>
                <li>Explore local markets and nightlife.</li>
              </ul>
            </li>
            <li>
              Day 13–14: Mumbai (City of Dreams)
              <ul>
                <li>
                  Visit Gateway of India, Marine Drive, and Elephanta Caves.
                </li>
                <li>Explore local markets and enjoy Mumbai street food.</li>
              </ul>
            </li>
            <li>
              Day 15: Departure from Mumbai
              <ul>
                <li>Last-minute shopping and sightseeing.</li>
                <li>
                  Departure from Chhatrapati Shivaji Maharaj International
                  Airport.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="readmore-package">
          <div className="package-option">
            <h3>Backpacker Budget – ₹59,999/person</h3>
            <ul>
              <li>3-star hotels & guesthouses</li>
              <li>Public transport + shared AC buses</li>
              <li>Breakfast only</li>
              <li>Local group guides</li>
            </ul>
          </div>
          <div className="package-option">
            <h3> Explorer Standard – ₹84,999/person</h3>
            <ul>
              <li>4-star hotels + houseboat + beach resort</li>
              <li>Private AC vehicle for transfers</li>
              <li>All meals + cultural performances</li>
              <li>Entrance fees included</li>
            </ul>
          </div>
          <div className="package-option">
            <h3>Royal Premium – ₹1,24,999/person</h3>
            <ul>
              <li>5-star hotels + luxury houseboat</li>
              <li>Private chauffeur-driven car</li>
              <li>All meals + exclusive experiences</li>
              <li>Personal guide throughout the trip</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
