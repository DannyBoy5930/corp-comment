import FeedbackList from "./FeedbackList";
import Header from "./Header";

export default function Container({ feedbackItems, isLoading, errorMessage }) {
  return (
    <main className="container">
      <Header />
      <FeedbackList
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </main>
  );
}
