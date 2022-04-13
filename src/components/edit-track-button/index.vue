<template>
  <div class="wrapper">
    <!-- Button trigger modal -->
    <button
      class="edit btn"
      type="button"
      data-bs-toggle="modal"
      :data-bs-target="'#Modal-artist' + rowIndex">
      🖊
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      :id="'Modal-artist' + rowIndex"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">
              Редактировать трек {{ trackName }}
            </h5>
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
              <input
                class="form-control"
                placeholder="New name"
                v-model="newName" />
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
              v-on:click="toEditTrack"
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
