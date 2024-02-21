// ! renderes for /our-domain/

import React, { useEffect, useState } from "react";

import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
	{
		id: "1",
		title: "First Meetup",
		image:
			"https://www.aviontourism.com/images/1200-628-Crop/c4a1505a-982d-49b5-9c5d-277488c0c9d9",
		adress: "Some adress, 121-12, Paris",
		description: "Some meetup",
	},
	{
		id: "2",
		title: "Second Meetup",
		image:
			"https://www.aviontourism.com/images/1200-628-Crop/c4a1505a-982d-49b5-9c5d-277488c0c9d9",
		adress: "Some second adress, 324-67, Kiev",
		description: "Some second meetup",
	},
	{
		id: "3",
		title: "Third Meetup",
		image:
			"https://www.aviontourism.com/images/1200-628-Crop/c4a1505a-982d-49b5-9c5d-277488c0c9d9",
		adress: "Some third adress, 79-123, Kharkiv",
		description: "Some third meetup",
	},
];
const HomePage = () => {
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		setLoadedMeetups(DUMMY_MEETUPS);
	}, []);

	return (
		<>
			<MeetupList meetups={loadedMeetups} />
		</>
	);
};

export default HomePage;
