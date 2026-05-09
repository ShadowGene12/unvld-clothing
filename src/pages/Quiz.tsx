import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { quizQuestions } from "@/data/quizData";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ ascend: 0, japanese: 0, streetwear: 0, subtle: 0 });
  const [answers, setAnswers] = useState<Record<string, number>>({});

  useEffect(() => {
    const savedState = localStorage.getItem('unvld_quiz_state');
    if (savedState) {
      const { step, currentScores, currentAnswers } = JSON.parse(savedState);
      setCurrentStep(step);
      setScores(currentScores);
      setAnswers(currentAnswers);
    }
  }, []);

  const handleOptionSelect = (optionIndex: number, optionScores: Record<string, number>) => {
    const newScores = { ...scores };
    Object.keys(optionScores).forEach(key => {
      newScores[key as keyof typeof newScores] += optionScores[key];
    });

    const newAnswers = { ...answers, [quizQuestions[currentStep].id]: optionIndex };
    
    setScores(newScores);
    setAnswers(newAnswers);

    if (currentStep < quizQuestions.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      localStorage.setItem('unvld_quiz_state', JSON.stringify({
        step: nextStep,
        currentScores: newScores,
        currentAnswers: newAnswers
      }));
    } else {
      // Calculate result
      const result = Object.keys(newScores).reduce((a, b) => newScores[a as keyof typeof newScores] > newScores[b as keyof typeof newScores] ? a : b);
      localStorage.setItem('unvld_quiz_result', result);
      localStorage.removeItem('unvld_quiz_state');
      navigate('/result');
    }
  };

  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep) / quizQuestions.length) * 100;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="w-full h-1 bg-secondary fixed top-0 left-0">
        <div 
          className="h-full bg-foreground transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-3xl mx-auto w-full">
        <div className="w-full space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              {currentStep + 1} / {quizQuestions.length}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground leading-tight">
              {currentQuestion.question}
            </h2>
          </div>

          <div className="grid gap-4 w-full">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx, option.scores)}
                className="w-full text-left p-6 border border-border hover:border-foreground transition-colors duration-300 group"
              >
                <span className="text-sm md:text-base font-light text-foreground group-hover:text-accent transition-colors">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
