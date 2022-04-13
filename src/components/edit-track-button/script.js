import axios from 'axios';

export default {
  name: 'EditTrackButton',
  props: ['id', 'rowIndex', 'trackName'],
  data() {
    return {
      textModal: 'Новое имя для трека',
      newName: null,
    };
  },
  methods: {
    toEditTrack: function () {
      axios
        .put(`${window.location.origin}/api/track`, {
          data: { id: this.id, newName: this.newName },
        })
        .then(() => {
          this.$el.parentElement.firstChild.textContent = this.newName;
        });
    },
  },
};
