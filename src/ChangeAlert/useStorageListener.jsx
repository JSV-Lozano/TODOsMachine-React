import React from "react";

function useStorageListener(sincronized) {
  const [storageChange, setStorageChage] = React.useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("hubo cambios");
      setStorageChage(true);
    }
  });

  const toggleShow = () => {
    sincronized();
    setStorageChage(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener };
