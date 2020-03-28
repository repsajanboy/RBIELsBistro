import { title } from "../../../material-kit-react.js";
import bgImage from "../../../../img/titlebar-bg-img.jpg";

const contactIntroStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    backgroundImage: `url("${bgImage}")`,
  },
  title:{
      ...title,
    fontFamily: 'Sans-Serif',
    color: '#FFFFFF',
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 50
  },
  wrapper:{
      paddingTop: "99px",
      height: "300px"
  }
};

export default contactIntroStyle;