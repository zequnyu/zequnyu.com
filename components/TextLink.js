import React from "react";
import { css } from "@emotion/core";
import PropTypes from "prop-types";
import { Link } from "@chakra-ui/core";

const TextLink = (props) => {
  const { href, children } = props;
  return (
    <Link
      href={href}
      target="_blank"
      style={{
        backgroundColor: "#f5e8bb",
      }}
      css={css({
        "&:hover": {
          textDecoration: "none",
          backgroundColor: "#eeda90 !important",
        },
      })}
      _focus={{ outline: 0 }}
    >
      {children}
    </Link>
  );
};

TextLink.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
};

TextLink.defaultProps = {
  children: "",
  href: "",
};

export default TextLink;
