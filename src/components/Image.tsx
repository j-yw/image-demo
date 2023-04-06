import React from "react";
import NextImage from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import Button from "./Button";
import CanvasImage from "./CanvasImage";

const Image = ({ src, alt, className, id }: any) => {
	const [imageEditOpened, { open: openImageEdit, close: closeImageEdit }] =
		useDisclosure(false);
	const [
		requestEditOpened,
		{ open: openRequestEdit, close: closeRequestEdit },
	] = useDisclosure(false);

	return (
		<>
			<Modal
				opened={imageEditOpened}
				onClose={closeImageEdit}
				title="Edit image here"
				fullScreen
				transitionProps={{ transition: "fade", duration: 200 }}
			>
				<CanvasImage imageUrl={src} close={closeImageEdit} />
			</Modal>

			<Modal
				opened={requestEditOpened}
				onClose={closeRequestEdit}
				title="Request Edit Here"
				fullScreen
				transitionProps={{ transition: "fade", duration: 200 }}
			>
				<CanvasImage
					imageUrl={src}
					close={closeImageEdit}
					requestEdit={true}
				/>
			</Modal>

			<NextImage
				src={src}
				alt={alt}
				id={id}
				className={`object-cover rounded-lg shadow-lg w-auto h-auto ${className}`}
				width="600"
				height="100"
				priority
			/>
			<div className="mt-6 flex justify-center gap-8">
				<Button onClick={openImageEdit}>Edit</Button>
				<Button onClick={openRequestEdit}>Request Edit</Button>
			</div>
		</>
	);
};

export default Image;
