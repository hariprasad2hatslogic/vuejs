<?php include 'header.php';?>
<section id="mailApp">
  <div class="main">
    <div class="container-fluid">
      <div class="">
        <div class="row top-bar">
          <div class="col-sm-2">
            <button type="button" class="btn_compose btn btn-info btn-md" data-toggle="modal"
              data-target="#modalCompse">Compose</button>
          </div>
          <div class="col-sm-6">
            <div class="main__check">
              <input type="checkbox" @click="toggleSelect" :checked="selectAll" />Select all
            </div>
            <div class="main__refresh">
              <a href="#" class="delete" id="deleteAcc" @click="moveToTrash">Delete</a>
            </div>
            <div class="main__refresh">
              <a href="#" class="read" id="ReadChkB" @click="markAsRead">Mark as read</a>
            </div>
            <div class="main__refresh">
              <a href="#" class="unread" id="unReadChk" @click="markAsUnRead">Mark as unread</a>
            </div>
          </div>
          <div class="col-sm-4">
            <nav aria-label="Page navigation example main-pagination">
              <ul class="pagination main-pagination__order">
                <li class="page-item main-pagination__list">
                  <a class="page-link main-pagination__link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item main-pagination__list">
                  <a class="page-link main-pagination__link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-2">
          <div class="side-nav">
            <div class="nav flex-column nav-pills side-nav__main " id="v-pills-tab" role="tablist"
              aria-orientation="vertical">
              <!-- <button type="button" class="btn side-nav__btn" data-toggle="modal" data-target="#myModal"> Open modal</button> -->
              <a v-on:click="tabInbox" class=" side-nav__list nav-link" id="v-pills-home-tab" data-toggle="pill"
                href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">inbox</a>
              <a v-on:click="tabSent" class="nav-link side-nav__list" id="v-pills-messages-tab" data-toggle="pill"
                href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Sent
                items</a>
              <a v-on:click="tabTrash" class="nav-link side-nav__list trash-bt" id="v-pills-settings-tab"
                data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings"
                aria-selected="false">Trash</a>
            </div>
          </div>
        </div>

        <div class="col-sm-10">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade " id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              <table class="table table-sm indbox-table" id="tbl">
                <tbody>
                  <tr :class="[mail.status?'bold':'']" v-if="mails.length" v-for="mail in mails">
                    <td>
                      <input type="checkbox" class="checkBoxClass" v-model="mail.checked" :value="mail.id" />
                    </td>
                    <td colspan="6">{{ mail.name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade " id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              <table class="table table-sm indbox-table">
                <tbody>

                  <tr :class="[mail.status?'bold':'']" v-if="mails.length" v-for="mail in mails">
                    <td>
                      <input type="checkbox" class="checkBoxClass" v-model="mail.checked" :value="mail.id" />
                    </td>
                    <td colspan="6">{{ mail.name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="tab-pane fade bin" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
              <table class="table table-sm trash-table">
                <tbody>
                  <tr :class="[mail.status?'bold':'']" v-if="mails.length" v-for="mail in mails">
                    <td>
                      <input type="checkbox" class="checkBoxClass" v-model="mail.checked" :value="mail.id" />
                    </td>
                    <td colspan="6">{{ mail.name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- The #modalCompse Modal -->
  <div class="modal" id="modalCompse">
    <div class="modal-dialog">
      <div class="modal-content">

        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Compose Mail</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
          <form id="mailForm" v-on:submit.prevent="checkMailForm" action="" class="form-mailForm">
            <div class="sign-up-errors" v-if="errors.length">
              <ul>
                <li class="alert alert-danger" v-for="error in errors">{{ error }}</li>
              </ul>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" name="mailSubject" v-model="mailSubject"
              id="mailSubject" placeholder="Mail Subject">
            </div>
            <!-- <div class="form-group">
              <textarea class="form-control" name="mailContent" v-model="mailContent" id="mailContent"
                placeholder="Email Content"></textarea>
            </div> -->
            <button type="submit" class="btn btn-primary">Save</button>
          </form>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>

      </div>
    </div>
  </div>
</section>
<?php include 'footer_v2.php';?>