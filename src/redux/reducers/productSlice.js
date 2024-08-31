import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
  isLoding: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkAPI) => {
    try {
      let url = `https://my-json-server.typicode.com/kimyerins/mmd-react-router/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const fetchProductDetail = createAsyncThunk(
  "product/fetchProductDetail",
  async (id, thunkAPI) => {
    try {
      let url = `https://my-json-server.typicode.com/kimyerins/mmd-react-router/products/${id}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
// function productReducer(state = initalState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_SINGLE_PRODUCT_SUCCESS":
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }

// export default productReducer;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoding = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoding = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoding = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.isLoding = false;
        state.error = action.payload;
      });
  },
});

console.log("ppp", productSlice);

export const productActions = productSlice.actions;
export default productSlice.reducer;
