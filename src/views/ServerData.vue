<template>
  <div>
    <div>
      <button @click="getProductList">조회</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>제품명</th>
            <th>가격</th>
            <th>배송료</th>
            <th>카테고리</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(product, index) in productList">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.delivery_price }}</td>
            <td>{{ product.category }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      sampleData: "",
      productList: [],
    };
  },
  // created() {
  //   this.getProductList();
  // },
  methods: {
    async getProductList() {
      this.productList = await this.api(
        "https://d6bbb359-6e71-46b7-83c5-39eca351d995.mock.pstmn.io/products",
        "GET",
        {}
      );
      console.log(this.productList);
    },
    async api(url, method, data) {
      return (
        await axios({ method: method, url: url, data: data }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
  },
};
</script>

<style></style>
