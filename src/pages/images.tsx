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

	const imageRefs = useRef<Array<HTMLDivElement | null>>([]);

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
