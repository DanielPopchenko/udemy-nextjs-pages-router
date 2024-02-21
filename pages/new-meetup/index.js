import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

const NewMeetup = () => {
	const addNewMeetupHandler = (enteredMeetupData) => {
		console.log(enteredMeetupData);
	};

	return <NewMeetupForm onAddMeetup={addNewMeetupHandler} />;
};

export default NewMeetup;
