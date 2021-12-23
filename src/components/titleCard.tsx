import { h } from "preact";

interface Title {
  title?: string;
  subtitle?: string;
}

const TitleCard = (props: Title) => {
  return (
    <div class="box" id="grad">
      <section class="hero">
        <div class="hero-body">
          {props.title && (
            <p class="title" id="title">
              {props.title}
            </p>
          )}
          {props.subtitle && (
            <p class="subtitle" id="title">
              {props.subtitle}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export { TitleCard };
