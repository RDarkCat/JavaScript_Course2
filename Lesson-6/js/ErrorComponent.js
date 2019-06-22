Vue.component('error', {
  template: `<div>
                 {{errorMessage}}
             </div>`,
  data() {
    return {
      errorMessage: 'Error message'
    }
  }
});
