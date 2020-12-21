import React from "react";
import PropTypes from "prop-types";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../utils/theme";
import "../utils/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
  Component: null,
  pageProps: {},
};

export default MyApp;
