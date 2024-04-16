import React from "react";

const loadingIndicatorStyle: React.CSSProperties = {
  border: "4px solid var(--color-2)",
  borderRightColor: "transparent",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  animation: "spin 1s infinite",
};

export const LoadingIndicator = () => {
  return <div style={loadingIndicatorStyle} aria-label="Loading..."></div>;
};
