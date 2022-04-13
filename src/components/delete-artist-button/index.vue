<template>
  <div class="wrapper">
    <!-- Button trigger modal -->
    <button
      class="edit btn"
      type="button"
      data-bs-toggle="modal"
      :data-bs-target="'#Modal-' + rowIndex">
      ❌
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'Modal-' + rowIndex"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">
              Удалить исполнителя {{ artistName }}
            </h5>
            <button
              type="button"
              class="close"
              data-bs-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{{ textModal }}</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal">
              Отмена
            </button>
            <button
              v-on:click="toDeleteTrack"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal">
              Я понимаю
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
<style src="./styles.scss" lang="scss" />
