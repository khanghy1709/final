import { auth, dangky } from "./firebaseConfig.js";
import { checkLogin, renderHomePage } from "./index123.js";
export const signUp = () => {
  document.querySelector(".container123").innerHTML = `
    <section class=" text-center text-lg-start" style="margin-top:150px;">
  <style>
    .rounded-t-5 {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    @media (min-width: 992px) {
      .rounded-tr-lg-0 {
        border-top-right-radius: 0;
      }

      .rounded-bl-lg-5 {
        border-bottom-left-radius: 0.5rem;
      }
    }
  </style>
  <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
          class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
      </div>
      <div class="col-lg-8">
        <div class="card-body py-5 px-md-5">

          <form>
            <!-- Email input -->
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" id="form2Example1" class="form-control" />
              <label class="form-label" for="form2Example1">Email address</label>
            </div>

            <!-- Password input -->
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="password" id="form2Example2" class="form-control" />
              <label class="form-label" for="form2Example2">Password</label>
            </div>

            <!-- 2 column grid layout for inline styling -->
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <!-- Checkbox -->
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                  <label class="form-check-label" for="form2Example31"> Remember me </label>
                </div>
              </div>

              <div class="col">
                <!-- Simple link -->
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <!-- Submit button -->
            <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4 btnSignup">Sign Up</button>

          </form>

        </div>
      </div>
    </div>
  </div>
</section>
`;
  // form2Example1 email
  // form2Example2 password
  //   .btnSignup btnSignup
  const email = document.querySelector("#form2Example1");
  const password = document.querySelector("#form2Example2");
  const btnSignup = document.querySelector(".btnSignup");
  btnSignup.addEventListener("click", async function () {
    if (email.value == "" || password.value == "") {
      alert("Mời bạn điền đầy đủ thông tin");
    } else {
      const { infoMessage, isSuccess } = await dangky(
        auth,
        email.value,
        password.value
      );
      if (isSuccess) {
        alert("Đăng ký thành công");
        localStorage.setItem("user", email.value);
        renderHomePage();
        checkLogin();
      } else {
        alert("Đăng ký thất bại");
      }
    }
  });
};
