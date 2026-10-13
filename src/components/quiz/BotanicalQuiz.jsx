
import React, { useState } from 'react';
import { Leaf, CheckCircle2, XCircle, RotateCcw, Trophy } from 'lucide-react';

const questions = [
  {
    question: 'Which botanical name belongs to Tulsi (Holy Basil)?',
    options: ['Azadirachta indica', 'Ocimum tenuiflorum', 'Aloe vera', 'Curcuma longa'],
    answer: 1,
    explanation: 'Tulsi is commonly known botanically as Ocimum tenuiflorum, also called Ocimum sanctum.'
  },
  {
    question: 'Which part of the turmeric plant is commonly used?',
    options: ['Flower', 'Leaf', 'Rhizome', 'Seed'],
    answer: 2,
    explanation: 'Turmeric is used mainly for its underground stem, called a rhizome.'
  },
  {
    question: 'Which plant is known for its thick, water-storing leaves?',
    options: ['Neem', 'Aloe vera', 'Hibiscus', 'Curry leaf'],
    answer: 1,
    explanation: 'Aloe vera has succulent leaves adapted to store water.'
  },
  {
    question: 'What is the botanical name of Neem?',
    options: ['Azadirachta indica', 'Zingiber officinale', 'Phyllanthus emblica', 'Mentha spicata'],
    answer: 0,
    explanation: 'Neem is botanically known as Azadirachta indica.'
  },
  {
    question: 'Which plant is commonly used as a culinary herb and has aromatic leaves?',
    options: ['Amla', 'Mint', 'Turmeric', 'Ashwagandha'],
    answer: 1,
    explanation: 'Mint has aromatic leaves and is widely used in food and traditional preparations.'
  },
  {
    question: 'What is the botanical name of Ginger?',
    options: ['Curcuma longa', 'Zingiber officinale', 'Ocimum tenuiflorum', 'Aloe vera'],
    answer: 1,
    explanation: 'Ginger is botanically known as Zingiber officinale.'
  },
  {
    question: 'Which plant produces the familiar red hibiscus flower?',
    options: ['Hibiscus rosa-sinensis', 'Azadirachta indica', 'Mentha spicata', 'Bacopa monnieri'],
    answer: 0,
    explanation: 'Hibiscus rosa-sinensis is a commonly cultivated ornamental hibiscus.'
  },
  {
    question: 'Which plant is commonly called Amla or Indian gooseberry?',
    options: ['Withania somnifera', 'Phyllanthus emblica', 'Cymbopogon citratus', 'Zingiber officinale'],
    answer: 1,
    explanation: 'Amla is commonly known botanically as Phyllanthus emblica.'
  },
  {
    question: 'Which plant is commonly called Ashwagandha?',
    options: ['Withania somnifera', 'Aloe vera', 'Curcuma longa', 'Hibiscus rosa-sinensis'],
    answer: 0,
    explanation: 'Withania somnifera is the botanical name commonly associated with Ashwagandha.'
  },
  {
    question: 'Which part of ginger is usually used in cooking?',
    options: ['Petal', 'Rhizome', 'Bark', 'Fruit'],
    answer: 1,
    explanation: 'Ginger is used mainly for its underground rhizome.'
  }
];

