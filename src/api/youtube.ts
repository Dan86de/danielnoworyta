"use server";
import { youtube } from "googleapis/build/src/apis/youtube";

import { type YTMovieData } from "@/lib/model/youtube";

const client = youtube({ version: "v3", auth: process.env.YOUTUBE_API_KEY });
// const channelId = "UCfiwERhmAaYkYy_Hwfke_7w";
const playlistId = "UUfiwERhmAaYkYy_Hwfke_7w";

export const getAllMoviesFromChannel = async (): Promise<YTMovieData[]> => {
	const res = await client.playlistItems.list({
		part: ["snippet", "contentDetails", "status"],
		maxResults: 19,
		playlistId,
	});

	return res.data.items as YTMovieData[];
};
