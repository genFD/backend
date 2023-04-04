import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
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
	// 		{ name: 'Brand Guidelines', price: 1800.9 },
	// 		{ name: 'Banner Design', price: 156.0 },
	// 		{ name: 'Email Design', price: 200.0 },
	// 	],
	// 	-- SELECT street, city, country, postcode
	// -- FROM address
	// -- JOIN client on client.addressId = address.id
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
	// await prisma.address.createMany({
	// 	data: [
	// 		{
	// 			street: '19 Bloop st.',
	// 			city: 'Montreal',
	// 			postcode: 'H3M 1Y5',
	// 			country: 'Canada',
	// 		},
	// 		{
	// 			street: '20 Bloopee st.',
	// 			city: 'Montreal',
	// 			postcode: 'H3D 1S5',
	// 			country: 'Canada',
	// 		},
	// 	],
	// });
	// await prisma.invoice.createMany({
	// 	data: [
	// 		{
	// 			createdAt: new Date(2021, 9, 24),
	// 			paymentDue: new Date(2021, 10, 1),
	// 			description: 'Website Redesign',
	// 			paymentTerms: 7,
	// 			status: 'paid',
	// 			client_id: '7e867b2a-c2ef-4ee4-97d6-471e67f1b9ec',
	// 		},
	// 		{
	// 			createdAt: new Date(2021, 8, 18),
	// 			paymentDue: new Date(2021, 8, 19),
	// 			description: 'Re-branding',
	// 			paymentTerms: 1,
	// 			status: 'paid',
	// 			client_id: '7613c335-abcf-4f60-9041-b9f65ee838de',
	// 		},
	// 	],
	// });
	// await prisma.orders.createMany({
	// 	data: [
	// 		{
	// 			quantity: 2,
	// 			item_id: '2d26be75-b269-4acb-b3bd-36d485bde8aa',
	// 			invoice_id: 'a302b211-ef04-4491-b780-f12a9ac8e616',
	// 		},
	// 		{
	// 			quantity: 3,
	// 			item_id: '4e2449c7-e9c6-41b4-86cc-02d222b330c4',
	// 			invoice_id: 'a302b211-ef04-4491-b780-f12a9ac8e616',
	// 		},
	// 		{
	// 			quantity: 3,
	// 			item_id: '705d77f3-2c6b-4dfc-a51a-6eb4dbfe4ecf',
	// 			invoice_id: 'a836d24c-0d00-4491-bcfc-15912122493a',
	// 		},
	// 	],
	// });
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

	await prisma.user_Feedback.createMany({
		data: [
			{
				name: 'Zena Kelley',
				username: 'velvetround',
				email: 'zenakelley@email.feedback',
				password: 'password',
			},
			{
				name: 'Suzanne Chang',
				username: 'upbeat1811',
				email: 'suzannechang@email.feedback',
				password: 'password',
			},
			{
				name: 'Thomas Hood',
				username: 'brawnybrave',
				email: 'thomashood@email.feedback',
				password: 'password',
			},
			{
				name: 'Elijah Moss',
				username: 'hexagon.bestagon',
				email: 'elijahmoss@email.feedback',
				password: 'password',
			},
			{
				name: 'James Skinner',
				username: 'hummingbird1',
				email: 'jamesskinner@email.feedback',
				password: 'password',
			},
			{
				name: 'Anne Valentine',
				username: 'annev1990',
				email: 'annevalentine@email.feedback',
				password: 'password',
			},
			{
				name: 'Ryan Welles',
				username: 'voyager.344',
				email: 'ryanwelles@email.feedback',
				password: 'password',
			},
			{
				name: 'George Partridge',
				username: 'soccerviewer8',
				email: 'georgepartridge@email.feedback',
				password: 'password',
			},
			{
				name: 'Javier Pollard',
				username: 'warlikeduke',
				email: 'javierpollard@email.feedback',
				password: 'password',
			},
			{
				name: 'Roxanne Travis',
				username: 'peppersprime32',
				email: 'roxannetravis@email.feedback',
				password: 'password',
			},
			{
				name: 'Victoria Mejia',
				username: 'arlen_the_marlin',
				email: 'victoriamejia@email.feedback',
				password: 'password',
			},
			{
				name: 'Jackson Barker',
				username: 'countryspirit',
				email: 'jacksonbarker@email.feedback',
				password: 'password',
			},
		],
	});
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
