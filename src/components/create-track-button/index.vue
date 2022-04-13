<template>
  <div class="wrapper">
    <!-- Button trigger modal -->
    <button
      class="add-link btn"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#Modal-track-create">
      ➕
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="Modal-track-create"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">Добавить новый трек</h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>{{ textModal }}</label>
              <select
                v-model="artistId"
                class="form-select"
                aria-label="Default select example">
                <!-- <option selected>Open this select menu</option> -->
                <option disabled value="">Выберите один из вариантов</option>
                <option
                  v-for="item in listArtists"
                  :key="item.id + '-artists'"
                  :value="item.id">
                  {{ item.name }}
                </option>
              </select>
              <input
                class="form-control"
                placeholder="New name"
                v-model="nameTrack" />
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal">
              Отмена
            </button>
            <button
              v-on:click="toCreateTrack"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal">
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
<style src="./styles.scss" lang="scss" />
