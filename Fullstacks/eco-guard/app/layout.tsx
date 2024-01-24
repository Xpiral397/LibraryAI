import "@/styles/globals.css";
import {Metadata} from "next";
import {siteConfig} from "@/config/site";
import {fontSans} from "@/config/fonts";
import {Providers} from "./providers";
import {Navbar} from "@/components/navbar";
import {Link} from "@nextui-org/link";
import clsx from "clsx";
import Head from "next/head";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{media: "(prefers-color-scheme: light)", color: "white"},
		{media: "(prefers-color-scheme: dark)", color: "black"},
	],
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},

};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<Head>
				<Head>
					<meta charSet="UTF-8" />
					<link rel="icon" type="image/svg+xml" href="/vite.svg" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<Link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					<meta
						name="description"
						content="EcoGuard website that allows both terrestrial and marine sensors, satellite imagery, and artificial intelligence to protect and preserve biodiversity in both land and water ecosystems."
					/>
					<meta property="og:title" content="EcoGuard" />
					<meta
						property="og:description"
						content="EcoGuard website that allows both terrestrial and marine sensors, satellite imagery, and artificial intelligence to protect and preserve biodiversity in both land and water ecosystems."
					/>
					<meta property="og:type" content="website" />
					{/* Uncomment and provide a valid image URL if needed */}
					{/* <meta property="og:image" content="https://example.com/your-image.jpg" /> */}
					{/* Uncomment and provide a valid URL if needed */}
					{/* <meta property="og:url" content="https://example.com" /> */}
				</Head>
			</Head>
			<body
				className={clsx(
					"min-h-screen  font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{attribute: "class", defaultTheme: "white"}}>
					{children}
				</Providers>
			</body>
		</html>
	);
}
