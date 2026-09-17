'use client';

import React, { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: '¿Algunas ITS pueden no presentar síntomas?',
    options: ['Sí, es muy común', 'No, siempre hay síntomas'],
    correctIndex: 0,
    explanation: 'Correcto. Infecciones como la clamidia, el VIH y el VPH frecuentemente no presentan síntomas, por lo que es importante realizarse pruebas periódicas.',
  },
  {
    id: 2,
    question: '¿El preservativo reduce el riesgo de contraer ITS?',
    options: ['Sí, significativamente', 'No, no sirve de nada'],
    correctIndex: 0,
    explanation: 'El preservativo reduce considerablemente el riesgo de transmisión de la mayoría de las ITS, aunque no elimina el riesgo al 100%.',
  },
  {
    id: 3,
    question: '¿Existe una vacuna contra el VPH?',
    options: ['Sí, es segura y efectiva', 'No existe ninguna vacuna'],
    correctIndex: 0,
    explanation: 'Sí, existe la vacuna contra el VPH que protege contra los tipos más peligrosos del virus. Se recomienda especialmente en adolescentes.',
  },
  {
    id: 4,
    question: '¿Qué debes hacer si presentas síntomas sospechosos?',
    options: ['Automedicarte', 'Buscar atención de salud', 'Ignorarlos y esperar'],
    correctIndex: 1,
    explanation: 'Lo correcto es acudir a un profesional de salud. La automedicación puede ser peligrosa y esperar puede empeorar la situación.',
  },
  {
    id: 5,
    question: '¿Es importante realizarse pruebas de ITS regularmente?',
    options: ['Sí, especialmente si eres sexualmente activo/a', 'No es necesario si no hay síntomas'],
    correctIndex: 0,
    explanation: 'Sí, las pruebas periódicas son fundamentales porque muchas ITS no presentan síntomas. La detección temprana permite tratamiento oportuno.',
  },
  {
    id: 6,
    question: '¿Las ITS solo afectan a personas adultas?',
    options: ['No, también afectan a adolescentes y jóvenes', 'Sí, solo a adultos mayores de 25 años'],
    correctIndex: 0,
    explanation: 'Las ITS pueden afectar a personas de cualquier edad, incluyendo adolescentes. Los jóvenes representan una proporción importante de nuevos casos.',
  },
  {
    id: 7,
    question: '¿Qué infección tiene tratamiento pero no tiene cura completa?',
    options: ['Gonorrea', 'VIH', 'Clamidia'],
    correctIndex: 1,
    explanation: 'El VIH no tiene cura, pero con tratamiento antirretroviral las personas pueden llevar una vida larga y saludable. La gonorrea y clamidia sí tienen cura con antibióticos.',
  },
];

type TestState = 'start' | 'running' | 'finished';

