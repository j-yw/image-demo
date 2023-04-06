import Button from "@/components/Button";
import Image from "@/components/Image";
import Layout from "@/components/Layout";
import { useAppContext } from "@/context";
import Link from "next/link";

function EditedImagePage() {
	const { imageDataUrl } = useAppContext();
	return (
		<Layout>
			<Image src={imageDataUrl} alt="A nice looking image" />
			<div className="mt-4">
				<Link href="/images">
					<Button>Pick Another Image</Button>
				</Link>
			</div>
		</Layout>
	);
}

export default EditedImagePage;