export default function BotanicalQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const selected = answers[current];
  const score = questions.reduce(
    (total, item, index) => total + (answers[index] === item.answer ? 1 : 0),
    0
  );

  const chooseAnswer = (index) => {
    if (selected !== undefined) return;
    setAnswers((previous) => ({ ...previous, [current]: index }));
  };

  const restart = () => {
    setCurrent(0);
    setAnswers({});
    setFinished(false);
  };

  return (
    <main style={{ maxWidth: 850, margin: '0 auto', padding: '3rem 1.25rem 5rem', color: '#153c2b' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#26734d', fontWeight: 700, letterSpacing: 1, fontSize: 13 }}>
          <Leaf size={18} /> BOTANICAL KNOWLEDGE
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', margin: '0.75rem 0' }}>
          Botanical Quiz
        </h1>
        <p style={{ color: '#587165', lineHeight: 1.7 }}>
          Test your knowledge of medicinal plants and their botanical names.
        </p>
      </div>

      <section style={{ background: '#fff', border: '1px solid #e7e1d5', borderRadius: 20, padding: 'clamp(1.25rem, 4vw, 2.25rem)', boxShadow: '0 8px 24px rgba(20,50,35,0.06)' }}>
        {!finished ? (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, marginBottom: 14, color: '#587165', fontSize: 14 }}>
              <span>Question {current + 1} of {questions.length}</span>
              <span>{Math.round(((current + 1) / questions.length) * 100)}% completed</span>
            </div>

            <div style={{ height: 6, background: '#e9eee9', borderRadius: 99, overflow: 'hidden', marginBottom: 28 }}>
              <div style={{ height: '100%', width: `${((current + 1) / questions.length) * 100}%`, background: '#26734d', transition: 'width 0.2s' }} />
            </div>

            <h2 style={{ fontSize: 'clamp(1.15rem, 3vw, 1.5rem)', lineHeight: 1.5, marginBottom: 24 }}>
              {question.question}
            </h2>

            <div style={{ display: 'grid', gap: 12 }}>
              {question.options.map((option, index) => {
                const isSelected = selected === index;
                const isCorrect = question.answer === index;
                const showResult = selected !== undefined;
                const background = showResult && isCorrect ? '#e8f5eb' : isSelected ? '#fff0ed' : '#fff';
                const border = showResult && isCorrect ? '#5ba878' : isSelected ? '#d98576' : '#e5e7e2';

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => chooseAnswer(index)}
                    disabled={showResult}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 12, width: '100%',
                      padding: '15px 17px', textAlign: 'left', borderRadius: 12,
                      border: `1px solid ${border}`, background, color: '#153c2b',
                      cursor: showResult ? 'default' : 'pointer', fontSize: 15,
                      lineHeight: 1.5
                    }}
                  >
                    <span style={{ display: 'grid', placeItems: 'center', width: 30, height: 30, flexShrink: 0, borderRadius: 8, background: '#edf3ed', fontWeight: 700 }}>
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span style={{ flex: 1 }}>{option}</span>
                    {showResult && isCorrect && <CheckCircle2 color="#26734d" size={20} />}
                    {isSelected && !isCorrect && <XCircle color="#c45f50" size={20} />}
                  </button>
                );
              })}
            </div>

            {selected !== undefined && (
              <div style={{ marginTop: 20, padding: 16, borderRadius: 12, background: '#f2f6f0', lineHeight: 1.7 }}>
                <strong>{selected === question.answer ? 'Correct!' : 'Not quite!'}</strong>
                <p style={{ margin: '6px 0 0' }}>{question.explanation}</p>
              </div>
            )}

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
              <button
                type="button"
                disabled={selected === undefined}
                onClick={() => current === questions.length - 1 ? setFinished(true) : setCurrent((value) => value + 1)}
                style={{ padding: '12px 22px', border: 0, borderRadius: 10, background: selected === undefined ? '#b9c9be' : '#153c2b', color: '#fff', fontWeight: 700, cursor: selected === undefined ? 'not-allowed' : 'pointer' }}
              >
                {current === questions.length - 1 ? 'View Results' : 'Next Question'} →
              </button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <Trophy size={52} color="#b88b32" />
            <h2 style={{ fontSize: '2rem', margin: '1rem 0 0.5rem' }}>Quiz Completed!</h2>
            <p style={{ fontSize: '1.2rem' }}>Your score</p>
            <p style={{ fontSize: '3rem', fontWeight: 800, margin: '0.5rem 0', color: '#26734d' }}>
              {score} / {questions.length}
            </p>
            <p style={{ color: '#587165' }}>
              {score === questions.length ? 'Excellent work! You know your herbs well.' : score >= 7 ? 'Great job! Keep learning about medicinal plants.' : 'Good start! Review the explanations and try again.'}
            </p>
            <button type="button" onClick={restart} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16, padding: '12px 22px', border: 0, borderRadius: 10, background: '#153c2b', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>
              <RotateCcw size={17} /> Try Again
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
