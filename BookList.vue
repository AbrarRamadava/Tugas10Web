<template>
  <div>
    <h1>Daftar Buku</h1>
    <ul>
      <li v-for="book in books" :key="book.id">
        <strong>{{ book.title }}</strong> oleh {{ book.author }}
        <button @click="$router.push(`/book/${book.id}`)">Detail</button>
        <button @click="$router.push(`/edit/${book.id}`)">Edit</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['books'],
};
</script>
