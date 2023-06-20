import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalEdit: false,
  modelDelete: false,
  modelSafe: false,
  modelDeleteconfirm: false,
};

const modelSlice = createSlice({
  name: "Model",
  initialState,
  reducers: {
    editModal: (state, action) => {
      state.modalEdit = action.payload;
    },
    deleteModal: (state, action) => {
      state.modelDelete = action.payload;
    },
    safeModel: (state, action) => {
      state.modelSafe = action.payload;
    },
    deleteConfirmModal: (state, action) => {
      state.modelDeleteconfirm = action.payload;
    },
  },
});

export const { editModal, deleteModal, safeModel, deleteConfirmModal } =
  modelSlice.actions;
export default modelSlice.reducer;
