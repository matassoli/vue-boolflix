var app = new Vue({
  el: "#app",
  data: {
    title: "",
    films: [],

  },
  methods: {
    searchMovie: function() {
      axios.get('https://api.themoviedb.org/3/search/movie?', {
          params: {
            api_key: "50ab899d8790694ff25d85dc8549540d",
            query: this.title,
            language: "it-IT",
          }
        })
        .then((response) => {
          this.films = response.data.results;
        });

      axios.get('https://api.themoviedb.org/3/search/tv?', {
        params: {
          api_key: "50ab899d8790694ff25d85dc8549540d",
          query: this.title,
          language: "it-IT",
        }
      }).then((response) => {
        this.films = [...this.films, ...response.data.results];
      });
    },

  }
});
