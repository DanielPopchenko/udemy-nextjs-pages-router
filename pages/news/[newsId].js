// ! renderes /our-domain/news/something

import { useRouter } from "next/router";
import React from "react";

const DetailPage = () => {
	const router = useRouter();

	const newsId = router.query.newsId;
	return (
		<div>
			<h1>The Detail page</h1>
			<p>{newsId}</p>
		</div>
	);
};

export default DetailPage;
