<template>
    <div class="login">
        <!--ログインコンポーネント-->
        <amplify-authenticator v-bind:authConfig="authConfig"></amplify-authenticator>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
          return {
            authConfig: {
              signUpConfig: {
                defaultCountryCode: "44",
                hiddenDefaults: ['phone_number']
              }
            }
          }
        }
    }
</script>