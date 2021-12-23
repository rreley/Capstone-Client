import { h, Fragment } from "preact";

const AboutGreet = () => {
  return (
    <Fragment>
      <div class="box" id="grad">
        <section class="hero">
          <div class="hero-body">
            <p class="title" id="title">
              Helen is a student recruitment and call tracking application
            </p>
            <p class="subtitle" id="title">
              Click to login button to go to the dashboard.
            </p>
          </div>
        </section>
      </div>

      <div class="box" id="grad">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child">
              <p id="title">
                Use Helen's features to keep track of prospective students and
                reach out to them thru calling or emails. Once you are logged in
                with a Google account, you can access the dashboard and see the
                prospective students. A logged in user can see the next
                prospective student after filling out the relevant survey in
                order to track how the previous interaction went. Once that
                survey is completed, the next prospect will be shown on the
                prospect page.
              </p>
            </article>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export { AboutGreet };
