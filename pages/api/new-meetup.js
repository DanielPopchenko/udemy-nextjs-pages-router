// ! API route - /api/new-meetup
// it will always execute on a server

const handler = (req, res) => {
	if (req.method === "POST") {
		// here we extract data
		const data = res.body;

		const { title, image, adress, description } = data;
	}
};

// this function always has to be exported by default
export default handler;
