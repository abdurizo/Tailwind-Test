import { Injectable } from '@angular/core';
import { CardInterface, } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  cards: CardInterface[] = [
    {
      id: 1,
      bg: 'linear-gradient(110.49deg, #130428 19.95%, #251043 67.64%, #38126D 107.08%, #261045 156.61%, #190634 183.21%)',
      img: '../../assets/image/star.png',
      title: 'CIB on the Mobile',
      description:
        'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    },
    {
      id: 2,
      bg: 'linear-gradient(95.56deg, #130428 0.58%, #251043 16.32%, #38126D 29.33%, #261045 45.66%, #190634 54.44%)',
      img: '../../assets/image/lamp.png',
      title: 'CIB on the Mobile',
      description:
        'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    },
    {
      id: 3,
      bg: 'linear-gradient(95.56deg, #130428 0.58%, #251043 16.32%, #38126D 29.33%, #261045 45.66%, #190634 54.44%)',
      img: '../../assets/image/cup.png',
      title: 'CIB on the Mobile',
      description:
        'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    },
    {
      id: 4,
      bg: 'linear-gradient(149.88deg, #130428 37.22%, #251043 70.43%, #38126D 97.89%, #261045 132.38%, #190634 150.9%)',
      img: '../../assets/image/microphone.png',
      title: 'CIB on the Mobile',
      description:
        'Take your client onboard seamlessly by our amazing tool of digital onboard process.',
    },
  ];
  constructor() {}
}
