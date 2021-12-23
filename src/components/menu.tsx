import { h, Fragment } from "preact";
import { Link } from "wouter-preact";

const Menu = (props: any) => {
  return (
    <Fragment>
      <div class="box">
        <aside class="menu is-3">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li>
              <Link to={"/dashboard"} id="menuButton" class="menu-item">
                Profile
              </Link>
            </li>
            <li>
              <Link to={"/prospect"} class="menu-item" id="disabledLink">
                Next Prospect
              </Link>
            </li>
          </ul>
          <p class="menu-label">Admin</p>
          <ul class="menu-list">
            <li>
              <Link to={"/import"} id="menuButton" class="menu-item">
                Import Data
              </Link>
            </li>
            <li>
              <Link to={"/manage"} id="menuButton" class="menu-item">
                Manage Users
              </Link>
            </li>
            <li>
              <Link to={"/analysis"} id="menuButton" class="menu-item">
                Campaign Analysis
              </Link>
            </li>
            <li>
              <Link to={"/external-api"} id="menuButton" class="menu-item">
                Test the API
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </Fragment>
  );
};

export { Menu };
