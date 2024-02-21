import MeetupDetails from "@/components/meetups/MeetupDetails";
import { useRouter } from "next/router";
import React from "react";

const MeetupDetail = ({ props }) => {
	const router = useRouter();
	return (
		<MeetupDetails
			image="https://www.aviontourism.com/images/1200-628-Crop/c4a1505a-982d-49b5-9c5d-277488c0c9d9"
			title="Custom title"
			adress="Some street, Kharkiv"
			description="description..."
		/>
	);
};

export default MeetupDetail;
