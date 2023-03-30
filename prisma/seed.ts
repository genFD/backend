import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
	await prisma.user_Cardeal.createMany({
		data: [
			{ email: 'saliba@email.cardeal', password: 'password' },
			{ email: 'gabriel@email.cardeal', password: 'password' },
		],
	});

	await prisma.user_Invoice.createMany({
		data: [
			{ email: 'saliba@email.invoice', password: 'password' },
			{ email: 'gabriel@email.invoice', password: 'password' },
		],
	});

	await prisma.user_Feedback.createMany({
		data: [
			{ email: 'saliba@email.feedback', password: 'password' },
			{ email: 'gabriel@email.feedback', password: 'password' },
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
