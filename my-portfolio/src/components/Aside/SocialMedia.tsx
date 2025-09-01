import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="flex justify-center gap-5">
      <a
        href="https://www.instagram.com/swornim.bhattarai/"
        className="hover:text-(--primary-blue)"
      >
        <FaInstagram size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/swornim-bhattarai-597a5216b"
        className="hover:text-(--primary-blue)"
      >
        <FaLinkedin size={20} />
      </a>
      <a
        href="https://github.com/swornimb"
        className="hover:text-(--primary-blue)"
      >
        <FaGithub size={20} />
      </a>
    </div>
  );
}

export default SocialMedia;
