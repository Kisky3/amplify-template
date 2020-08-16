<template>
  <div>
    <ul v-for="item in items" :key="item.id">
      <li>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['items'],
}
</script>