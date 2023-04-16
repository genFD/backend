import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // ######## INVOICES ######### //
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
  // #### Manual IDS #####
  // await prisma.client.createMany({
  // 	data: [
  // 		{
  // 			name: 'Jensen Huang',
  // 			email: 'jensen@gmail.com',
  // 			address_id: '1bfccfc1-d202-441c-b022-ef5a3a359ff5',
  // 		},
  // 		{
  // 			name: 'Alex Grim',
  // 			email: 'alexgrim@mail.com',
  // 			address_id: '7b761bc4-f48e-40d1-ae29-4b1a712b9d23',
  // 		},
  // 		{
  // 			name: 'John Morrison',
  // 			email: 'jm@myco.com',
  // 			address_id: 'b2589c20-088b-479c-ac8d-7cd285394387',
  // 		},
  // 		{
  // 			name: 'Alysa Werner',
  // 			email: 'alysa@email.co.uk',
  // 			address_id: 'b5787c5f-981e-4e73-a49a-f592504aee8f',
  // 		},
  // 		{
  // 			name: 'Mellisa Clarke',
  // 			email: 'mellisa.clarke@example.com',
  // 			address_id: 'd22a79d3-f88c-4747-a01d-29a76bafdef9',
  // 		},
  // 		{
  // 			name: 'Thomas Wayne',
  // 			email: 'thomas@dc.com',
  // 			address_id: 'd9281bb8-9098-497f-8cdf-554bdee129f0',
  // 		},
  // 		{
  // 			name: 'Anita Wainwright',
  // 			email: 'anitawainwright@biz.com',
  // 			address_id: 'e43e15cc-1d30-401d-9d5c-4379b0d38096',
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
  // 			status: 'paid',
  // 			client_id: '29bd3751-c658-4e3f-aaba-24c4eab9fa4d',
  // 			user_id: '30d4bd58-f87f-4d39-8faf-ba9b4a47bc32',
  // 		},
  // 		{
  // 			createdAt: new Date(2021, 8, 21),
  // 			paymentDue: new Date(2021, 9, 20),
  // 			description: 'Graphic Design',
  // 			paymentTerms: 30,
  // 			status: 'pending',
  // 			client_id: '67e42940-2478-420d-ba35-ba1173df0262',
  // 			user_id: '30d4bd58-f87f-4d39-8faf-ba9b4a47bc32',
  // 		},
  // 		{
  // 			createdAt: new Date(2021, 9, 24),
  // 			paymentDue: new Date(2021, 10, 1),
  // 			description: 'Website Redesign',
  // 			paymentTerms: 7,
  // 			status: 'paid',
  // 			client_id: '6e11b9d7-8226-44b7-b65e-3d928e37aedb',
  // 			user_id: '30d4bd58-f87f-4d39-8faf-ba9b4a47bc32',
  // 		},
  // 		{
  // 			createdAt: new Date(2021, 10, 11),
  // 			paymentDue: new Date(2021, 10, 12),
  // 			description: 'Logo Concept',
  // 			paymentTerms: 1,
  // 			status: 'pending',
  // 			client_id: 'c7b7cc5a-7b26-4bc4-a0fb-a352def9e654',
  // 			user_id: '30d4bd58-f87f-4d39-8faf-ba9b4a47bc32',
  // 		},
  // 		{
  // 			createdAt: new Date(2021, 10, 7),
  // 			paymentDue: new Date(2021, 10, 14),
  // 			description: 'Re-branding',
  // 			paymentTerms: 7,
  // 			status: 'pending',
  // 			client_id: 'e132c931-d360-4479-95a2-c2b03f92c11c',
  // 			user_id: '30d4bd58-f87f-4d39-8faf-ba9b4a47bc32',
  // 		},
  // 		{
  // 			createdAt: new Date(2021, 10, 1),
  // 			paymentDue: new Date(2021, 10, 31),
  // 			description: 'Landing Page Design',
  // 			paymentTerms: 30,
  // 			status: 'pending',
  // 			client_id: 'edc8117a-c63c-4dc1-91a0-52b92bd2e735',
  // 			user_id: '30d4bd58-f87f-4d39-8faf-ba9b4a47bc32',
  // 		},
  // 		{
  // 			createdAt: new Date(2021, 11, 5),
  // 			paymentDue: new Date(2021, 11, 12),
  // 			description: 'Logo Re-design',
  // 			paymentTerms: 30,
  // 			status: 'draft',
  // 			client_id: 'f87fe147-5ff6-462b-bbda-5c21fed99749',
  // 			user_id: '30d4bd58-f87f-4d39-8faf-ba9b4a47bc32',
  // 		},
  // 	],
  // });
  // await prisma.orders.createMany({
  // 	data: [
  // 		{
  // 			quantity: 1,
  // 			item_id: '218f7c33-8eab-414f-b977-164d8bf1da42',
  // 			invoice_id: '0cbc9e06-09da-4c4d-94f0-7e26a9c3aec1',
  // 		},
  // 		{
  // 			quantity: 1,
  // 			item_id: '84030c2a-8062-44db-8b91-f21db16362e4',
  // 			invoice_id: '0cbc9e06-09da-4c4d-94f0-7e26a9c3aec1',
  // 		},
  // 		{
  // 			quantity: 2,
  // 			item_id: '37ae74b4-2547-4aad-82f6-878395aa1bd3',
  // 			invoice_id: '231dedc5-6aee-4d3e-8b94-6d517f6b01b9',
  // 		},
  // 		{
  // 			quantity: 1,
  // 			item_id: 'c571caae-d36f-4190-9258-6708a26b1aec',
  // 			invoice_id: '231dedc5-6aee-4d3e-8b94-6d517f6b01b9',
  // 		},
  // 		{
  // 			quantity: 1,
  // 			item_id: '218f7c33-8eab-414f-b977-164d8bf1da42',
  // 			invoice_id: '5373bdb8-41c2-4305-b6d4-7259b4475db4',
  // 		},
  // 		{
  // 			quantity: 1,
  // 			item_id: '218f7c33-8eab-414f-b977-164d8bf1da42',
  // 			invoice_id: 'a991504f-9095-4ea9-8c07-0d0d863bf8d3',
  // 		},
  // 		{
  // 			quantity: 1,
  // 			item_id: '37ae74b4-2547-4aad-82f6-878395aa1bd3',
  // 			invoice_id: 'ad0bbdcd-524f-4919-aa06-1de2a996158c',
  // 		},
  // 		{
  // 			quantity: 1,
  // 			item_id: 'c571caae-d36f-4190-9258-6708a26b1aec',
  // 			invoice_id: 'ad0bbdcd-524f-4919-aa06-1de2a996158c',
  // 		},
  // 		{
  // 			quantity: 1,
  // 			item_id: 'aa3b64b2-584b-4e1f-825b-5eb884feace3',
  // 			invoice_id: 'd8a0a304-3c5d-4fdf-bba0-f8a620a3056c',
  // 		},
  // 		{
  // 			quantity: 1,
  // 			item_id: 'c571caae-d36f-4190-9258-6708a26b1aec',
  // 			invoice_id: 'edb438a8-1acb-4a13-8306-e69a377f1404',
  // 		},
  // 	],
  // });
  //################### Feedback ################ //
  // await prisma.user_Feedback.createMany({
  //   data: [
  //     {
  //       name: 'Zena Kelley',
  //       username: 'velvetround',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-zena.jpg',
  //       email: 'zenakelley@email.feedback',
  //       password: 'password',
  //     },
  //     {
  //       name: 'Suzanne Chang',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-suzanne.jpg',
  //       username: 'upbeat1811',
  //       email: 'suzannechang@email.feedback',
  //       password: 'password',
  //     },
  //     {
  //       name: 'Thomas Hood',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-thomas.jpg',
  //       username: 'brawnybrave',
  //       email: 'thomashood@email.feedback',
  //       password: 'password',
  //       admin: true,
  //     },
  //     {
  //       name: 'Elijah Moss',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-elijah.jpg',
  //       username: 'hexagon.bestagon',
  //       email: 'elijahmoss@email.feedback',
  //       password: 'password',
  //     },
  //     {
  //       name: 'James Skinner',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-james.jpg',
  //       username: 'hummingbird1',
  //       email: 'jamesskinner@email.feedback',
  //       password: 'password',
  //     },
  //     {
  //       name: 'Anne Valentine',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-anne.jpg',
  //       username: 'annev1990',
  //       email: 'annevalentine@email.feedback',
  //       password: 'password',
  //     },
  //     {
  //       name: 'Ryan Welles',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-ryan.jpg',
  //       username: 'voyager.344',
  //       email: 'ryanwelles@email.feedback',
  //       password: 'password',
  //     },
  //     {
  //       name: 'George Partridge',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-george.jpg',
  //       username: 'soccerviewer8',
  //       email: 'georgepartridge@email.feedback',
  //       password: 'password',
  //     },
  //     {
  //       name: 'Javier Pollard',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-javier.jpg',
  //       username: 'warlikeduke',
  //       email: 'javierpollard@email.feedback',
  //       password: 'password',
  //     },
  //     {
  //       name: 'Roxanne Travis',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-roxanne.jpg',
  //       username: 'peppersprime32',
  //       email: 'roxannetravis@email.feedback',
  //       password: 'password',
  //     },
  //     {
  //       name: 'Victoria Mejia',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-victoria.jpg',
  //       username: 'arlen_the_marlin',
  //       email: 'victoriamejia@email.feedback',
  //       password: 'password',
  //     },
  //     {
  //       name: 'Jackson Barker',
  //       image: 'https://feedback-profile-pics-001.s3.amazonaws.com/user-images/image-jackson.jpg',
  //       username: 'countryspirit',
  //       email: 'jacksonbarker@email.feedback',
  //       password: 'password',
  //     },
  //   ],
  // });
  // await prisma.status_Feedback.createMany({
  //   data: [
  //     {
  //       name: 'suggestion',
  //     },
  //     {
  //       name: 'planned',
  //     },
  //     {
  //       name: 'in-progress',
  //     },
  //     {
  //       name: 'live',
  //     },
  //   ],
  // });
  // await prisma.category_Feedback.createMany({
  //   data: [
  //     {
  //       name: 'enhancement',
  //     },
  //     {
  //       name: 'feature',
  //     },
  //     {
  //       name: 'bug',
  //     },
  //   ],
  // });
  // ## Manual IDS ##
  // await prisma.feedback.createMany({
  //   data: [
  //     {
  //       title: 'Add tags for solutions',
  //       description: 'Easier to search for solutions based on a specific stack.',
  //       category: 'enhancement',
  //       status: 'suggestion',
  //       user_id: 'c2a6339d-59f3-4688-8c07-60d4ca07442a',
  //     },
  //     {
  //       title: 'Add a dark theme option',
  //       description: 'It would help people with light sensitivities and who prefer dark mode.',
  //       category: 'feature',
  //       status: 'suggestion',
  //       user_id: '17b72522-0fbd-42f4-8ff6-cd8d22c2f8b4',
  //     },
  //     {
  //       title: 'Q&A within the challenge hubs',
  //       description: 'Challenge-specific Q&A would make for easy reference.',
  //       category: 'feature',
  //       status: 'suggestion',
  //       user_id: '2e1fbcbf-ee0f-4083-841d-8b841748aa58',
  //     },
  //     {
  //       title: 'Add image/video upload to feedback',
  //       description: 'Images and screencasts can enhance comments on solutions.',
  //       category: 'enhancement',
  //       status: 'suggestion',
  //       user_id: '3736465a-7089-4fa7-93f6-b3d932e3e3db',
  //     },
  //     {
  //       title: 'Ability to follow others',
  //       description: 'Stay updated on comments and solutions other people post.',
  //       category: 'feature',
  //       status: 'suggestion',
  //       user_id: '414007e4-5f35-4556-b7d3-c19b5617c612',
  //     },
  //     {
  //       title: 'Preview images not loading',
  //       description: 'Challenge preview images are missing when you apply a filter.',
  //       category: 'bug',
  //       status: 'suggestion',
  //       user_id: '79182002-4d83-4658-9d8b-e9a5bc323399',
  //     },
  //     {
  //       title: 'More comprehensive reports',
  //       description: 'It would be great to see a more detailed breakdown of solutions',
  //       category: 'feature',
  //       status: 'planned',
  //       user_id: '79d384fa-3bc6-4785-9139-3c207979b354',
  //     },
  //     {
  //       title: 'Learning paths',
  //       description: 'Sequenced projects for different goals to help people improve.',
  //       category: 'feature',
  //       status: 'planned',
  //       user_id: '8b4e1397-0a26-4817-9be5-5472aafde45c',
  //     },
  //     {
  //       title: 'One-click portfolio generation',
  //       description: 'Add ability to create professional looking portfolio from profile.',
  //       category: 'feature',
  //       status: 'in-progress',
  //       user_id: 'b3298e97-529c-4e7a-b633-dbc983f8c20e',
  //     },
  //     {
  //       title: 'Bookmark challenges',
  //       description: 'Be able to bookmark challenges to take later on.',
  //       category: 'feature',
  //       status: 'in-progress',
  //       user_id: 'ba17682c-10d4-45fe-a1c5-e736c5f15923',
  //     },
  //     {
  //       title: 'Animated solution screenshots',
  //       description: 'Screenshots of solutions with animations don’t display correctly.',
  //       category: 'bug',
  //       status: 'in-progress',
  //       user_id: 'c2a6339d-59f3-4688-8c07-60d4ca07442a',
  //     },
  //     {
  //       title: 'Add micro-interactions',
  //       description: 'Small animations at specific points can add delight.',
  //       category: 'enhancement',
  //       status: 'live',
  //       user_id: 'd417a4c1-3e40-4bf6-98f6-ffa3d70e75a1',
  //     },
  //   ],
  // });
  // await prisma.comment.createMany({
  //   data: [
  // {
  //   content: 'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
  //   user_id: '8b4e1397-0a26-4817-9be5-5472aafde45c',
  //   feedback_id: 'a2668b5e-d99a-4b96-b0f8-cca9e08302fc',
  // },
  // {
  //   content: 'Please use fun, color-coded labels to easily identify them at a glance',
  //   user_id: '17b72522-0fbd-42f4-8ff6-cd8d22c2f8b4',
  //   feedback_id: 'a2668b5e-d99a-4b96-b0f8-cca9e08302fc',
  // },
  // {
  //   content:
  //     'Also, please allow styles to be applied based on system preferences. I would love to be able to browse in the evening after my device’s dark mode turns on without the bright background it currently has.',
  //   user_id: 'd417a4c1-3e40-4bf6-98f6-ffa3d70e75a1',
  //   feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  // },
  // {
  //   content:
  //     'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
  //   user_id: '2e1fbcbf-ee0f-4083-841d-8b841748aa58',
  //   feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  // },
  // {
  //   content:
  //     'Much easier to get answers from devs who can relate, since they have either finished the challenge themselves or are in the middle of it.',
  //   user_id: 'f0727931-797a-4f16-9d38-f679bbbc40b8',
  //   feedback_id: '3e3842d9-7e19-459d-98ce-b3071eab1b36',
  // },
  // {
  //   content:
  //     'Right now, there is no ability to add images while giving feedback which is not ideal because I have to use another app to show what I mean',
  //   user_id: '79d384fa-3bc6-4785-9139-3c207979b354',
  //   feedback_id: '0d19523e-53a1-4775-ba08-5196deba5a03',
  // },
  // {
  //   content: "Yes I'd like to see this as well. Sometimes I want to add a short video or gif to explain the site's behavior..",
  //   user_id: 'ba17682c-10d4-45fe-a1c5-e736c5f15923',
  //   feedback_id: '0d19523e-53a1-4775-ba08-5196deba5a03',
  // },
  // {
  //   content: 'I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?',
  //   user_id: '79182002-4d83-4658-9d8b-e9a5bc323399',
  //   feedback_id: '14dcd999-1294-48b8-a958-cd297a7d6dd2',
  // },
  // {
  //   content:
  //     "I've been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that",
  //   user_id: '414007e4-5f35-4556-b7d3-c19b5617c612',
  //   feedback_id: '14dcd999-1294-48b8-a958-cd297a7d6dd2',
  // },
  // {
  //   content:
  //     'This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.',
  //   user_id: '79182002-4d83-4658-9d8b-e9a5bc323399',
  //   feedback_id: 'ad3a4b90-dd8f-4a41-87bf-d12569877c8b',
  // },
  // {
  //   content: "Yeah, this would be really good. I'd love to see deeper insights into my code!",
  //   user_id: '414007e4-5f35-4556-b7d3-c19b5617c612',
  //   feedback_id: 'ad3a4b90-dd8f-4a41-87bf-d12569877c8b',
  // },
  // {
  //   content:
  //     "Having a path through the challenges that I could follow would be brilliant! Sometimes I'm not sure which challenge would be the best next step to take. So this would help me navigate through them!",
  //   user_id: 'f0727931-797a-4f16-9d38-f679bbbc40b8',
  //   feedback_id: '44aa95e1-f247-4819-aeca-a66759d40a94',
  // },
  // {
  //   content:
  //     "I haven't built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!",
  //   user_id: '3736465a-7089-4fa7-93f6-b3d932e3e3db',
  //   feedback_id: '4b5c8ddd-631b-4379-8ce6-109438a6c4c9',
  // },
  //     {
  //       content:
  //         "This would be great! At the moment, I'm just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.",
  //       user_id: '8b4e1397-0a26-4817-9be5-5472aafde45c',
  //       feedback_id: '2ec41bb8-c1d6-4fab-8352-6c7da4cb8a66',
  //     },
  //     {
  //       content: "I'd love to see this! It always makes me so happy to see little details like these on websites.",
  //       user_id: '79182002-4d83-4658-9d8b-e9a5bc323399',
  //       feedback_id: '0b372a91-16af-4e22-8116-75c463c46732',
  //     },
  //   ],
  // });
  // await prisma.reply.createMany({
  //   data: [
  //     {
  //       content:
  //         "While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.",
  //       user_id: 'b3298e97-529c-4e7a-b633-dbc983f8c20e',
  //       comment_id: '5aac6f22-2f87-4862-9bbc-821daafb83cf',
  //     },
  //     {
  //       content:
  //         "Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons.",
  //       user_id: '3736465a-7089-4fa7-93f6-b3d932e3e3db',
  //       comment_id: '5aac6f22-2f87-4862-9bbc-821daafb83cf',
  //     },
  //     {
  //       content:
  //         "Bumping this. It would be good to have a tab with a feed of people I follow so it's easy to see what challenges they’ve done lately. I learn a lot by reading good developers' code.",
  //       user_id: 'c2a6339d-59f3-4688-8c07-60d4ca07442a',
  //       comment_id: '8b349d55-8b0b-4241-9364-f06f4634c014',
  //     },
  //     {
  //       content:
  //         "Me too! I'd also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!",
  //       user_id: '8b4e1397-0a26-4817-9be5-5472aafde45c',
  //       comment_id: '9493d2fc-5e01-45f6-893d-539d9fad067e',
  //     },
  //   ],
  // });
  // await prisma.upvote.createMany({
  //   data: [
  //     {
  //       user_id: '2e1fbcbf-ee0f-4083-841d-8b841748aa58',
  //       feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  //     },
  //     {
  //       user_id: '3736465a-7089-4fa7-93f6-b3d932e3e3db',
  //       feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  //     },
  //     {
  //       user_id: '414007e4-5f35-4556-b7d3-c19b5617c612',
  //       feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  //     },
  //     {
  //       user_id: '79182002-4d83-4658-9d8b-e9a5bc323399',
  //       feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  //     },
  //     {
  //       user_id: '79d384fa-3bc6-4785-9139-3c207979b354',
  //       feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  //     },
  //     {
  //       user_id: '8b4e1397-0a26-4817-9be5-5472aafde45c',
  //       feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  //     },
  //     {
  //       user_id: 'b3298e97-529c-4e7a-b633-dbc983f8c20e',
  //       feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  //     },
  //     {
  //       user_id: 'ba17682c-10d4-45fe-a1c5-e736c5f15923',
  //       feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  //     },
  //     {
  //       user_id: 'c2a6339d-59f3-4688-8c07-60d4ca07442a',
  //       feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  //     },
  //     {
  //       user_id: 'd417a4c1-3e40-4bf6-98f6-ffa3d70e75a1',
  //       feedback_id: '2c8333c9-ae3e-4349-9424-0f005d5d2847',
  //     },
  //   ],
  // });
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
