new Vue({
    el: '#app',
    data: {
      display: ""
    },
    methods: {
      addToDisplay: function(value) {
        this.display += value;
      },
      clearDisplay: function() {
        this.display = "";
      },
      calculateResult: function() {
        try {
          this.display = eval(this.display);
        } catch (error) {
          this.display = "Error";
        }
      }
    }
  });
  