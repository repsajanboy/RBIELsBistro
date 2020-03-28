import imagesStyles from "../../../material-kit-react/imagesStyles.js";
import bgImg from "../../../../img/bg-dark-gray-pattern.jpg"
const ourChefsStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    backgroundImage: `url("${bgImg}")`,
  },
  title: {
    fontFamily: "Bellefair",
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontSize: 100,
    marginTop: "0px"
  },
  meet: {
    fontFamily: "Tangerine",
    fontSize: 50,
    marginBottom: "0px",
    color: "#FFFFFF",
  },
  wrapper: {
    paddingTop: "99px",
    height: "300px"
  },
  ...imagesStyles
};

export default ourChefsStyle;
