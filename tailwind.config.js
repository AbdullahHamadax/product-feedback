/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background_body: "var(--background-body)",
        suggestions_bar: "var(--suggestions-bar)",
        feedback_title: "var(--feedback-title)",
        feedback_tag: "var(--feedback-tag)",
        feedback_paragraph: "var(--feedback-paragraph)",
        feedback_upvote: "var(--feedback-upvote)",
        feedback_tag_card_hover: "var(--feedback-tag-card-hover)",
        add_feedback_button: "var(--add-feedback-button)",
        add_feedback_button_hover: "var(--add-feedback-button-hover)",
        header_faded: "var(--header-faded)",
        list_orange: "var(--list-orange)",
        list_cyan: "var(--list-cyan)",
      },
      fontFamily: {
        jost: ["Jost"],
      },
    },
  },
  plugins: [],
};
