import { useTheme } from "../context/ThemeContext";

export const PageLoader = () => {
	const { theme } = useTheme();
	const isDark = theme === "dark";

	return (
		<div
			role="status"
			aria-live="polite"
			className={`flex min-h-screen flex-col items-center justify-center gap-4 ${
				isDark ? "bg-gray-900 text-gray-300" : "bg-white text-gray-600"
			}`}
		>
			<div
				className={`h-10 w-10 animate-spin rounded-full border-4 border-t-transparent ${
					isDark ? "border-blue-400" : "border-blue-600"
				}`}
			/>
			<p className="text-sm font-medium sm:text-base">Loading...</p>
		</div>
	);
};
