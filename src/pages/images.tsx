import Image from "@/components/Image";
import Layout from "@/components/Layout";
import { ACCESS_TOKEN, APIURL } from "@/constant";
import { ImageData } from "@/interfaces";
import { queryFn } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { RotatingLines } from "react-loader-spinner";

function ImagesPage() {
	const { data, isLoading } = useQuery({
		queryKey: ["fetch-images"],
		queryFn: () => {
			return queryFn<ImageData[]>(
				`${APIURL}/photos?per_page=100`,
				"GET",
				ACCESS_TOKEN
			);
		},
	});
	console.log(
		`🍀 \n | 🍄 file: images.tsx:22 \n | 🍄 ImagesPage \n | 🍄 data:`,
		data
	);

	const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

	const handleEditClick = (imageId: string) => {
		console.log(
			`🍀 \n | 🍄 file: images.tsx:26 \n | 🍄 handleEditClick \n | 🍄 imageId:`,
			imageId
		);
		const imageRef = document.getElementById(imageId);
		console.log(
			`🍀 \n | 🍄 file: images.tsx:31 \n | 🍄 handleEditClick \n | 🍄 imageRef:`,
			imageRef
		);
		if (imageRef) {
			imageRef.focus();
		}
	};

	return (
		<Layout>
			{isLoading ? (
				<RotatingLines
					strokeColor="grey"
					strokeWidth="5"
					animationDuration="0.75"
					width="96"
					visible={true}
				/>
			) : (
				<>
					<div className="flex flex-wrap items-start justify-center gap-5">
						{data?.map((image, index) => {
							imageRefs.current[index] =
								imageRefs.current[index] || null;
							return (
								<div className="flex flex-col" key={image.id}>
									<br />
									<Image
										id={image.id}
										src={image.urls.regular}
										alt="a nice looking image"
									/>
								</div>
							);
						})}
					</div>
				</>
			)}
		</Layout>
	);
}

export default ImagesPage;
