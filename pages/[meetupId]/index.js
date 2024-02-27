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

// ! we must call this one if we use getStaticProps in a dynamic ssr page
export const getStaticPaths = async () => {
	// code here runs before components rendering
	return {
		//  ? false here says that I have all supported id values in my paths
		//  ? true  says that I do not have all supported id values
		fallback: true,
		paths: [{ params: { meetupId: "1" } }, { params: { meetupId: "2" } }],
	};
};

export const getStaticProps = async (context) => {
	const meetupId = context.params.meetupId;

	console.log(meetupId);
	return {
		props: {
			meetupData: {
				id: meetupId,
				image:
					"https://www.aviontourism.com/images/1200-628-Crop/c4a1505a-982d-49b5-9c5d-277488c0c9d9",
				title: "Custom title",
				adress: "Some street, Kharkiv",
				description: "description...",
			},
		},
	};
};

export default MeetupDetail;
