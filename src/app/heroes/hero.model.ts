import { Power } from '../powers/power.model';

export class Hero {
    id: number;
    name: string;
    image: string;
    description: string;
    lastUpdated: string;
    powers: Power[];
}
