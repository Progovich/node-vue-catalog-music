<template>
  <div>
    <table class="table table-hover table-sm table-bordered" id="tracks-table">      
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            Исполнитель
            <CreateArtistButton  v-on:createArtist="createArtist"/>
          </th>
          <th scope="col">
            Трек
            <CreateTrackButton v-on:createTrack="createTrack" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in listTracks"
          :key="item['tracks.id'] + '-track'">
          <th scope="row">{{ index }}</th>
          <th>
            <a :href="'/artist/' + item.id">{{ item.name }}</a>
            <DeleteArtistButton
              :id="item.id"
              :artistName="item.name"
              :rowIndex="index"
              v-on:deletedArtist="deletedArtist" />
            <EditArtistButton
              :id="item.id"
              :artistName="item.name"
              :rowIndex="index"
              v-on:renamedArtist="renamedArtist" />
          </th>
          <th>
            {{ item['tracks.name'] }}
            <DeleteTrackButton :id="item.id" />
            <EditTrackButton
              :trackName="item['tracks.name']"
              :id="item['tracks.id']"
              :rowIndex="index" />
          </th>
        </tr>
      </tbody>
    </table>

    <div class="wrapper">
    <!-- Button trigger modal -->
    <button
      v-on:click="getAllArtist"
      class="edit btn"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#Modal-filter">
      Фильтр
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="Modal-filter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel">Фильтры</h5>
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
              <label for="artists">Исполнители</label>
              <select v-model="listArtistsChoose" id="artists" multiple data-live-search="true">
                <option :value="item.id" v-for="item in filterListArtist" :key="item.id + '-filter'">
                  {{ item.name }}
                </option>
              </select>
              <label for="part-name-artist">Поиск исполнителя по части имени</label>
              <input v-model="partNameArtist" id="part-name-artist" type="text" />
              <label for="part-name-track">Поиск трека по части имени</label>
              <input v-model="partNameTrack" type="text" id="part-name-track" />
              <label for="created-atrist">Поиск по дате создания исполнителя</label>
              <input v-model="dateCreatedArtist" type="date" id="created-atrist" />
              <label for="created-track">Поиск по дате создания трека</label>
              <input v-model="dateCreatedTrack" type="date" id="created-track" />
              <label for="offsetArtist">Смещение для артистов</label>
              <input v-model="offsetArtist" type="text" id="offsetArtist" />
               <label for="offsetTracks">Смещение для треков</label>
              <input v-model="offsetTracks" type="text" id="offsetTracks" />
              <label for="limitArtist">Количество исполнителей</label>
              <input v-model="limitArtist" type="text" id="limitArtist" />
              <label for="limitTracks">Количество треков</label>
              <input v-model="limitTracks" type="text" id="limitTracks" />
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
              v-on:click="filter"
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal">
              Фильтровать
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    <table class="table table-hover table-sm table-bordered" id="artist-table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
            Все исполнители
            <CreateArtistButton />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(item, index) in listArtist"
          :key="item['tracks.id'] + '-artist-list'">
          <th scope="row">{{ index }}</th>
          <th>
            <a :href="'/artist/' + item.id">{{ item.name }}</a>
            <DeleteArtistButton
              :id="item.id"
              :artistName="item.name"
              :rowIndex="index"
              v-on:deletedArtist="deletedArtist" />
            <EditArtistButton
              :id="item.id"
              :artistName="item.name"
              :rowIndex="index"
              v-on:renamedArtist="renamedArtist" />
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="./script.js" />
<style src="./styles.scss" lang="scss" />
