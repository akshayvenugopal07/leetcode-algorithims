import { useState, useEffect } from "react";

import Form from "./Form";
import PrevNextArea from "./PrevNextArea";

import "../App.css";

function FormArea({ data }) {
  const [currentStep, setCurrentStep] = useState(null);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    if (data?.steps?.length > 0) {
      setSteps(data.steps);
      setCurrentStep(data.steps[0]);
    }
  }, [data]);

  const checkAndSetStep = (step) => {
    setCurrentStep(step);
  };

  if (!currentStep) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      
      <div className="hori-title">
        {steps.map((step) => (
          <div
            key={step.id}
            className="title-item"
            onClick={() => checkAndSetStep(step)}
          >
            <h2>{step.title}</h2>
          </div>
        ))}
      </div>

      <Form step={currentStep} />

      <PrevNextArea
        previous={currentStep.navigation?.previous}
        next={currentStep.navigation?.next}
      />
    </div>
  );
}

export default FormArea;