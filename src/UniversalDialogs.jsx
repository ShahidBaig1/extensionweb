import React from "react";
import TableDeleteConfirmModal from "./components/modals/deletedConfrim";

import TableDeleteModal from "./components/modals/deletemodel";
import SafeModal from "./components/modals/safemodel";
import TableEditModal from "./components/modals/tableEditModel";

const UniversalDialogs = () => {
  return (
    <>
      <TableEditModal />
      <TableDeleteModal />
      <SafeModal />
      <TableDeleteConfirmModal />
    </>
  );
};

export default UniversalDialogs;
