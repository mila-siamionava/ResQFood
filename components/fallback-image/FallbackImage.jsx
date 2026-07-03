"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import defaultFallbackImage from "./assets/heart.png";

export default function FallbackImage({
	src,
	alt,
	fallbackSrc = defaultFallbackImage,
	onError,
	...props
}) {
	const [imageSrc, setImageSrc] = useState(src || fallbackSrc);
	const isShowingFallback = imageSrc === fallbackSrc;

	useEffect(() => {
		setImageSrc(src || fallbackSrc);
	}, [src, fallbackSrc]);

	const handleError = (event) => {
		if (imageSrc !== fallbackSrc) {
			setImageSrc(fallbackSrc);
		}
		onError?.(event);
	};

	return (
		<Image
			{...props}
			src={imageSrc}
			alt={isShowingFallback ? "" : alt || "ResQFood"}
			onError={handleError}
		/>
	);
}
