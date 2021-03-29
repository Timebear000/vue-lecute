<template>
  <div>
    <select v-model="city">
      <option v-for="(option, index) in options" :key="index" :value="option.v">
        {{ option.t }}
      </option>
    </select>

    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>제품가격</th>
          <th>배송료</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(product, index) in productList">
          <td>{{ product.product_name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.delivery_price }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { v: "02", t: "서울" },
        { v: "21", t: "부산" },
        { v: "064", t: "제주" },
      ],
      city: "064",
      productList: [
        {
          product_name: "기계식 키보드",
          price: 25000,
          delivery_price: 5000,
          category: "전자제품",
        },
        {
          product_name: "운동화",
          price: 30000,
          delivery_price: 1500,
          category: "운동화",
        },
      ],
    };
  },
};
</script>

<style></style>
