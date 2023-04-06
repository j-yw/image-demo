import { useAppContext } from "@/context";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
interface ICanvasImageProps {
	imageUrl: string;
	close: () => void;
	requestEdit: boolean;
}

function CanvasImage({ imageUrl, close, requestEdit }: ICanvasImageProps) {
	const [image, setImage] = useState<HTMLImageElement>();
	const [request, setRequest] = useState("");
	const { imageDataUrl, setImageDataUrl } = useAppContext();
	const router = useRouter();

	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const handleSave = () => {
		const canvas = canvasRef.current;

		if (canvas) {
			const dataURL = canvas.toDataURL();
			setImageDataUrl(dataURL);
		}

		if (requestEdit) {
			const data = {
				imageDataUrl: imageDataUrl,
				request: request,
			};

			const jsonData = JSON.stringify(data);

			const blob = new Blob([jsonData], { type: "application/json" });
			const url = URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = url;
			link.download = "request.json";
			link.click();
			URL.revokeObjectURL(url);
		}

		router.push("/edited-image");
		close();
	};

	useEffect(() => {
		const img = new Image();
		img.src = imageUrl;
		img.crossOrigin = "anonymous";
		img.onload = () => setImage(img);
	}, [imageUrl]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas || !image) return;

		const ctx = canvas.getContext("2d");
		const { width: canvasWidth, height: canvasHeight } = canvas;
		const { width: imageWidth, height: imageHeight } = image;

		const scaleFactor = Math.min(
			canvasWidth / imageWidth,
			canvasHeight / imageHeight
		);
		const scaledWidth = imageWidth * scaleFactor;
		const scaledHeight = imageHeight * scaleFactor;
		const x = (canvasWidth - scaledWidth) / 2;
		const y = (canvasHeight - scaledHeight) / 2;

		if (ctx) {
			ctx.drawImage(image, x, y, scaledWidth, scaledHeight);
		}
	}, [canvasRef, image]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const context = canvas.getContext("2d");
		if (!canvas || !context) return;

		function handleMouseMove(event: any) {
			const radius = 2; // Desired size of cleared area
			const x = event.offsetX;
			const y = event.offsetY;
			if (context) {
				context.clearRect(
					x - radius,
					y - radius,
					3 * radius,
					3 * radius
				);
			}
		}
		canvas.addEventListener("mousemove", handleMouseMove);

		return () => {
			canvas.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div>
			<canvas ref={canvasRef} width={800} height={600} />
			{requestEdit && (
				<div>
					<textarea
						className="block w-96 px-4 py-3 border border-gray-300 rounded-lg leading-6 focus:outline-none focus:border-blue-500 focus:shadow-outline-blue placeholder-gray-500"
						placeholder="Enter your message here"
						onChange={(e) => setRequest(e.target.value)}
					></textarea>
					<br />
				</div>
			)}
			<Button onClick={handleSave}>Save</Button>
		</div>
	);
}

export default CanvasImage;
