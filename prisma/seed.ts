import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	// ######## INVOICES ######### //
	// const result = await prisma.$queryRaw`
	// SELECT name, email, street, city, postcode
	// FROM public."Address"
	// JOIN public."Client"
	// on public."Client"."addressId" = public."Address".id
	// `;
	// const result = await prisma.$queryRaw`
	// SELECT invoice_id, name, quantity, price, (quantity * price) AS subtotal
	// FROM public."Invoice"
	// JOIN public."Orders" ON public."Orders".invoice_id = public."Invoice".id
	// JOIN public."Item" ON public."Item".id = public."Orders".item_id
	// `;
	// console.log(result);
	// 	const invoice1 = 'a302b211-ef04-4491-b780-f12a9ac8e616';
	// 	const result = await prisma.$queryRaw`
	// 	SELECT SUM(subtotal) as grand_total
	// 	FROM (
	// 	SELECT subtotal FROM (
	// 	SELECT invoice_id, name, quantity, price, (quantity * price) AS subtotal
	// 	FROM public."Invoice"
	// 	JOIN public."Orders" ON public."Orders".invoice_id = public."Invoice".id
	// 	JOIN public."Item" ON public."Item".id = public."Orders".item_id) AS CART
	// 	WHERE invoice_id = ${invoice1}
	// ) AS total
	// 	`;
	// console.log(result);
	// await prisma.item.createMany({
	// 	data: [
	// 		{
	// 			name: 'Brand Guidelines',
	// 			price: 1800.9,
	// 		},
	// 		{
	// 			name: 'Banner Design',
	// 			price: 156.0,
	// 		},
	// 		{
	// 			name: 'Email Design',
	// 			price: 200.0,
	// 		},
	// 		{
	// 			name: 'Website Redesign',
	// 			price: 14002.33,
	// 		},
	// 		{
	// 			name: 'Logo Sketches',
	// 			price: 102.04,
	// 		},
	// 		{
	// 			name: 'New Logo',
	// 			price: 1532.33,
	// 		},
	// 		{
	// 			name: 'Web Design',
	// 			price: 6155.91,
	// 		},
	// 		{
	// 			name: 'Logo Re-design',
	// 			price: 3102.04,
	// 		},
	// 	],
	// });
	// await prisma.address.createMany({
	// 	data: [
	// 		{
	// 			street: '19 Union Terrace',
	// 			city: 'London',
	// 			postcode: 'E1 3EZ',
	// 			country: 'United Kingdom',
	// 		},
	// 		{
	// 			street: '106 Kendell Street',
	// 			city: 'Sharrington',
	// 			postcode: 'NR24 5WQ',
	// 			country: 'United Kingdom',
	// 		},
	// 		{
	// 			street: '84 Church Way',
	// 			city: 'Bradford',
	// 			postcode: 'BD1 9PB',
	// 			country: 'United Kingdom',
	// 		},
	// 		{
	// 			street: '79 Dover Road',
	// 			city: 'Westhall',
	// 			postcode: 'IP19 3PF',
	// 			country: 'United Kingdom',
	// 		},
	// 		{
	// 			street: '63 Warwick Road',
	// 			city: 'Carlisle',
	// 			postcode: 'CA20 2TG',
	// 			country: 'United Kingdom',
	// 		},
	// 		{
	// 			street: '46 Abbey Row',
	// 			city: 'Cambridge',
	// 			postcode: 'CB5 6EG',
	// 			country: 'United Kingdom',
	// 		},
	// 		{
	// 			street: '3964  Queens Lane',
	// 			city: 'Gotham',
	// 			postcode: '60457',
	// 			country: 'United States of America',
	// 		},
	// 	],
	// });
	// await prisma.client.upsert({
	// 	where: { email: 'ktor@gmail.com' },
	// 	update: {
	// 		addressId: 'd19aecb7-e7af-4fa2-8e41-dcfed837dc5e',
	// 	},
	// 	create: {
	// 		name: 'ktor',
	// 		email: 'ktor@gmail.com',
	// 		addressId: '0ce8591a-2cf1-43b3-860a-c4113b65ceb9',
	// 	},
	// });
	// await prisma.client.createMany({
	// 	data: [
	// 		{
	// 			name: 'Jensen Huang',
	// 			email: 'jensen@gmail.com',
	// 			address_id: 'c78d4bbf-9e4f-474e-a04f-86d1f182aeef',
	// 		},
	// 		{
	// 			name: 'Alex Grim',
	// 			email: 'alexgrim@mail.com',
	// 			address_id: '4c5f4939-c746-4c2c-ad55-424d5114b924',
	// 		},
	// 		{
	// 			name: 'John Morrison',
	// 			email: 'jm@myco.com',
	// 			address_id: 'f7b95366-7ed2-45f7-81b8-0dfbe176c5c0',
	// 		},
	// 		{
	// 			name: 'Alysa Werner',
	// 			email: 'alysa@email.co.uk',
	// 			address_id: 'dbe87f4c-467f-4289-ba3b-e9009571f75b',
	// 		},
	// 		{
	// 			name: 'Mellisa Clarke',
	// 			email: 'mellisa.clarke@example.com',
	// 			address_id: 'eca08986-2b00-4e64-9bb7-0d07cc3bbf59',
	// 		},
	// 		{
	// 			name: 'Thomas Wayne',
	// 			email: 'thomas@dc.com',
	// 			address_id: 'c541873a-1150-435d-8609-0323ddb67a65',
	// 		},
	// 		{
	// 			name: 'Anita Wainwright',
	// 			email: 'anitawainwright@biz.com',
	// 			address_id: '8bc5e3b5-82aa-4a59-b1c1-95ac8e2782cb',
	// 		},
	// 	],
	// });
	// await prisma.user_Invoice.createMany({
	// 	data: [
	// 		{
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-avatar.jpg',
	// 			name: 'Viktor Rel',
	// 			username: 'vikt_rel',
	// 			email: 'viktorrel@invoice.com',
	// 			password: 'password',
	// 			admin: true,
	// 		},
	// 	],
	// });
	// await prisma.status_Invoice.createMany({
	// 	data: [
	// 		{
	// 			status: 'paid',
	// 		},
	// 		{
	// 			status: 'pending',
	// 		},
	// 		{
	// 			status: 'draft',
	// 		},
	// 	],
	// });
	// await prisma.invoice.createMany({
	// 	data: [
	// 		{
	// 			createdAt: new Date(2021, 8, 18),
	// 			paymentDue: new Date(2021, 8, 19),
	// 			description: 'Re-branding',
	// 			paymentTerms: 1,
	// 			status: 'ecbfe91a-819f-41ce-b228-98bda61cb799',
	// 			client_id: '374f25d8-d2b0-4d68-87ed-450b65df4793',
	// 			user_id: '54789bb4-0ddd-4120-b933-a0fba81be5ca',
	// 		},
	// 		{
	// 			createdAt: new Date(2021, 8, 21),
	// 			paymentDue: new Date(2021, 9, 20),
	// 			description: 'Graphic Design',
	// 			paymentTerms: 30,
	// 			status: 'e2246af0-65cc-4297-89ef-093d7ae0478f',
	// 			client_id: '55d99585-3075-43a0-b6a8-4f8e8400521f',
	// 			user_id: '54789bb4-0ddd-4120-b933-a0fba81be5ca',
	// 		},
	// 		{
	// 			createdAt: new Date(2021, 9, 24),
	// 			paymentDue: new Date(2021, 10, 1),
	// 			description: 'Website Redesign',
	// 			paymentTerms: 7,
	// 			status: 'ecbfe91a-819f-41ce-b228-98bda61cb799',
	// 			client_id: 'fb4bc534-62a4-4d6e-a10b-170a6476d8c5',
	// 			user_id: '54789bb4-0ddd-4120-b933-a0fba81be5ca',
	// 		},
	// 		{
	// 			createdAt: new Date(2021, 10, 11),
	// 			paymentDue: new Date(2021, 10, 12),
	// 			description: 'Logo Concept',
	// 			paymentTerms: 1,
	// 			status: 'e2246af0-65cc-4297-89ef-093d7ae0478f',
	// 			client_id: '5c8ef818-f64a-4cd6-b088-eadfd99d907a',
	// 			user_id: '54789bb4-0ddd-4120-b933-a0fba81be5ca',
	// 		},
	// 		{
	// 			createdAt: new Date(2021, 10, 7),
	// 			paymentDue: new Date(2021, 10, 14),
	// 			description: 'Re-branding',
	// 			paymentTerms: 7,
	// 			status: 'e2246af0-65cc-4297-89ef-093d7ae0478f',
	// 			client_id: 'eb605dd1-80d2-4a9f-8939-4a349d88b67c',
	// 			user_id: '54789bb4-0ddd-4120-b933-a0fba81be5ca',
	// 		},
	// 		{
	// 			createdAt: new Date(2021, 10, 1),
	// 			paymentDue: new Date(2021, 10, 31),
	// 			description: 'Landing Page Design',
	// 			paymentTerms: 30,
	// 			status: 'e2246af0-65cc-4297-89ef-093d7ae0478f',
	// 			client_id: '8697f9b7-2477-4101-9d9c-a2953c4eeedc',
	// 			user_id: '54789bb4-0ddd-4120-b933-a0fba81be5ca',
	// 		},
	// 		{
	// 			createdAt: new Date(2021, 11, 5),
	// 			paymentDue: new Date(2021, 11, 12),
	// 			description: 'Logo Re-design',
	// 			paymentTerms: 30,
	// 			status: 'fe34ba01-11c6-4e68-ae46-77d5e72f0e02',
	// 			client_id: 'f1e58557-80d6-423b-a8b4-e14a6ba80d11',
	// 			user_id: '54789bb4-0ddd-4120-b933-a0fba81be5ca',
	// 		},
	// 	],
	// });
	await prisma.orders.createMany({
		data: [
			// {
			// 	quantity: 1,
			// 	item_id: 'cd8632d7-dd61-4506-9033-7bd421c149a1',
			// 	invoice_id: '18f9bdb3-0b9d-4539-b3dd-e284e2dd0d40',
			// },
			// {
			// 	quantity: 1,
			// 	item_id: 'cbaed1f4-156e-4612-ab8f-e5cbdce2a9a7',
			// 	invoice_id: 'efb6be8e-758a-4b52-b687-a8eed4a5b780',
			// },
			// {
			// 	quantity: 2,
			// 	item_id: '40843a08-30eb-468b-b2d8-a986ab1cda9b',
			// 	invoice_id: 'efb6be8e-758a-4b52-b687-a8eed4a5b780',
			// },
			// {
			// 	quantity: 1,
			// 	item_id: '357402dd-00cc-4e38-bc5b-df539a38ee3f',
			// 	invoice_id: 'a541bd7d-4fc0-49e1-a643-e6f4a5c5cf18',
			// },
			// {
			// 	quantity: 1,
			// 	item_id: 'b58b1963-db22-4471-b360-48bc80e4bdd0',
			// 	invoice_id: '6e438652-0d5a-4c7d-a44b-af9e5698d5e0',
			// },
			// {
			// 	quantity: 1,
			// 	item_id: '1358ede1-0c81-4ac9-afa1-b57fed5f1b1f',
			// 	invoice_id: '18f9bdb3-0b9d-4539-b3dd-e284e2dd0d40',
			// },
			// {
			// 	quantity: 1,
			// 	item_id: 'cd8632d7-dd61-4506-9033-7bd421c149a1',
			// 	invoice_id: '18f9bdb3-0b9d-4539-b3dd-e284e2dd0d40',
			// },
			// {
			// 	quantity: 1,
			// 	item_id: '84659d3f-6250-493b-bbd8-f01a671cdc84',
			// 	invoice_id: '0412ff00-34d6-49aa-9630-9b5d53f2a03e',
			// },
			// {
			// 	quantity: 1,
			// 	item_id: '5d5b0188-ae22-4005-a336-e835387eaddf',
			// 	invoice_id: 'b3a52cf0-0539-4a70-a223-4d45a4747fa2',
			// },
			// {
			// 	quantity: 1,
			// 	item_id: '1358ede1-0c81-4ac9-afa1-b57fed5f1b1f',
			// 	invoice_id: '8b5f17b3-14cb-4a98-9c14-4cb03fb7ee9e',
			// },
			// {
			// 	quantity: 1,
			// 	item_id: 'cd8632d7-dd61-4506-9033-7bd421c149a1',
			// 	invoice_id: '8b5f17b3-14cb-4a98-9c14-4cb03fb7ee9e',
			// },
		],
	});
	// ############## HELLO CAR ###########//
	// await prisma.user_Cardeal.createMany({
	// 	data: [
	// 		{ email: 'saliba@email.cardeal', password: 'password' },
	// 		{ email: 'gabriel@email.cardeal', password: 'password' },
	// 	],
	// });
	// await prisma.user_Invoice.createMany({
	// 	data: [
	// 		{ email: 'saliba@email.invoice', password: 'password' },
	// 		{ email: 'gabriel@email.invoice', password: 'password' },
	// 	],
	// });
	// Feedback
	// await prisma.user_Feedback.createMany({
	// 	data: [
	// 		{
	// 			name: 'Zena Kelley',
	// 			username: 'velvetround',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-zena.jpg',
	// 			email: 'zenakelley@email.feedback',
	// 			password: 'password',
	// 		},
	// 		{
	// 			name: 'Suzanne Chang',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-suzanne.jpg',
	// 			username: 'upbeat1811',
	// 			email: 'suzannechang@email.feedback',
	// 			password: 'password',
	// 		},
	// 		{
	// 			name: 'Thomas Hood',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-thomas.jpg',
	// 			username: 'brawnybrave',
	// 			email: 'thomashood@email.feedback',
	// 			password: 'password',
	// 			admin: true,
	// 		},
	// 		{
	// 			name: 'Elijah Moss',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-elijah.jpg',
	// 			username: 'hexagon.bestagon',
	// 			email: 'elijahmoss@email.feedback',
	// 			password: 'password',
	// 		},
	// 		{
	// 			name: 'James Skinner',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-james.jpg',
	// 			username: 'hummingbird1',
	// 			email: 'jamesskinner@email.feedback',
	// 			password: 'password',
	// 		},
	// 		{
	// 			name: 'Anne Valentine',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-anne.jpg',
	// 			username: 'annev1990',
	// 			email: 'annevalentine@email.feedback',
	// 			password: 'password',
	// 		},
	// 		{
	// 			name: 'Ryan Welles',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-ryan.jpg',
	// 			username: 'voyager.344',
	// 			email: 'ryanwelles@email.feedback',
	// 			password: 'password',
	// 		},
	// 		{
	// 			name: 'George Partridge',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-george.jpg',
	// 			username: 'soccerviewer8',
	// 			email: 'georgepartridge@email.feedback',
	// 			password: 'password',
	// 		},
	// 		{
	// 			name: 'Javier Pollard',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-javier.jpg',
	// 			username: 'warlikeduke',
	// 			email: 'javierpollard@email.feedback',
	// 			password: 'password',
	// 		},
	// 		{
	// 			name: 'Roxanne Travis',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-roxanne.jpg',
	// 			username: 'peppersprime32',
	// 			email: 'roxannetravis@email.feedback',
	// 			password: 'password',
	// 		},
	// 		{
	// 			name: 'Victoria Mejia',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-victoria.jpg',
	// 			username: 'arlen_the_marlin',
	// 			email: 'victoriamejia@email.feedback',
	// 			password: 'password',
	// 		},
	// 		{
	// 			name: 'Jackson Barker',
	// 			image:
	// 				'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-jackson.jpg',
	// 			username: 'countryspirit',
	// 			email: 'jacksonbarker@email.feedback',
	// 			password: 'password',
	// 		},
	// 	],
	// });
	// await prisma.feedback.createMany({
	// 	data: [
	// 		{
	// 			title: 'Add tags for solutions',
	// 			description:
	// 				'Easier to search for solutions based on a specific stack.',
	// 			category_id: 'ca226a36-9c63-479e-a838-b13da7295e36',
	// 			status_id: 'b7af6f6b-a45d-437e-bdb2-0f3c1c786532',
	// 			user_id: 'aa5eaa74-c809-4c93-9e44-f680cbea10f2',
	// 		},
	// 		{
	// 			title: 'Add a dark theme option',
	// 			description:
	// 				'It would help people with light sensitivities and who prefer dark mode.',
	// 			category_id: '55f6ee04-16ab-4388-962a-665847d06e9c',
	// 			status_id: 'b7af6f6b-a45d-437e-bdb2-0f3c1c786532',
	// 			user_id: '3f8cc895-6a9d-4c00-9e2f-8b3c3460d799',
	// 		},
	// 		{
	// 			title: 'Q&A within the challenge hubs',
	// 			description: 'Challenge-specific Q&A would make for easy reference.',
	// 			category_id: '55f6ee04-16ab-4388-962a-665847d06e9c',
	// 			status_id: 'b7af6f6b-a45d-437e-bdb2-0f3c1c786532',
	// 			user_id: '2d4cb158-a3a1-4fe8-b2c4-db6293195acf',
	// 		},
	// 		{
	// 			title: 'Add image/video upload to feedback',
	// 			description:
	// 				'Images and screencasts can enhance comments on solutions.',
	// 			category_id: 'ca226a36-9c63-479e-a838-b13da7295e36',
	// 			status_id: 'b7af6f6b-a45d-437e-bdb2-0f3c1c786532',
	// 			user_id: '31f30926-ead8-4332-9942-5f1e3cb24f60',
	// 		},
	// 		{
	// 			title: 'Ability to follow others',
	// 			description:
	// 				'Stay updated on comments and solutions other people post.',
	// 			category_id: '55f6ee04-16ab-4388-962a-665847d06e9c',
	// 			status_id: 'b7af6f6b-a45d-437e-bdb2-0f3c1c786532',
	// 			user_id: '3f8cc895-6a9d-4c00-9e2f-8b3c3460d799',
	// 		},
	// 		{
	// 			title: 'Preview images not loading',
	// 			description:
	// 				'Challenge preview images are missing when you apply a filter.',
	// 			category_id: '9b623f44-a05a-40b9-a73e-2c8370b1675a',
	// 			status_id: 'b7af6f6b-a45d-437e-bdb2-0f3c1c786532',
	// 			user_id: '921aaad7-9bfc-4055-8057-dcea58d495cd',
	// 		},
	// 		{
	// 			title: 'More comprehensive reports',
	// 			description:
	// 				'It would be great to see a more detailed breakdown of solutions',
	// 			category_id: '55f6ee04-16ab-4388-962a-665847d06e9c',
	// 			status_id: '3af73321-d25f-4796-8019-e83fb998083c',
	// 			user_id: 'ebc2bb4d-cb71-4769-989f-4f8c326e29f5',
	// 		},
	// 		{
	// 			title: 'Learning paths',
	// 			description:
	// 				'Sequenced projects for different goals to help people improve.',
	// 			category_id: '55f6ee04-16ab-4388-962a-665847d06e9c',
	// 			status_id: '3af73321-d25f-4796-8019-e83fb998083c',
	// 			user_id: 'ebc2bb4d-cb71-4769-989f-4f8c326e29f5',
	// 		},
	// 		{
	// 			title: 'One-click portfolio generation',
	// 			description:
	// 				'Add ability to create professional looking portfolio from profile.',
	// 			category_id: '55f6ee04-16ab-4388-962a-665847d06e9c',
	// 			status_id: '4e3de7bc-1fff-4f7b-819f-64fd5cc38dad',
	// 			user_id: 'fd6d3a9b-d502-4a15-983f-dcaf6fbad2d2',
	// 		},
	// 		{
	// 			title: 'Bookmark challenges',
	// 			description: 'Be able to bookmark challenges to take later on.',
	// 			category_id: '55f6ee04-16ab-4388-962a-665847d06e9c',
	// 			status_id: '4e3de7bc-1fff-4f7b-819f-64fd5cc38dad',
	// 			user_id: '512651d0-4f62-460d-b707-2aa86b6ba824',
	// 		},
	// 		{
	// 			title: 'Animated solution screenshots',
	// 			description:
	// 				'Screenshots of solutions with animations don’t display correctly.',
	// 			category_id: '9b623f44-a05a-40b9-a73e-2c8370b1675a',
	// 			status_id: '4e3de7bc-1fff-4f7b-819f-64fd5cc38dad',
	// 			user_id: '8d2554f5-1746-4dbe-8f2d-d4d431a280c9',
	// 		},
	// 		{
	// 			title: 'Add micro-interactions',
	// 			description: 'Small animations at specific points can add delight.',
	// 			category_id: 'ca226a36-9c63-479e-a838-b13da7295e36',
	// 			status_id: '5dba595b-0b58-4c5f-9b81-1dff60d5c86b',
	// 			user_id: '6d89ea91-d64d-4070-9a5c-b4be8cc1575a',
	// 		},
	// 	],
	// });
	// await prisma.comment.createMany({
	// 	data: [
	// 		{
	// 			content:
	// 				'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
	// 			user_id: 'ebc2bb4d-cb71-4769-989f-4f8c326e29f5',
	// 			feedback_id: '53823ed6-676f-40fe-82a6-6478e72523f3',
	// 		},
	// 		{
	// 			content:
	// 				'Please use fun, color-coded labels to easily identify them at a glance',
	// 			user_id: '3f8cc895-6a9d-4c00-9e2f-8b3c3460d799',
	// 			feedback_id: '53823ed6-676f-40fe-82a6-6478e72523f3',
	// 		},
	// 		{
	// 			content:
	// 				'Also, please allow styles to be applied based on system preferences. I would love to be able to browse in the evening after my device’s dark mode turns on without the bright background it currently has.',
	// 			user_id: '31f30926-ead8-4332-9942-5f1e3cb24f60',
	// 			feedback_id: '7c1561a5-f2cb-4ad0-bf2c-a2a0f686f807',
	// 		},
	// 		{
	// 			content:
	// 				'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
	// 			user_id: '6d89ea91-d64d-4070-9a5c-b4be8cc1575a',
	// 			feedback_id: '7c1561a5-f2cb-4ad0-bf2c-a2a0f686f807',
	// 		},
	// 		{
	// 			content:
	// 				'Much easier to get answers from devs who can relate, since they have either finished the challenge themselves or are in the middle of it.',
	// 			user_id: '921aaad7-9bfc-4055-8057-dcea58d495cd',
	// 			feedback_id: 'eb11d239-29ad-4f78-b79a-a17b36016aed',
	// 		},
	// 		{
	// 			content:
	// 				'Right now, there is no ability to add images while giving feedback which is not ideal because I have to use another app to show what I mean',
	// 			user_id: '8d2554f5-1746-4dbe-8f2d-d4d431a280c9',
	// 			feedback_id: '746afc43-c478-4ee6-af95-14ab16c19bd7',
	// 		},
	// 		{
	// 			content:
	// 				"Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
	// 			user_id: '2d4cb158-a3a1-4fe8-b2c4-db6293195acf',
	// 			feedback_id: '746afc43-c478-4ee6-af95-14ab16c19bd7',
	// 		},
	// 		{
	// 			content:
	// 				'I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?',
	// 			user_id: 'a59af7de-d1cc-4989-b071-d9ef3f1b809d',
	// 			feedback_id: 'b10761ce-2133-467a-9791-92583fa6d94d',
	// 		},
	// 		{
	// 			content:
	// 				"I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
	// 			user_id: 'fd6d3a9b-d502-4a15-983f-dcaf6fbad2d2',
	// 			feedback_id: 'b10761ce-2133-467a-9791-92583fa6d94d',
	// 		},
	// 		{
	// 			content:
	// 				'This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.',
	// 			user_id: 'a59af7de-d1cc-4989-b071-d9ef3f1b809d',
	// 			feedback_id: '4b6730a5-bcb9-4e2d-bf93-a746ddf3b661',
	// 		},
	// 		{
	// 			content:
	// 				"Yeah, this would be really good. I'd love to see deeper insights into my code!",
	// 			user_id: 'fd6d3a9b-d502-4a15-983f-dcaf6fbad2d2',
	// 			feedback_id: '4b6730a5-bcb9-4e2d-bf93-a746ddf3b661',
	// 		},
	// 		{
	// 			content:
	// 				"Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
	// 			user_id: '921aaad7-9bfc-4055-8057-dcea58d495cd',
	// 			feedback_id: 'b56ea82f-9ebc-4e6d-9e5e-85bd72a3d34f',
	// 		},
	// 		{
	// 			content:
	// 				"I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
	// 			user_id: '512651d0-4f62-460d-b707-2aa86b6ba824',
	// 			feedback_id: 'c70ce05c-71be-484f-beed-23a8bde830da',
	// 		},
	// 		{
	// 			content:
	// 				"This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
	// 			user_id: 'ebc2bb4d-cb71-4769-989f-4f8c326e29f5',
	// 			feedback_id: '64be8260-f470-4773-a3ec-a3435bded4c3',
	// 		},
	// 		{
	// 			content:
	// 				"I'd love to see this! It always makes me so happy to see little details like these on websites.",
	// 			user_id: 'a59af7de-d1cc-4989-b071-d9ef3f1b809d',
	// 			feedback_id: 'd5e08cec-1dac-4644-8d4a-33e858f10a07',
	// 		},
	// 	],
	// });
	// await prisma.reply.createMany({
	// 	data: [
	// 		{
	// 			content:
	// 				"While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
	// 			user_id: 'e3ce073d-dce3-48ac-be0c-ee0f4043ff8c',
	// 			comment_id: '6d00e18d-b9f2-433f-83a4-499520cdadd5',
	// 		},
	// 		{
	// 			content:
	// 				"Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
	// 			user_id: '512651d0-4f62-460d-b707-2aa86b6ba824',
	// 			comment_id: '6d00e18d-b9f2-433f-83a4-499520cdadd5',
	// 		},
	// 		{
	// 			content:
	// 				"Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
	// 			user_id: 'aa5eaa74-c809-4c93-9e44-f680cbea10f2',
	// 			comment_id: 'dfc097e7-38e6-4268-97bf-e4ab7297c533',
	// 		},
	// 		{
	// 			content:
	// 				"Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
	// 			user_id: 'ebc2bb4d-cb71-4769-989f-4f8c326e29f5',
	// 			comment_id: '9e6d3e66-380f-4b80-b732-db80ad15b7bc',
	// 		},
	// 	],
	// });
	// await prisma.category_Feedback.createMany({
	// 	data: [
	// 		{
	// 			name: 'enhancement',
	// 		},
	// 		{
	// 			name: 'feature',
	// 		},
	// 		{
	// 			name: 'bug',
	// 		},
	// 	],
	// });
	// await prisma.status_Feedback.createMany({
	// 	data: [
	// 		{
	// 			name: 'suggestion',
	// 		},
	// 		{
	// 			name: 'planned',
	// 		},
	// 		{
	// 			name: 'in-progress',
	// 		},
	// 		{
	// 			name: 'live',
	// 		},
	// 	],
	// });
	// await prisma.upvote.createMany({
	// 	data: [
	// 		{
	// 			user_id: 'aa5eaa74-c809-4c93-9e44-f680cbea10f2',
	// 			feedback_id: '53823ed6-676f-40fe-82a6-6478e72523f3',
	// 		},
	// 		{
	// 			user_id: 'ebc2bb4d-cb71-4769-989f-4f8c326e29f5',
	// 			feedback_id: '53823ed6-676f-40fe-82a6-6478e72523f3',
	// 		},
	// 		{
	// 			user_id: '3f8cc895-6a9d-4c00-9e2f-8b3c3460d799',
	// 			feedback_id: '53823ed6-676f-40fe-82a6-6478e72523f3',
	// 		},
	// 		{
	// 			user_id: '31f30926-ead8-4332-9942-5f1e3cb24f60',
	// 			feedback_id: '53823ed6-676f-40fe-82a6-6478e72523f3',
	// 		},
	// 		{
	// 			feedback_id: '7c1561a5-f2cb-4ad0-bf2c-a2a0f686f807',
	// 			user_id: 'aa5eaa74-c809-4c93-9e44-f680cbea10f2',
	// 		},
	// 		{
	// 			feedback_id: '7c1561a5-f2cb-4ad0-bf2c-a2a0f686f807',
	// 			user_id: 'ebc2bb4d-cb71-4769-989f-4f8c326e29f5',
	// 		},
	// 		{
	// 			feedback_id: '7c1561a5-f2cb-4ad0-bf2c-a2a0f686f807',
	// 			user_id: '3f8cc895-6a9d-4c00-9e2f-8b3c3460d799',
	// 		},
	// 		{
	// 			feedback_id: '7c1561a5-f2cb-4ad0-bf2c-a2a0f686f807',
	// 			user_id: '31f30926-ead8-4332-9942-5f1e3cb24f60',
	// 		},
	// 		{
	// 			feedback_id: '7c1561a5-f2cb-4ad0-bf2c-a2a0f686f807',
	// 			user_id: '512651d0-4f62-460d-b707-2aa86b6ba824',
	// 		},
	// 		{
	// 			feedback_id: '7c1561a5-f2cb-4ad0-bf2c-a2a0f686f807',
	// 			user_id: '8d2554f5-1746-4dbe-8f2d-d4d431a280c9',
	// 		},
	// 		{
	// 			feedback_id: 'eb11d239-29ad-4f78-b79a-a17b36016aed',
	// 			user_id: '2d4cb158-a3a1-4fe8-b2c4-db6293195acf',
	// 		},
	// 		{
	// 			feedback_id: 'eb11d239-29ad-4f78-b79a-a17b36016aed',
	// 			user_id: 'a59af7de-d1cc-4989-b071-d9ef3f1b809d',
	// 		},
	// 		{
	// 			feedback_id: 'eb11d239-29ad-4f78-b79a-a17b36016aed',
	// 			user_id: 'fd6d3a9b-d502-4a15-983f-dcaf6fbad2d2',
	// 		},
	// 		{
	// 			feedback_id: 'eb11d239-29ad-4f78-b79a-a17b36016aed',
	// 			user_id: '31f30926-ead8-4332-9942-5f1e3cb24f60',
	// 		},
	// 		{
	// 			feedback_id: '746afc43-c478-4ee6-af95-14ab16c19bd7',
	// 			user_id: '6d89ea91-d64d-4070-9a5c-b4be8cc1575a',
	// 		},
	// 		{
	// 			feedback_id: '746afc43-c478-4ee6-af95-14ab16c19bd7',
	// 			user_id: '31f30926-ead8-4332-9942-5f1e3cb24f60',
	// 		},
	// 		{
	// 			feedback_id: '746afc43-c478-4ee6-af95-14ab16c19bd7',
	// 			user_id: 'e3ce073d-dce3-48ac-be0c-ee0f4043ff8c',
	// 		},
	// 		{
	// 			feedback_id: 'b10761ce-2133-467a-9791-92583fa6d94d',
	// 			user_id: 'e3ce073d-dce3-48ac-be0c-ee0f4043ff8c',
	// 		},
	// 		{
	// 			feedback_id: 'b10761ce-2133-467a-9791-92583fa6d94d',
	// 			user_id: 'fd6d3a9b-d502-4a15-983f-dcaf6fbad2d2',
	// 		},
	// 		{
	// 			feedback_id: 'b10761ce-2133-467a-9791-92583fa6d94d',
	// 			user_id: 'a59af7de-d1cc-4989-b071-d9ef3f1b809d',
	// 		},
	// 		{
	// 			feedback_id: 'b10761ce-2133-467a-9791-92583fa6d94d',
	// 			user_id: '2d4cb158-a3a1-4fe8-b2c4-db6293195acf',
	// 		},
	// 		{
	// 			feedback_id: 'b10761ce-2133-467a-9791-92583fa6d94d',
	// 			user_id: '8d2554f5-1746-4dbe-8f2d-d4d431a280c9',
	// 		},
	// 		{
	// 			feedback_id: 'b10761ce-2133-467a-9791-92583fa6d94d',
	// 			user_id: '921aaad7-9bfc-4055-8057-dcea58d495cd',
	// 		},
	// 		{
	// 			feedback_id: 'b10761ce-2133-467a-9791-92583fa6d94d',
	// 			user_id: '512651d0-4f62-460d-b707-2aa86b6ba824',
	// 		},
	// 		{
	// 			feedback_id: '61f5bf03-4edb-439c-bb8a-3ec9c5aabe88',
	// 			user_id: '512651d0-4f62-460d-b707-2aa86b6ba824',
	// 		},
	// 		{
	// 			feedback_id: '61f5bf03-4edb-439c-bb8a-3ec9c5aabe88',
	// 			user_id: '921aaad7-9bfc-4055-8057-dcea58d495cd',
	// 		},
	// 		{
	// 			feedback_id: '61f5bf03-4edb-439c-bb8a-3ec9c5aabe88',
	// 			user_id: '8d2554f5-1746-4dbe-8f2d-d4d431a280c9',
	// 		},
	// 		{
	// 			feedback_id: '61f5bf03-4edb-439c-bb8a-3ec9c5aabe88',
	// 			user_id: '2d4cb158-a3a1-4fe8-b2c4-db6293195acf',
	// 		},
	// 		{
	// 			feedback_id: '61f5bf03-4edb-439c-bb8a-3ec9c5aabe88',
	// 			user_id: 'a59af7de-d1cc-4989-b071-d9ef3f1b809d',
	// 		},
	// 		{
	// 			feedback_id: '61f5bf03-4edb-439c-bb8a-3ec9c5aabe88',
	// 			user_id: 'fd6d3a9b-d502-4a15-983f-dcaf6fbad2d2',
	// 		},
	// 		{
	// 			feedback_id: '4b6730a5-bcb9-4e2d-bf93-a746ddf3b661',
	// 			user_id: 'fd6d3a9b-d502-4a15-983f-dcaf6fbad2d2',
	// 		},
	// 		{
	// 			feedback_id: '4b6730a5-bcb9-4e2d-bf93-a746ddf3b661',
	// 			user_id: 'a59af7de-d1cc-4989-b071-d9ef3f1b809d',
	// 		},
	// 		{
	// 			feedback_id: '4b6730a5-bcb9-4e2d-bf93-a746ddf3b661',
	// 			user_id: '2d4cb158-a3a1-4fe8-b2c4-db6293195acf',
	// 		},
	// 		{
	// 			feedback_id: 'b56ea82f-9ebc-4e6d-9e5e-85bd72a3d34f',
	// 			user_id: '2d4cb158-a3a1-4fe8-b2c4-db6293195acf',
	// 		},
	// 		{
	// 			feedback_id: 'b56ea82f-9ebc-4e6d-9e5e-85bd72a3d34f',
	// 			user_id: '8d2554f5-1746-4dbe-8f2d-d4d431a280c9',
	// 		},
	// 		{
	// 			feedback_id: 'b56ea82f-9ebc-4e6d-9e5e-85bd72a3d34f',
	// 			user_id: '921aaad7-9bfc-4055-8057-dcea58d495cd',
	// 		},
	// 		{
	// 			feedback_id: 'b56ea82f-9ebc-4e6d-9e5e-85bd72a3d34f',
	// 			user_id: '512651d0-4f62-460d-b707-2aa86b6ba824',
	// 		},
	// 		{
	// 			feedback_id: 'c70ce05c-71be-484f-beed-23a8bde830da',
	// 			user_id: '8d2554f5-1746-4dbe-8f2d-d4d431a280c9',
	// 		},
	// 		{
	// 			feedback_id: 'c70ce05c-71be-484f-beed-23a8bde830da',
	// 			user_id: '2d4cb158-a3a1-4fe8-b2c4-db6293195acf',
	// 		},
	// 		{
	// 			feedback_id: 'c70ce05c-71be-484f-beed-23a8bde830da',
	// 			user_id: 'a59af7de-d1cc-4989-b071-d9ef3f1b809d',
	// 		},
	// 		{
	// 			feedback_id: '64be8260-f470-4773-a3ec-a3435bded4c3',
	// 			user_id: 'aa5eaa74-c809-4c93-9e44-f680cbea10f2',
	// 		},
	// 		{
	// 			feedback_id: '64be8260-f470-4773-a3ec-a3435bded4c3',
	// 			user_id: 'ebc2bb4d-cb71-4769-989f-4f8c326e29f5',
	// 		},
	// 		{
	// 			feedback_id: '64be8260-f470-4773-a3ec-a3435bded4c3',
	// 			user_id: '3f8cc895-6a9d-4c00-9e2f-8b3c3460d799',
	// 		},
	// 		{
	// 			feedback_id: '64be8260-f470-4773-a3ec-a3435bded4c3',
	// 			user_id: '31f30926-ead8-4332-9942-5f1e3cb24f60',
	// 		},
	// 		{
	// 			feedback_id: 'de038d27-a9ff-4c0e-a25b-08e1af302cf4',
	// 			user_id: '6d89ea91-d64d-4070-9a5c-b4be8cc1575a',
	// 		},
	// 		{
	// 			feedback_id: 'de038d27-a9ff-4c0e-a25b-08e1af302cf4',
	// 			user_id: 'e3ce073d-dce3-48ac-be0c-ee0f4043ff8c',
	// 		},
	// 		{
	// 			feedback_id: 'de038d27-a9ff-4c0e-a25b-08e1af302cf4',
	// 			user_id: '512651d0-4f62-460d-b707-2aa86b6ba824',
	// 		},
	// 		{
	// 			feedback_id: 'de038d27-a9ff-4c0e-a25b-08e1af302cf4',
	// 			user_id: '921aaad7-9bfc-4055-8057-dcea58d495cd',
	// 		},
	// 		{
	// 			feedback_id: 'd5e08cec-1dac-4644-8d4a-33e858f10a07',
	// 			user_id: '8d2554f5-1746-4dbe-8f2d-d4d431a280c9',
	// 		},
	// 		{
	// 			feedback_id: 'd5e08cec-1dac-4644-8d4a-33e858f10a07',
	// 			user_id: '512651d0-4f62-460d-b707-2aa86b6ba824',
	// 		},
	// 		{
	// 			feedback_id: 'd5e08cec-1dac-4644-8d4a-33e858f10a07',
	// 			user_id: 'e3ce073d-dce3-48ac-be0c-ee0f4043ff8c',
	// 		},
	// 		{
	// 			feedback_id: 'd5e08cec-1dac-4644-8d4a-33e858f10a07',
	// 			user_id: '6d89ea91-d64d-4070-9a5c-b4be8cc1575a',
	// 		},
	// 		{
	// 			feedback_id: 'd5e08cec-1dac-4644-8d4a-33e858f10a07',
	// 			user_id: '31f30926-ead8-4332-9942-5f1e3cb24f60',
	// 		},
	// 		{
	// 			feedback_id: 'd5e08cec-1dac-4644-8d4a-33e858f10a07',
	// 			user_id: '3f8cc895-6a9d-4c00-9e2f-8b3c3460d799',
	// 		},
	// 	],
	// });
	// number of upvotes per feedback
	// SELECT title, count(*)
	// FROM "Feedback"
	// JOIN "Upvote"
	// ON "Upvote".feedback_id = "Feedback".id
	// GROUP BY "Feedback".title
}

// execute the main function
main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		// close Prisma Client at the end
		await prisma.$disconnect();
	});
