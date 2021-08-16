import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render () {
		return (
			<Html lang="cs">
				<Head>
					<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap" 	rel="stylesheet"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
};
