import { h } from "preact";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthButton } from "./authButton";
import { Link } from "wouter-preact";

const Nav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav class="navbar" id="nav" role="navigation" aria-label="main navigation">
      {/* <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger mt-5"
          aria-label="menu"
          aria-expanded="false"
          data-target="navMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div> */}

      <div id="navMenu" class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item">
            <Link href="/" class="navbar-item" id="app-name">
              Helen
            </Link>
          </div>
          {!isAuthenticated && (
            <div class="navbar-item">
              <Link href="/about" class="navbar-item">
                About
              </Link>
            </div>
          )}
          {isAuthenticated && (
            <div class="navbar-item">
              <Link href="/dashboard" class="navbar-item">
                Dashboard
              </Link>
            </div>
          )}
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <AuthButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Nav };
