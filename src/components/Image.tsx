import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import NextImage from "next/image";
import Button from "./Button";
import CanvasImage from "./CanvasImage";

interface IImageProps {
	src: string;
	alt: string;
	className?: string;
	id?: string;
}

const Image = ({ src, alt, className, id }: IImageProps) => {
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
				<CanvasImage
					imageUrl={src}
					close={closeImageEdit}
					requestEdit={false}
				/>
			</Modal>

			<Modal
				opened={requestEditOpened}
				onClose={closeRequestEdit}
				title="Request Edit Here"
				fullScreen
				transitionProps={{ transition: "fade", duration: 200 }}
				styles={{ body: { backgroundColor: "black" } }}
			>
				<CanvasImage
					imageUrl={src}
					close={closeRequestEdit}
					requestEdit={true}
				/>
			</Modal>

			<div className="mt-5 flex flex-col justify-between border-2 p-6 rounded-lg border-gray-800">
				<div className="w-full min-h-[300px] relative">
					<NextImage
						src={src}
						alt={alt}
						id={id}
						className={`object-cover rounded-lg shadow-lg w-auto h-auto ${className}`}
						priority
						fill
						sizes="(max-width: 768px) 100vw,
						(max-width: 1200px) 50vw,
						33vw"
					/>
				</div>
				<div className="mt-6 flex justify-center gap-8">
					<Button onClick={openImageEdit}>Edit</Button>
					<Button onClick={openRequestEdit}>Request Edit</Button>
				</div>
			</div>
		</>
	);
};

export default Image;
