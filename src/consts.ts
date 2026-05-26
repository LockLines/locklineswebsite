export const SITE_TITLE = "LockLines";
export const SITE_DESCRIPTION =
	"LockLines is a macOS app for designing plain-text lock screen messages that fit the small message area.";

export const SUPPORT_EMAIL = "support@locklines.app";
export const APP_STORE_URL =
	"https://apps.apple.com/app/apple-store/id6772349545?pt=127627850&ct=www&mt=8";

export const SCREENSHOTS = {
	intro: "/screenshots/locklines-intro.png",
	visible: "/screenshots/locklines-visible.png",
	scroll: "/screenshots/locklines-scroll.png",
	copy: "/screenshots/locklines-copy.png",
};

export const DEVELOPER = {
	name: "Ihor July",
	blurb:
		"LockLines is made by Ihor July, a cybersecurity expert and reverse engineer focused on secure, privacy-respecting macOS tools.",
	links: [
		{ label: "Parall", href: "https://parall.app" },
		{ label: "DockLock Lite", href: "https://docklockpro.com" },
		{ label: "App Trust Preview", href: "https://apptrustpreview.com" },
	],
};

export const FAQ_ITEMS = [
	{
		question: "What does LockLines do?",
		answer:
			"LockLines helps you write lock screen messages for macOS, preview what appears before and after scrolling, add plain-text borders or fills, and copy the final message for System Settings.",
	},
	{
		question: "Why not just type the message directly in System Settings?",
		answer:
			"The macOS lock screen message area is small. LockLines lets you design the first visible lines, check the scrollable part, and avoid surprises before pasting the message.",
	},
	{
		question: "Does LockLines change my wallpaper or modify system files?",
		answer:
			"No. The workflow is plain text. LockLines prepares the message, then you paste it into the built-in macOS lock screen message setting.",
	},
	{
		question: "Where do I paste the copied message?",
		answer:
			"Open System Settings, go to Lock Screen, enable Show Message When Locked, click Set, paste the text, and save.",
	},
	{
		question: "Is LockLines available on the Mac App Store?",
		answer:
			"Yes. LockLines is available on the Mac App Store. The download link is on the LockLines homepage.",
	},
	{
		question: "How do I get help?",
		answer: `Email ${SUPPORT_EMAIL} with your macOS version, LockLines version, and what you expected to happen.`,
	},
];
