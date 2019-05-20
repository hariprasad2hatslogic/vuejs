<?php include('header.php'); ?>
<script src="https://cdn.jsdelivr.net/vue/latest/vue.js"></script>

<div id="app">
  <h4>User</h4>
  <div>
    <table>
      <tr>
        <th>Name</th>
        <th>Select
          <input type="checkbox" @click="toggleSelect" :checked="selectAll">
        </th>
      </tr>
      <tr v-for="user in users">
        <td>{{ user.name }}</td>
        <td>
          <input type="checkbox" v-model="user.checked">
        </td>
      </tr>
    </table>
  </div>

</div>
<script>
  new Vue({
  el: '#app',
  data: {
    users: [{
      "id": "1",
      "name": "Shad Jast",
      "email": "pfeffer.matt@yahoo.com",
      'checked': false
    }, {
      "id": "2",
      "name": "Duane Metz",
      "email": "mohammad.ferry@yahoo.com",
      'checked': false
    }, {
      "id": "3",
      "name": "Myah Kris",
      "email": "evolkman@hotmail.com",
      'checked': false
    }, {
      "id": "4",
      "name": "Dr. Kamron Wunsch",
      "email": "lenora95@leannon.com",
      'checked': true
    }, ],

  },
  computed: {
    selectAll: function() {
      return this.users.every(function(user){
        return user.checked;
      });
    }
  },
  methods: {
    toggleSelect: function() {
      var select = this.selectAll;
      this.users.forEach(function(user) {

        user.checked = !select;

      });
      this.selectAll = !select;
    },

  }
});
  </script>
<?php include('footer.php'); ?>