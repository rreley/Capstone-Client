import { h, Fragment } from "preact";
import { useAuth0 } from "@auth0/auth0-react";

const Greet = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Fragment>
      <div class="box" id="grad">
        <section class="hero">
          <div class="hero-body">
            <p class="title" id="title">
              Helen: A call tracking app
            </p>
            {!isAuthenticated && (
              <p class="subtitle" id="title">
                Go to the about page to learn more!
              </p>
            )}
          </div>
        </section>
      </div>

      <section class="section">
        {!isAuthenticated && (
          <div class="content">
            <p class="title is-4">Login to access your profile.</p>
          </div>
        )}
        {isAuthenticated && (
          <div class="content">
            <p class="title is-4">You are logged in to Helen!</p>
          </div>
        )}
      </section>

      <section class="section">
        <figure class="image 2by1">
          <img
            src="https://ik.imagekit.io/xbkhabiqcy9/tr:w-856,h-428/img/ualr_grQQlVZv3cp.jpg?updatedAt=1638474834663"
            alt="UA Little Rock Image"
            width="1300"
            height="800"
          ></img>
        </figure>
      </section>

      {/* <div class="box" id="grad">
        <div class="card">
          <div class="card-image">
            <figure class="image 2by1">
              <img
                src="https://i.postimg.cc/XqBxm7fp/ualr.jpg"
                alt="UA Little Rock Image"
                width="1300"
                height="800"
              ></img>
            </figure>
          </div>
          {!isAuthenticated && (
            <div class="card-content">
              <p class="title is-4">Login to access your profile.</p>
            </div>
          )}
          {isAuthenticated && (
            <div class="card-content">
              <p class="title is-4">You are logged in to Helen!</p>
            </div>
          )}
        </div>
      </div> */}
    </Fragment>
  );
};

export { Greet };
