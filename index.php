<?php include('header.php'); ?>
<div class="frontpage container-fluid">
  <div class="row">
    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
      <div class="card card-signin my-5">
        <div class="card-body">
          <h5 class="card-title text-center">Sign In</h5>
          <form id="signUpForm" @submit="checksignUpForm" action="" method="post" class="form-signin">
            <div class="sign-up-errors" v-if="errors.length">
              <ul>
                <li class="alert alert-danger" v-for="error in errors">{{ error }}</li>
              </ul>
            </div>
            <div class="form-label-group">
              <input type="email" id="inputEmail" v-model="inputEmail" class="form-control" 
              placeholder="Email address" autofocus required>
              <label for="inputEmail">Email address</label>
            </div>

            <div class="form-label-group">
              <input type="password" id="inputPassword" v-model="inputPassword" class="form-control" 
              placeholder="Password" required >
              <label for="inputPassword">Password</label>
            </div>

            <div class="custom-control custom-checkbox mb-3">
              <input type="checkbox" class="custom-control-input" id="customCheck1">
              <label class="custom-control-label" for="customCheck1">Remember password</label>
            </div>
            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
<?php include('footer.php'); ?>