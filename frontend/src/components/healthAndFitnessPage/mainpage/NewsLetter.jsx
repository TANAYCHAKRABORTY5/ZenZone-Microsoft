import React from "react";

function NewsLetter() {
  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Sign Up For newsletters</h4>
        <p>
          Get E-mail updates about upcoming <span>medicines/suppliments</span> when they are
          Available...
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your email address" />
        <button className="normal">Sign Up</button>
      </div>
    </section>
  );
}

export default NewsLetter;
