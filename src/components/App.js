import React, { useState } from "react";
import Section from "./Section/Section";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
//.
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good * 100) / countTotalFeedback());
  };
  const onLeaveFeedback = (key) => {
    switch (key) {
      case "good":
        setGood((value) => value + 1);
        break;
      case "neutral":
        setNeutral((value) => value + 1);
        break;
      case "bad":
        setBad((value) => value + 1);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
}

export default App;
