const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  const createdCustomer = await prisma.customer.create({
    data: {
      name: "Alice",
      contact: {
        create: {
          phone: "020646674",
          email: "Ali1234@hotmail.com",
        },
      },
    },
    include: {
      contact: true,
    },
  });

  const createdMovie = await prisma.movie.create({
    data: {
      title: "Fat and Curious 5",
      runtimeMins: 200,
    },
  });

  const createdScreen = await prisma.screen.create({
    data: {
      number: 1,
    },
  });

  const createdTicket = await prisma.ticket.create({
      data: {
          
      }
  })

  const createdScreening = await prisma.screening.create({
    data: {
      startsAt: new Date(Date.parse("2022-03-31  20:00:00")),
      movie: {
        connect: { id: createdMovie.id },
      },
      screen: {
        connect: { id: createdScreen.id },
      },
    },
  });

  //  const createdMovieAndScreening = await prisma.movie.create({
  //    data: {
  //      title: "Berris Fuellers Day On",
  //      runtimeMins: 120,
  //      screening: {
  //        create: [
  //            {
  //          startsAt: new Date(Date.parse("2022-04-01")),
  //          screen: {
  //            number: 1,
  //          },
  //        },
  //      },
  //    },
  //  });

  console.log("Customer created", createdCustomer);
  console.log("Movie created", createdMovie)
  console.log("Screening created", createdScreening)
  //console.log("Movie nested screening", createdMovieAndScreening);

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
