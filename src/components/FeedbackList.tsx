import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";

const feedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "ByteGrad",
    text: "test test test",
    daysAgo: 4,
  },
  {
    upvoteCount: 124,
    badgeLetter: "N",
    companyName: "Nike",
    text: "Nike is a great company",
    daysAgo: 2,
  },
];

export default function FeedbackList({
  feedbackItems,
  isLoading,
  errorMessage,
}) {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((feedbackItem) => {
        return (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        );
      })}
    </ol>
  );
}
