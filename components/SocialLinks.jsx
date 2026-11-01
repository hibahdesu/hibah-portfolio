import {
  FaLinkedinIn, FaGithub, FaKaggle, FaXTwitter, FaInstagram, FaYoutube, FaTiktok, FaPinterestP,
} from "react-icons/fa6";
import { profile } from "@/lib/data";

const ICONS = {
  LinkedIn: FaLinkedinIn, GitHub: FaGithub, Kaggle: FaKaggle, X: FaXTwitter,
  Instagram: FaInstagram, YouTube: FaYoutube, TikTok: FaTiktok, Pinterest: FaPinterestP,
};

export default function SocialLinks({ size = "md", className = "" }) {
  return (
    <ul className={`social social-${size} ${className}`} aria-label="Hibah on social media">
      {profile.social.map(({ name, href }) => {
        const Icon = ICONS[name];
        return (
          <li key={name}>
            <a href={href} target="_blank" rel="noreferrer" aria-label={name} title={name}>
              {Icon ? <Icon aria-hidden="true" /> : name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
