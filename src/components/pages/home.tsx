import { PostDTO } from "types";

import { PostCard } from "components/shared";

const mock: PostDTO[] = [
	{
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur eveniet reiciendis dicta autem amet molestias aperiam! Aspernatur, laudantium eos? ",
		title: "this is lorem",
		user: {
			name: "_johnsmith",
			avatar:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			isFollowed: true,
		},
		image: "",
	},
	{
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores sed incidunt reprehenderit doloremque sunt illum sit error nihil ducimus laborum dolore in consequatur, at fuga? Libero ducimus quaerat tempore vero vitae, dolores quisquam!",
		title: "another one",
		user: {
			name: "_johnsmith",
			avatar:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			isFollowed: false,
		},
		image: "",
	},
	{
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur eveniet reiciendis dicta autem amet momagnam voluptatem maiores corporis sed ducimus architecto fugiat numquam nobis esse in voluptas vero ullam doloribus nesciunt aperiam! Aspernatur, ",
		title: "this is lorem",
		user: {
			name: "_johnsmith",
			avatar:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			isFollowed: false,
		},
		image: "",
	},
	{
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores sed incidunt reprehenderit doloremque sunt illum sit error voluptate, debitis animi a ratione earum inventore, dolores sapiente neque. Harum impedit, sint facere, similique accusantium nihil ducimus laborum dolore in consequatur, at fuga? Libero ducimus quaerat tempore vero vitae, dolores quisquam!",
		title: "another one",
		user: {
			name: "_johnsmith",
			avatar:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			isFollowed: true,
		},
		image: "",
	},
	{
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore pariatur eveniet reiciendis dicta autem amet molestias dolorem consectetur sequi, odit enim eaque rerum consequuntur minima? Recusandae, accusamus at neque nemo deleniti omnis magnam voluptatem maiores corporis sed ducimus architecto fugiat numquam nobis esse in voluptas vero ullam doloribus nesciunt aperiam! Aspernatur, laudantium eos? ",
		title: "this is lorem",
		user: {
			name: "_johnsmith",
			avatar:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			isFollowed: true,
		},
		image: "",
	},
	{
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maiores sed incidunt reprehenderit doloremque sunt illum si",
		title: "another one",
		user: {
			name: "_johnsmith",
			avatar:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
			isFollowed: false,
		},
		image: "",
	},
];

const Home = () => {
	return (
		<div className="h-full min-h-screen sm:pr-10 pr-0 md:w-full lg:w-[450px]">
			<div className="p-6">
				{mock.map((props, index) => (
					<PostCard {...props} key={index} />
				))}
			</div>
		</div>
	);
};

export default Home;
