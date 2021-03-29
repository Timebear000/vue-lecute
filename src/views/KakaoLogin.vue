<template>
  <div>
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img src="kakaologin.png" width="222" />
    </a>
    <br />
    <button type="button" @click="kakoLogout">카카오 로그아웃</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: "",
    };
  },
  methods: {
    kakaoLogin() {
      //카카오톡 sdk 에서 제공한 함수
      window.Kakao.Auth.login({
        //요청 정보
        scope: "profile, account_email",
        //성공시 함수 실행
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      //로그인이 성공한 상태에서 사용자 정보를 읽어오기
      window.Kakao.API.request({
        //카카오톡 현재 정보
        url: "/v2/user/me",
        success: (res) => {
          //각 데이터들 받아옴
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile.nickname; //카카오 닉네임
          const email = kakao_account.email; // 카카오 이메일

          console.log(nickname);
          console.log(email);

          //로그인 처리 구현
          //백엔드 처리

          //Store 처리
          this.$store.commit("user", { kakao_account });

          console.log(kakao_account);
          alert("로그인성공");
        }, //로그인 실패시
        fail: (error) => {
          console.log(error);
        },
      });
    },
    kakoLogout() {
      //현재 access token 가져오기
      if (!window.Kakao.Auth.getAccessToken()) {
        console.log("로그인 중이 아닙니다?");
        return;
      }
      //카카오 로그아웃 api
      window.Kakao.Auth.logout((response) => {
        //로그아웃
        console.log("access token :", window.Kakao.Auth.getAccessToken());
        console.log("log out:", response);

        this.$store.commit("user", {});
      });
    },
  },
};
</script>

<style></style>
