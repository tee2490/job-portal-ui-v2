import { cloneElement, isValidElement, useId } from "react";

const ALIGN_CLASSES = {
	center: { panel: "left-1/2 -translate-x-1/2", arrow: "left-1/2 -translate-x-1/2" },
	start: { panel: "left-0", arrow: "left-6" },
};

// Dark tooltip that matches the footer's styling. It opens on hover and on
// keyboard focus, and uses a named group so it ignores any `group` class the
// wrapped element already has. Use `align="start"` for triggers near the left
// edge so the tooltip opens rightwards instead of being clipped.
export const Tooltip = ({ content, title, align = "center", children }) => {
	const tooltipId = useId();
	const alignClasses = ALIGN_CLASSES[align] ?? ALIGN_CLASSES.center;

	return (
		<span className="group/tooltip relative inline-flex">
			{isValidElement(children)
				? cloneElement(children, { "aria-describedby": tooltipId })
				: children}
			<span
				id={tooltipId}
				role="tooltip"
				className={`pointer-events-none absolute bottom-full ${alignClasses.panel} z-20 mb-3 w-64 translate-y-1 opacity-0 transition-all duration-300 group-hover/tooltip:translate-y-0 group-hover/tooltip:opacity-100 group-focus-within/tooltip:translate-y-0 group-focus-within/tooltip:opacity-100 sm:w-72`}
			>
				<span className="block rounded-xl border border-gray-700/50 bg-gray-800/95 p-4 text-left shadow-2xl backdrop-blur-sm">
					<span className="mb-3 block h-1 w-10 rounded-full bg-gradient-to-r from-primary-600 to-purple-600"></span>
					{title && (
						<span className="mb-1 block text-sm font-bold text-white">
							{title}
						</span>
					)}
					<span className="block text-xs leading-relaxed text-gray-300">
						{content}
					</span>
				</span>
				<span className={`absolute ${alignClasses.arrow} top-full -mt-1.5 block h-3 w-3 rotate-45 border-b border-r border-gray-700/50 bg-gray-800/95`}></span>
			</span>
		</span>
	);
};
