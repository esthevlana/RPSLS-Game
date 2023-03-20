import { useState } from "react";

function Rules() {
  const [showRules, setShowRules] = useState(false);

  const toggleShowRules = () => {
    setShowRules(!showRules);
    console.log(showRules);
  };

  return (
    <div>
    <div className="rules-container">
      <button onClick={toggleShowRules}>
        {showRules ? "Hide" : "Show Rules"}
      </button>

      {showRules && (
        <span className="rules">
          <p>
            - Scissors cuts paper
            <br />
            - Paper covers rock
            <br />
            - Rock crushes lizard
            <br />
            - Lizard poisons Spock
            <br />
            - Spock smashes scissors
            <br />
            - Scissors decapitates lizard
            <br />
            - Lizard eats paper
            <br />
            - Paper disproves Spock
            <br />
            - Spock vaporizes rock
            <br />
            - (and as it always has) Rock crushes scissors
          </p>
        </span>
      )}
    </div>
    </div>
  );
}

export default Rules;