export default function TestSection() {
  const [testState, setTestState] = useState<TestState>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const progress = (currentQuestion / questions.length) * 100;
  const score = answers.filter((a, i) => a === questions[i]?.correctIndex).length;

  const handleStart = () => {
    setTestState('running');
    setCurrentQuestion(0);
    setAnswers(new Array(questions.length).fill(null));
    setSelectedOption(null);
    setShowFeedback(false);
  };

  const handleSelect = (optionIndex: number) => {
    if (showFeedback) return;
    setSelectedOption(optionIndex);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setTestState('finished');
    }
  };

  const q = questions[currentQuestion];
  const isCorrect = selectedOption === q?.correctIndex;

  const getScoreMessage = () => {
    const pct = (score / questions.length) * 100;
    if (pct === 100) return { msg: '¡Excelente! Tienes un conocimiento muy sólido sobre ITS.', color: 'text-green-600', bg: 'bg-green-pastel', emoji: '🏆' };
    if (pct >= 70) return { msg: '¡Muy bien! Tienes buenos conocimientos. Sigue aprendiendo.', color: 'text-accent', bg: 'bg-cyan-pastel', emoji: '🌟' };
    if (pct >= 40) return { msg: 'Puedes mejorar. Repasa las secciones de información de esta página.', color: 'text-amber-600', bg: 'bg-amber-pastel', emoji: '📚' };
    return { msg: 'Te recomendamos leer toda la información de esta página para aprender más.', color: 'text-primary', bg: 'bg-violet-pastel', emoji: '💪' };
  };

  return (
    <section id="test" className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-pastel text-primary text-xs font-bold uppercase tracking-widest mb-4">
            Sección 8
          </span>
          <h2 className="text-section-title font-extrabold text-foreground mb-4">
            Test <span className="gradient-text">Interactivo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Pon a prueba tus conocimientos sobre ITS y prevención.
          </p>
        </div>

        {testState === 'start' && (
          <div className="rounded-3xl border-2 border-primary/20 bg-violet-pastel p-8 sm:p-12 text-center animate-slide-up">
            <span className="text-6xl mb-6 block">🧠</span>
            <h3 className="text-2xl font-extrabold text-foreground mb-3">{questions.length} preguntas sobre ITS</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Este test educativo te ayudará a evaluar tus conocimientos sobre las infecciones de transmisión sexual. Al finalizar recibirás retroalimentación y recomendaciones.
            </p>
            <button
              onClick={handleStart}
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-extrabold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg min-h-[56px]"
            >
              Comenzar el Test
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {testState === 'running' && q && (
          <div className="rounded-3xl border-2 border-border bg-card p-6 sm:p-8 animate-slide-up">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-xs font-bold text-primary">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary progress-bar-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="text-lg sm:text-xl font-extrabold text-foreground mb-6 leading-snug">{q.question}</h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {q.options.map((option, i) => {
                let optClass = 'border-2 border-border bg-muted/30 hover:border-primary/40 hover:bg-violet-pastel';
                if (showFeedback) {
                  if (i === q.correctIndex) optClass = 'border-2 border-green-400 bg-green-pastel';
                  else if (i === selectedOption && i !== q.correctIndex) optClass = 'border-2 border-red-300 bg-rose-pastel';
                  else optClass = 'border-2 border-border bg-muted/20 opacity-60';
                } else if (selectedOption === i) {
                  optClass = 'border-2 border-primary bg-violet-pastel';
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={showFeedback}
                    className={`w-full text-left px-5 py-4 rounded-xl font-medium text-sm text-foreground transition-all min-h-[52px] ${optClass}`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                    {option}
                  </button>
                );
              })}
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`rounded-2xl p-4 mb-4 animate-fade-in ${isCorrect ? 'bg-green-pastel border border-green-300' : 'bg-rose-pastel border border-red-200'}`}>
                <p className={`font-bold text-sm mb-1 ${isCorrect ? 'text-green-700' : 'text-red-600'}`}>
                  {isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}
                </p>
                <p className="text-sm text-muted-foreground">{q.explanation}</p>
              </div>
            )}

            {showFeedback && (
              <button
                onClick={handleNext}
                className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all min-h-[52px]"
              >
                {currentQuestion < questions.length - 1 ? 'Siguiente pregunta →' : 'Ver resultados'}
              </button>
            )}
          </div>
        )}

        {testState === 'finished' && (
          <div className="animate-slide-up space-y-6">
            {/* Score card */}
            <div className={`rounded-3xl border-2 border-primary/20 ${getScoreMessage().bg} p-8 text-center`}>
              <span className="text-5xl mb-4 block">{getScoreMessage().emoji}</span>
              <p className="text-5xl font-extrabold text-foreground mb-2">{score}/{questions.length}</p>
              <p className={`text-lg font-bold ${getScoreMessage().color} mb-3`}>{getScoreMessage().msg}</p>
              <p className="text-sm text-muted-foreground">
                Respondiste correctamente {score} de {questions.length} preguntas.
              </p>
            </div>

            {/* Review */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-extrabold text-foreground mb-4">Revisión de respuestas</h3>
              <div className="space-y-4">
                {questions.map((question, i) => (
                  <div
                    key={i}
                    className={`rounded-xl p-4 border ${answers[i] === question.correctIndex ? 'bg-green-pastel border-green-200' : 'bg-rose-pastel border-red-200'}`}
                  >
                    <p className="font-bold text-sm text-foreground mb-1">
                      {answers[i] === question.correctIndex ? '✅' : '❌'} {question.question}
                    </p>
                    <p className="text-xs text-muted-foreground mb-1">
                      Tu respuesta:{' '}
                      <strong>
                        {answers[i] !== null ? question.options[answers[i] as number] : 'Sin respuesta'}
                      </strong>
                    </p>
                    {answers[i] !== question.correctIndex && (
                      <p className="text-xs text-green-700">
                        Respuesta correcta: <strong>{question.options[question.correctIndex]}</strong>
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1 italic">{question.explanation}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="rounded-2xl bg-violet-pastel border border-primary/20 p-6">
              <h3 className="font-bold text-primary mb-3">💡 Recomendaciones</h3>
              <ul className="space-y-2 text-sm text-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Revisa las secciones de información de esta página para reforzar tu aprendizaje.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Recuerda que la prevención y la detección temprana son fundamentales.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Si tienes dudas, consulta a un profesional de salud de confianza.
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Comparte esta información con personas de tu confianza.
                </li>
              </ul>
            </div>

            {/* Restart button */}
            <div className="text-center">
              <button
                onClick={handleStart}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-primary text-primary font-bold hover:bg-violet-pastel transition-all min-h-[52px]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Volver a realizar el test
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}