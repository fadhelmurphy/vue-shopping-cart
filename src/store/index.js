import { createStore } from "vuex";
import products from "../mock/products.json";

// Vue.use(Vuex);

const state = {
  products: [],
  cart: [],
};

const getters = {
  products: (state) => state.products,
  cart: (state) => state.cart,
};

const actions = {
  getProducts({ commit }) {
    commit("getProductData");
  },
  addItemToCart({ commit }, item) {
    commit("addToCart", item);
  },
  removeItemFromCart({ commit }, id) {
    commit("removeFromCart", id);
  },
  addQty({ commit }, id) {
    commit("addQty", id);
  },
  reduceQty({ commit }, id) {
    commit("reduceQty", id);
  },
  emptyCart({ commit }) {
    commit("emptyCart");
  }
};
const mutations = {
  getProductData(state) {
    state.products = products;
  },
  addToCart(state, item) {
    const productInCart = state.cart.find((product) => product.id === item.id);
    if (!productInCart) {
      state.cart.push({ ...item, qty: 1 });
    } else {
      productInCart.qty++;
    }
  },
  removeFromCart(state, id) {
    return state.cart = state.cart.filter((item) => item.id !== id);
  },
  addQty(state, id) {
    const productInCart = state.cart.find((product) => product.id === id);
    productInCart.qty++;
  },
  reduceQty(state, id) {
    const productInCart = state.cart.find((product) => product.id === id);
    productInCart.qty--;
      if (productInCart.qty === 0) {
        state.cart = state.cart.filter((item) => item.id !== id);
    }
  },
  emptyCart(state) {
    state.cart = []
  }
};

const store = createStore({
  state,
  getters,
  actions,
  mutations,
});

export default store