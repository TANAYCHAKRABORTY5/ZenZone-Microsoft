import React from "react";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <div
      class="modal fade"
      id="membershipForm"
      tabindex="-1"
      role="dialog"
      aria-labelledby="membershipFormLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title" id="membershipFormLabel">
              LOGIN
            </h2>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <form class="membership-form webform" role="form">
              <input
                type="email"
                class="form-control"
                name="cf-email"
                placeholder="Johndoe@gmail.com"
                required
              />

              <input
                type="password"
                class="form-control"
                name="cf-pass"
                placeholder="password..."
                required
              />

              <button type="submit" class="form-control" id="submit-button" name="submit">
                Sign In
              </button>

              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="signup-agree" />
                <label class="custom-control-label text-small text-muted" for="signup-agree">
                  I agree to the
                  <Link href="#">Terms &amp;Conditions</Link>
                </label>
              </div>
            </form>
          </div>

          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
