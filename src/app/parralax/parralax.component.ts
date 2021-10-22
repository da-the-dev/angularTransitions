import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-parralax',
  templateUrl: './parralax.component.html',
  styleUrls: ['./parralax.component.css']
})
export class ParralaxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray("section").forEach((section: any, i) => {
      section.bg = section.querySelector(".bg")
      section.bg.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;
      section.bg.style.backgroundPosition = `50% ${-innerHeight / 2}px`

      gsap.to(section.bg, {
        backgroundPosition: `50% ${innerHeight / 2}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          scrub: true,
          markers: true
        }
      })
    })
  }
}
