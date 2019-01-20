export class Review {
	constructor(
    public name: string = null,
    public rating: number = 0,
    public summary: string = null,
    public created_at: Date = new Date(),
    public updated_at: Date = new Date()
  ){}
}
