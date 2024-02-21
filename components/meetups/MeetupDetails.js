import React from "react";
import classes from "./MeetupDetails.module.css";

const MeetupDetails = ({ image, title, adress, description }) => {
	// console.log(image);
	return (
		<div className={classes.details}>
			<img src={image} alt={title} className={classes.image} />
			<h1>{title}</h1>
			<adress>{adress}</adress>
			<p>{description}</p>
		</div>
	);
};

export default MeetupDetails;
