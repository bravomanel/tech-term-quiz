import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TERMS_DB, TechTerm } from './quiz-data';

interface Question {
  text: string;
  type: 'FIND_DEF' | 'FIND_TERM';
  correctAnswer: string;
  options: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  currentQuestion = signal<Question | null>(null);
  score = signal(0);
  totalQuestions = signal(0);
  feedbackMessage = signal<{text: string, type: 'success' | 'danger' | ''}>({text: '', type: ''});
  
  private terms = TERMS_DB;

  constructor() {
    this.generateQuestion();
  }

  generateQuestion() {
    this.feedbackMessage.set({text: '', type: ''});
    
    const correctIndex = Math.floor(Math.random() * this.terms.length);
    const correctTerm = this.terms[correctIndex];

    const isFindDef = Math.random() > 0.5;

    let distractors: string[] = [];
    while (distractors.length < 3) {
      const randIndex = Math.floor(Math.random() * this.terms.length);
      if (randIndex !== correctIndex) {
        const wrongOption = isFindDef 
          ? this.terms[randIndex].definition 
          : this.terms[randIndex].term;
        
        if (!distractors.includes(wrongOption)) {
          distractors.push(wrongOption);
        }
      }
    }

    const correctAnswer = isFindDef ? correctTerm.definition : correctTerm.term;
    const allOptions = [...distractors, correctAnswer].sort(() => Math.random() - 0.5);

    this.currentQuestion.set({
      text: isFindDef ? correctTerm.term : correctTerm.definition,
      type: isFindDef ? 'FIND_DEF' : 'FIND_TERM',
      correctAnswer: correctAnswer,
      options: allOptions
    });
  }

  checkAnswer(selectedOption: string) {
    const question = this.currentQuestion();
    if (!question) return;

    if (this.feedbackMessage().text !== '') return; 

    this.totalQuestions.update(v => v + 1);

    if (selectedOption === question.correctAnswer) {
      this.score.update(v => v + 1);
      this.feedbackMessage.set({text: 'Correto! Mandou bem.', type: 'success'});
    } else {
      this.feedbackMessage.set({
        text: `Errado! A resposta correta era: ${question.correctAnswer}`, 
        type: 'danger'
      });
    }
  }

  nextQuestion() {
    this.generateQuestion();
  }

  restartGame() {
    this.score.set(0);
    this.totalQuestions.set(0);
    this.generateQuestion();
  }
}