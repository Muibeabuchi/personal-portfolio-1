import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const aboutCardData = [
  {
    id: 1,
    title: "Experience",
    stats: "1+ years",
    icon: <FaAward className="about__icon" />,
  },
  {
    id: 2,
    title: "Clients",
    stats: "2",
    icon: <FiUsers className="about__icon" />,
  },
  {
    id: 3,
    title: "Projects",
    stats: "7+ completed",
    icon: <VscFolderLibrary className="about__icon" />,
  },
];

export default aboutCardData;
