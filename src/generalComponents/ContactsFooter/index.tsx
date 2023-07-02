import { StyledContactsFooter } from "./ContactsFooter.styled";
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaReddit,
  FaSpotify,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

interface IIcon {
  href: string;
}

export const Icon: React.FC<IIcon> = ({ href }) => {
  let icon;
  if (href.includes("instagram")) {
    icon = <FaInstagram style={{ width: "100%", height: "100%" }} />;
  } else if (href.includes("facebook")) {
    icon = <FaFacebook style={{ width: "100%", height: "100%" }} />;
  } else if (href.includes("tiktok")) {
    icon = <FaTiktok style={{ width: "100%", height: "100%" }} />;
  } else if (href.includes("youtube")) {
    icon = <FaYoutube style={{ width: "100%", height: "100%" }} />;
  } else if (href.includes("spotify")) {
    icon = <FaSpotify style={{ width: "100%", height: "100%" }} />;
  } else if (href.includes("reddit")) {
    icon = <FaReddit style={{ width: "100%", height: "100%" }} />;
  } else if (href.includes("linkedin")) {
    icon = <FaLinkedin style={{ width: "100%", height: "100%" }} />;
  } else if (href.includes("github")) {
    icon = <FaGithub style={{ width: "100%", height: "100%" }} />;
  } else if (href.includes("mailto:")) {
    icon = <FaEnvelope style={{ width: "100%", height: "100%" }} />;
  } else if (href.includes("twitter")) {
    icon = <FaTwitter style={{ width: "100%", height: "100%" }} />;
  } else {
    icon = <p>No Icon</p>;
  }
  return (
    <div style={{ width: "32px", height: "32px" }}>
      <a href={href}>
        <button
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {icon}
        </button>
      </a>
    </div>
  );
};

const ContactsFooter: React.FC = () => {
  return (
    <StyledContactsFooter>
      <div>
        <p>Social media and other links:</p>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <Icon href="mailto:naglis.suliokas@gmail.com" />
            <Icon href="https://www.instagram.com/naglisaudrius/" />
            <Icon href="https://www.linkedin.com/in/naglissul/" />
            <Icon href="https://open.spotify.com/user/0labnwjaw8ife28ldwgqjpknh?si=93bc027711194fe1" />
            <Icon href="https://www.facebook.com/profile.php?id=100014978984368" />
          </div>
          <div>
            <Icon href="https://www.youtube.com/@naglisaudrius" />
            <Icon href="https://www.github.com/naglissul/" />
          </div>
        </div>
      </div>

      <div>
        <p>Writing contacts (Audrius Tyliūnas):</p>
        <Icon href="mailto:tyliunas.audrius@gmail.com" />
        <Icon href="https://www.instagram.com/audriustyliunas/" />
        <Icon href="https://www.facebook.com/profile.php?id=100090809108632" />
        <br />
        <p>© Naglis Šuliokas 2023</p>
      </div>
    </StyledContactsFooter>
  );
};

export default ContactsFooter;
