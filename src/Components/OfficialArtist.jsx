import artistIcon from "../media/artistIcon.svg";
import info from "../media/info.svg";
import spotify from "../media/spotify.svg";
import appleMusic from "../media/appleMusic.svg";
import tickTock from "../media/tickTock.svg";
import lock from "../media/lock.svg";
import canada from "../media/canada.svg";
import play from "../media/play.svg";

export default function OfficialArtist() {
  return (
    <>
      <div className="official-artist">
        <div className="official-artist-episode-1">
          <img src={artistIcon} alt="artist" />
        </div>

        <div className="official-artist-episode-2">
          <div className="official-artist-chapter">
            <div className="official-artist-flex">
              <p className="official-artist-grey-text">Official Artist</p>
              <img src={info} alt="info" />
            </div>
          </div>
          <div className="official-artist-chapter">
            <p className="official-artist-white-text official-artist-biger">
              Khabane Lame
            </p>
          </div>
          <div className="official-artist-chapter">
            <p className="official-artist-white-text official-artist-midle">
              Melodic sound
            </p>
          </div>
          <div className="official-artist-chapter">
            <div className="official-artist-flex">
              <p className="official-artist-grey-text">Type:</p>
              <div className="official-artist-original">
                <p>original</p>
              </div>
            </div>
          </div>
          <div className="official-artist-social official-artist-flex">
            <img
              className="official-artist-social-image"
              src={spotify}
              alt="spotify"
            />
            <img
              className="official-artist-social-image"
              src={appleMusic}
              alt="apple music"
            />
            <img
              className="official-artist-social-image"
              src={tickTock}
              alt="tickTock"
            />
          </div>
        </div>

        <div className="official-artist-episode-3">
          <div className="official-artist-chapter">
            <p className="official-artist-white-text">🔥🔥🔥 Trending</p>
          </div>
          <div className="official-artist-flex official-artist-chapter">
            <p className="official-artist-grey-text">Duration:</p>
            <p className="official-artist-white-text">00:45</p>
          </div>
          <div className="official-artist-flex official-artist-chapter">
            <p className="official-artist-grey-text">Bitrate:</p>
            <img className="official-artist-lock" src={lock} alt="lock" />
          </div>
        </div>

        <div className="official-artist-episode-4">
          <div className="official-artist-flex official-artist-chapter">
            <p className="official-artist-grey-text">Country:</p>
            <p className="official-artist-white-text">Canada</p>
            <img className="official-artist-canada" src={canada} alt="canada" />
          </div>
          <div className="official-artist-flex official-artist-chapter">
            <p className="official-artist-grey-text">Place in the country:</p>
            <p className="official-artist-white-text">05</p>
          </div>
          <div className="official-artist-flex official-artist-chapter">
            <p className="official-artist-grey-text">Place in the world:</p>
            <p className="official-artist-white-text">43</p>
          </div>
          <div className="official-artist-flex official-artist-chapter official-artist-border">
            <p className="official-artist-white-text official-artist-border-bold">
              A
            </p>
            <p className="official-artist-white-text">Sound to text</p>
          </div>
        </div>

        <div>
          <div className="official-artist-upper">
            <p className="official-artist-grey-text">🙋‍♂️ Videos</p>
            <p className="official-artist-upper-number">1.8M</p>
            <div className="official-artist-upper-forVideo">
              <img src={play} alt="play" />
              <p className="official-artist-upper-video">Watch Videos</p>
            </div>
          </div>
          <div className="official-artist-bottom">
            <p>Daily Growth</p>
            <p>+100k</p>
          </div>
        </div>
      </div>
      <div className="keywords">
        <p className="official-artist-grey-text">Keywords:</p>
        <div className="keywords-word">
          <p>Whispering breeze</p>
        </div>
        <div className="keywords-word">
          <p>Wandering soul</p>
        </div>
        <div className="keywords-word">
          <p>Crimson dawn</p>
        </div>
        <div className="keywords-word">
          <p>Echoes of silence</p>
        </div>
      </div>
    </>
  );
}
