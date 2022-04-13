import axios from 'axios';
import DeleteArtistButton from '../../components/delete-artist-button/index.vue';
import DeleteTrackButton from '../../components/delete-track-button/index.vue';
import EditTrackButton from '../../components/edit-track-button/index.vue';
import EditArtistButton from '../../components/edit-artist-button/index.vue';
import CreateArtistButton from '../../components/create-artist-button';
import CreateTrackButton from '../../components/create-track-button';

export default {
  name: 'Main',
  components: {
    DeleteArtistButton,
    DeleteTrackButton,
    EditTrackButton,
    EditArtistButton,
    CreateArtistButton,
    CreateTrackButton,
  },
  data: () => {
    return {
      listTracks: [],
      listArtist: [],
      filterListArtist: [],
      listArtistsChoose: [],
      partNameArtist: '',
      partNameTrack: '',
      dateCreatedArtist: new Date(0),
      dateCreatedTrack: new Date(0),
      offsetTracks: null,
      offsetArtist: null,
      limitArtist: null,
      limitTracks: null,
    };
  },
  mounted() {
    axios.get(`${window.location.origin}/api/artist/tracks/all`).then((res) => {
      const { tracks, artists } = res.data;
      this.listTracks = tracks
        .map((track) => {
          return {
            ...track,
            ...artists.find((artist) => artist.id === track.artistId),
          };
        })
        .filter((e) => e.name);
      this.listArtist = artists;
    });
  },
  methods: {
    getAllArtist: function () {
      axios.get(`${window.location.origin}/api/artist/all`).then((res) => {
        this.filterListArtist = res.data;
      });
    },
    renamedArtist: function (artist) {
      this.listTracks = this.listTracks.map((e) => {
        if (e.artistId === artist.id) {
          e.name = artist.name;
        }
        return e;
      });

      this.listArtist = this.listArtist.map((e) => {
        if (e.id === artist.id) {
          e.name = artist.name;
        }
        return e;
      });
    },
    deletedArtist: function (artist) {
      this.listArtist = this.listArtist.filter((e) => {
        if (e.id !== artist.id) {
          return e;
        }
      });

      this.listTracks = this.listTracks.filter((e) => {
        if (e.artistId !== artist.id) {
          return e;
        }
      });
    },
    createTrack: function (track) {
      this.listTracks.push(track);
    },
    createArtist: function (artist) {
      this.listArtist.push(artist);
    },

    filter: function () {
      axios
        .get(`${window.location.origin}/api/track/filter`, {
          params: {
            listArtist: this.listArtistsChoose,
            partNameArtist: this.partNameArtist,
            partNameTrack: this.partNameTrack,
            dateCreatedArtist: this.dateCreatedArtist,
            dateCreatedTrack: this.dateCreatedTrack,
            offsetTracks: this.offsetTracks,
            offsetArtist: this.offsetArtist,
            limitArtist: this.limitArtist,
            limitTracks: this.limitTracks,
          },
        })
        .then((res) => {
          const { tracks, artists } = res.data;
          this.listTracks = tracks.map((track) => {
            return {
              ...track,
              ...artists.find((artist) => artist.id === track.artistId),
            };
          });
          this.listArtist = artists;
        });
    },
  },
};
