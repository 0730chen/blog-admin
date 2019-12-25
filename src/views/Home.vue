<template>
  <div>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import LoginForm  from '@/views/Login/LoginForm'

export default {
  name: 'home',
  components: {
    HelloWorld,
    LoginForm
  }
}
</script>
