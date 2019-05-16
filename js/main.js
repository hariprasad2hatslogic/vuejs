const signUpForm = new Vue({
  el: '#signUpForm',
  data: {
    errors: [],
    inputEmail: null,
    inputPassword: null,
  },
  methods:{
    checkSignUpForm: function (e) {
      if (this.inputEmail && this.inputPassword) {
        return true;
      }

      this.errors = [];

      if (!this.inputEmail) {
        this.errors.push('Email required.');
      }
      else if (!isEmail(this.inputEmail)) {
        this.errors.push('Invalid Email.');
      }
      if (!this.inputPassword) {
        this.errors.push('Password required.');
      }
      
      $.ajax({
        type: "POST",
        url: 'ajax.php',
        data: $('#signUpForm').serialize(), // serializes the form's elements.
        success: function(data)
        {
            console.log(data); // show response from the php script.
        }
      });

      e.preventDefault();
    }
  }
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}