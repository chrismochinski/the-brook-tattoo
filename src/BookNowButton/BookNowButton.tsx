import { Link } from "react-router-dom";
import "./BookNowButton.scss";

interface BookNowButtonProps {
  text?: string;
  size?: "small" | "medium" | "large";
  link?: string;
}

export function BookNowButton(props: BookNowButtonProps) {
  const { text = "Book Now", size = "medium", link = "/" } = props;
  return (
    <Link to={link} className={`bookNowButton ${size}`}>
      <h3>{text}</h3>
    </Link>
  );
}
