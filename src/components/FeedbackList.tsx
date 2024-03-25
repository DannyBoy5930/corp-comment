import { useEffect, useState } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";

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

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
    )
      .then((response) => {
        if (!response.ok) {
          console.log("Problem fetching feedback");
        }

        return response.json();
      })
      .then((data) => {
        setFeedbackItems(data.feedbacks);
        setIsLoading(false);
      });
  }, []);

  return (
    <ol className="feedback-list">
      {isLoading ? <Spinner /> : null}
      {feedbackItems.map((feedbackItem) => {
        return (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        );
      })}
    </ol>
  );
}
