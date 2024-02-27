// ! renderes for /our-domain/
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
// ! here in props we can find our meetups that were preexecuted while building a project
const HomePage = (props) => {
	// const [loadedMeetups, setLoadedMeetups] = useState([]);

	// useEffect(() => {
	// 	setLoadedMeetups(DUMMY_MEETUPS);
	// }, []);

	return (
		<>
			<MeetupList meetups={props.meetups} />
		</>
	);
};

// ! this function will be executed first, before even a component function
// ? Code here will never be executed on the client side, it is executed while building a project.
export const getStaticProps = () => {
	// fetch or read data
	// ! alawys returns an obj
	return {
		props: {
			meetups: DUMMY_MEETUPS,
		},
		// ! now our page will be regenerated every 10 sec on a server
		// for a data revalidation
		revalidate: 10,
	};
};

// ?as an alternative
// ! It runs for every request
// export const gerServerSideProps = async (context) => {
// 	const request = context.req;
// 	const response = context.res;

// 	return {
// 		//...
// 	};
// };

export default HomePage;
