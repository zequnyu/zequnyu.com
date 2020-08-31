import React from "react";
import { Badge } from "@chakra-ui/core";

const whiteStyle = { color: "white", marginRight: "5px" };

export const PythonBadge = (
  <Badge key="python" style={{ ...whiteStyle, backgroundColor: "#7c80c1" }}>
    Python
  </Badge>
);

export const JavaBadge = (
  <Badge key="java" style={{ ...whiteStyle, backgroundColor: "#7740a2" }}>
    Java
  </Badge>
);

export const MySQLBadge = (
  <Badge key="mysql" style={{ ...whiteStyle, backgroundColor: "#2388d9" }}>
    MySQL
  </Badge>
);
