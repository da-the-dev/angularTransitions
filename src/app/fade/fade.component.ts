import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-fade',
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.css']
})
export class FadeComponent implements OnInit {
  currentSection: any;
  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray("section");
    this.currentSection = sections[0];

    // Stretch out the body height according to however many sections there are. 
    gsap.set("body", { height: (sections.length * 100) + "vh" });

    // loop over section to create animations
    sections.forEach((section: any, i) => {
      section.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

      gsap.to(section, {
        scrollTrigger: {
          start: () => (i - 0.5) * innerHeight,
          end: () => (i + 0.5) * innerHeight,
          // when a new section activates (from either direction), set the section accordingly.
          onToggle: self => self.isActive && this.setCurrentSection(section),
          markers: true
        }
      });
    });
  }

  // Animates the new section and updates the current section
  setCurrentSection(newSection: any) {
    if (newSection !== this.currentSection) {
      gsap.to(this.currentSection, { scale: 0.8, autoAlpha: 0 })
      gsap.to(newSection, { scale: 1, autoAlpha: 1 });
      this.currentSection = newSection;
    }
  }
}
