import { title } from "../../../material-kit-react.js";
import bgImage from "../../../../img/sub-banner.jpg";

const aboutIntroStyle = {
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

export default aboutIntroStyle;