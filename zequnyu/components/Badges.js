import React from "react";
import { Badge } from "@chakra-ui/react";

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

export const JavaScriptBadge = (
  <Badge key="javascript" style={{ ...whiteStyle, backgroundColor: "#43c7d7" }}>
    JavaScript
  </Badge>
);

export const ReactBadge = (
  <Badge key="react" style={{ ...whiteStyle, backgroundColor: "#62da73" }}>
    React
  </Badge>
);

export const MatlabBadge = (
  <Badge key="matlab" style={{ ...whiteStyle, backgroundColor: "#1d437b" }}>
    Matlab
  </Badge>
);

export const MongoDBBadge = (
  <Badge key="mongodb" style={{ ...whiteStyle, backgroundColor: "#ff6949" }}>
    MongoDB
  </Badge>
);
