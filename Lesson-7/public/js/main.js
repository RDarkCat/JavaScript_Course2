const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

new Vue({
  el: '#app',
  methods: {
    doJson(url, method, data) {
      let params = {};
      const paramsTemplate = {
        method: method,
        headers: {
          "Content-Type": "application/json"
        }
      };

      if (data !== undefined && method !== 'GET') {
        params = Object.assign({body: JSON.stringify(data)}, paramsTemplate);
      }

      return fetch(url, params)
          .then(result => result.json())
          .catch(error => this.$refs.error.setText(error));
    }
  }
});
