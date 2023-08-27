import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-hero',
  template: `
    <div class="hero">
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        
      </div>
    </div>
  `,
  styles: [`
    .hero {
      background: linear-gradient(to right, #0052D4, #4364F7, #6FB1FC);
      color: #fff;
      padding: 50px 0;
      text-align: center;
      margin-bottom: 10px;
      margin-top: 30px;
      border-radius: 10px;
      
    }
    .hero-content {
      
      margin-left: 20px;
      margin-right: 20px;
    }
    h1 {
      font-size: 35px;
      margin-bottom: 20px;
      font-weight: bold;
      
    }
    p {
      font-size: 20px;
      margin-bottom: 30px;
      
   

    }
    button {
      padding: 12px 30px;
      font-size: 18px;
      background: #fff;
      color: #4364F7;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    @keyframes titleAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
}

h1:hover {
  animation: titleAnimation 0.5s ease infinite;

}
p:hover {
  animation: titleAnimation 0.5s ease infinite;
}


  `]
})
export class HeroComponent {
  @Input() title: string = '';
  description: string = 'Uncover a supportive community dedicated to mental health discussions on our forum. Engage with fellow individuals seeking to empower their mental well-being. Share experiences, exchange insights, and access valuable resources to navigate the complexities of mental health. Together, we strive for understanding, growth, and resilience. Join us in fostering a compassionate space for mental health exploration and improvement. Your journey towards a healthier mind begins here.';

  onButtonClick() {
    console.log('Button clicked!');
    
  }
}