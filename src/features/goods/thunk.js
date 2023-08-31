import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGoodAPI = createAsyncThunk("goods/getGoodAPI", async () => {
  const res = await axios.get(
    "https://oxmetall-9aef2-default-rtdb.europe-west1.firebasedatabase.app/Products.json"
  );

  return res.data;
});
export const postGoodAPI = createAsyncThunk(
  "goods/postGoodAPI",
  async (data) => {
    const res = await axios.post(
      "https://oxmetall-9aef2-default-rtdb.europe-west1.firebasedatabase.app/Products.json",
      data
    );

    return res.data;
  }
);
export const pathGoodAPI = createAsyncThunk(
  "goods/pathGoodAPI",
  async (data) => {
    const res = await axios.patch(
      "http://localhost:3001/goods/" + data.id,
      data.path
    );

    return res.data;
  }
);
export const deleteGoodAPI = createAsyncThunk(
  "goods/deleteGoodAPI",
  async (data) => {
    const res = await axios.delete("http://localhost:3001/goods/" + data);

    return res.data;
  }
);
