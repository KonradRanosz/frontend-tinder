export interface Imovie {
	id: string;
	imageURL: string;
	title: string;
	summary: string;
	rating: string;
	votes: {
		positive: number;
		negative: number;
	};
}
