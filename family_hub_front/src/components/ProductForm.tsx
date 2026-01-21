import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
	example: string;
	exampleRequired: string;
};

const ProductForm = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	return (
		<form
			className="flex flex-col items-center w-150 bg-red-200 mx-auto rounded-xl p-2 gap-4"
			onSubmit={handleSubmit(onSubmit)}
		>
			<input
				className="bg-base-100 rounded-2xl"
				defaultValue="test"
				{...register("example")}
			/>
			<input {...register("exampleRequired", { required: true })} />
			
			<button className="btn btn-warning">Ajouter produit</button>
		</form>
	);
};

export default ProductForm;
