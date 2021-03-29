<template>
  <div>
    <div>
      <select v-model="selectedcity">
        <option :value="city.code" v-for="(city, i) in cityList" :key="i">
          {{ city.name }}
        </option>
      </select>
      <input type="text" v-model="userName" @keyup.enter="searchUserList" />
      <button type="button" @click="searchUserList">조회</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>직업</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, i) in userList" :key="i">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      selectedcity: "",
      cityList: [
        { name: "서울", code: "02" },
        { name: "부산", code: "21" },
        { name: "제주", code: "064" },
      ],
      userList: [],
    };
  },
  methods: {
    searchUserList() {
      // const selectedcity = this.selectedcity;
      // const userName= this.userName;
      const params = {
        selectedcity: this.selectedCity,
        userName: this.userName,
      };
      //서버에서 호출
      this.userList = this.getUserList(params);
    },
    getUserList(params) {
      console.log(params);
      let list = [
        { name: "유재석", age: 49, job: "연예인" },
        { name: "하하", age: 46, job: "연예인" },
        { name: "양세찬", age: 37, job: "연예인" },
        { name: "김종국", age: 44, job: "연예인" },
        { name: "정준하", age: 54, job: "연예인" },
      ];
      return list;
    },
  },
};
</script>

<style></style>
