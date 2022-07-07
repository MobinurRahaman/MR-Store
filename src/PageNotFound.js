import { makeStyles, useTheme } from "@material-ui/core/styles";
import Lottie from "react-lottie";

import Page from "./components/Page";
import animationData from "./lotties/70383-page-not-found-error-404.json";

const useStyles = makeStyles((theme) => ({
  lottieContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function PageNotFoundLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={window.innerWidth * 0.7}
        width={window.innerWidth * 0.7}
      />
    </div>
  );
}

export default function PageNotFound() {
  const classes = useStyles();

  return (
    <Page title="404 Page Not Found">
      <div className={classes.lottieContainer}>
        <PageNotFoundLottie />
      </div>
    </Page>
  );
}
