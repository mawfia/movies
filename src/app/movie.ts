import { Review } from './review';

export class Movie {
	constructor(
	public _id: any = null,
    public title: string = null,
	public reviews: Review[] = [],
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
