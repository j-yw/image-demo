export interface ImageData {
	id: string;
	created_at: Date;
	updated_at: Date;
	promoted_at: Date | null;
	width: number;
	height: number;
	color: string;
	blur_hash: string;
	description: null | string;
	alt_description: null | string;
	urls: Urls;
	links: ImagesDatumLinks;
	likes: number;
	liked_by_user: boolean;
	current_user_collections: any[];
	sponsorship: Sponsorship | null;
	topic_submissions: TopicSubmissions;
	user: User;
}

export interface ImagesDatumLinks {
	self: string;
	html: string;
	download: string;
	download_location: string;
}

export interface Sponsorship {
	impression_urls: any[];
	tagline: string;
	tagline_url: string;
	sponsor: User;
}

export interface User {
	id: string;
	updated_at: Date;
	username: string;
	name: string;
	first_name: string;
	last_name: null | string;
	twitter_username: null | string;
	portfolio_url: null | string;
	bio: null | string;
	location: null | string;
	links: UserLinks;
	profile_image: ProfileImage;
	instagram_username: null | string;
	total_collections: number;
	total_likes: number;
	total_photos: number;
	accepted_tos: boolean;
	for_hire: boolean;
	social: Social;
}

export interface UserLinks {
	self: string;
	html: string;
	photos: string;
	likes: string;
	portfolio: string;
	following: string;
	followers: string;
}

export interface ProfileImage {
	small: string;
	medium: string;
	large: string;
}

export interface Social {
	instagram_username: null | string;
	portfolio_url: null | string;
	twitter_username: null | string;
	paypal_email: null;
}

export interface TopicSubmissions {
	experimental?: Experimental;
	nature?: Experimental;
	wallpapers?: Experimental;
	travel?: Experimental;
	spirituality?: Experimental;
	film?: Experimental;
}

export interface Experimental {
	status: string;
}

export interface Urls {
	raw: string;
	full: string;
	regular: string;
	small: string;
	thumb: string;
	small_s3: string;
}
