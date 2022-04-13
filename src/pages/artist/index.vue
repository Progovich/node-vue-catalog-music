<template>
  <table class="table table-hover table-sm table-bordered" id="catalog-table">
    <thead>
      <a href="/">Назад</a>
      <tr>
        <th scope="col">{{ nameArtist }}</th>
      </tr>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Трек</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in listTracks" :key="item.id + '-track'">
        <th scope="row">{{ index }}</th>
        <th>
          {{ item.name }}
          <DeleteTrackButton :id="item.id" />
          <a class="edit" :href="'/track/edit/' + item.id">🖊</a>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script src="./script.js" />
<style src="./styles.scss" lang="scss" />
