import { Nav } from "./nav";
import { Footer } from "./footer";
import { h, Fragment } from "preact";

const Wrapper = (props: any) => {
  return (
    <Fragment>
      <Nav />
      <div class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-full">{props.children}</div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export { Wrapper };
