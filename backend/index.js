import prismaPkg from "@prisma/client";
import express from "express";
import cors from "cors";
const { PrismaClient } = prismaPkg;

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

app.get("/api/client", async (req, res) => {
  const agentIdQuery = req.query.agent_id;
  const clientEmailQuery = req.query.client_email;
  let clients;

  if (agentIdQuery) {
    clients = await prisma.client.findMany({
      where: {
        agent_id: Number(agentIdQuery),
      },
    });
  } else if (clientEmailQuery) {
    clients = await prisma.client.findUnique({
      where: {
        email: clientEmailQuery,
      },
    });
  } else {
    clients = await prisma.client.findMany();
  }

  res.json(clients);
});

app.post("/api/client", async (req, res) => {
  const { email, fname, lname, phone_num, agent_email } = req.body;
  const client = await prisma.client
    .create({
      data: {
        email,
        fname,
        lname,
        phone_num,
        agent_email,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(client);
});

app.put("/api/client/:id", async (req, res) => {
  const { id } = req.params;
  const { email, fname, lname, phone_num, agent_id } = req.body;
  const client = await prisma.client
    .update({
      where: {
        id: Number(id),
      },
      data: {
        email,
        fname,
        lname,
        phone_num,
        agent_id,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(client);
});

app.get("/api/client/:id", async (req, res) => {
  const { id } = req.params;
  const client = await prisma.client
    .findUnique({
      where: {
        id: Number(id),
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(client);
});

app.get("/api/agent", async (_, res) => {
  const agents = await prisma.agent.findMany();
  res.json(agents);
});

app.post("/api/agent", async (req, res) => {
  const { email, fname, lname, phone_num, city } = req.body;
  const agent = await prisma.agent
    .create({
      data: {
        email,
        fname,
        lname,
        phone_num,
        city,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(agent);
});

app.put("/api/agent/:id", async (req, res) => {
  const { id } = req.params;
  const { email, fname, lname, phone_num, city } = req.body;
  const agent = await prisma.agent
    .update({
      where: {
        id: Number(id),
      },
      data: {
        email,
        fname,
        lname,
        phone_num,
        city,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(agent);
});

app.get("/api/buyer", async (_, res) => {
  const buyers = await prisma.buyer.findMany();
  res.json(buyers);
});

app.post("/api/buyer", async (req, res) => {
  const { id, budget, type, requirement_id } = req.body;
  const buyer = await prisma.buyer
    .create({
      data: {
        id,
        budget,
        type,
        requirement_id,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(buyer);
});

app.put("/api/buyer/:id", async (req, res) => {
  const { id } = req.params;
  const { budget, type, requirement_id } = req.body;
  const buyer = await prisma.buyer
    .update({
      where: {
        id: Number(id),
      },
      data: {
        budget,
        type,
        requirement_id,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(buyer);
});

app.get("/api/seller", async (_, res) => {
  const sellers = await prisma.seller.findMany({
    include: {
      client: {
        select: {
          id: false,
          email: true,
          fname: true,
          lname: true,
          phone_num: true,
          agent_id: true,
        },
      },
    },
  });
  res.json(sellers);
});

app.post("/api/seller", async (req, res) => {
  const { id, type } = req.body;
  const seller = await prisma.seller
    .create({
      data: {
        id,
        type,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(seller);
});

app.put("/api/seller/:id", async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;
  const seller = await prisma.seller
    .update({
      where: {
        id: Number(id),
      },
      data: {
        type,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(seller);
});

app.get("/api/seller/:id", async (req, res) => {
  const { id } = req.params;
  const seller = await prisma.seller
    .findUnique({
      where: {
        id: Number(id),
      },
      include: {
        client: {
          select: {
            id: false,
            email: true,
            fname: true,
            lname: true,
            phone_num: true,
            agent_id: true,
          },
        },
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(seller);
});

app.get("/api/renter", async (_, res) => {
  const renters = await prisma.renter.findMany();
  res.json(renters);
});

app.post("/api/renter", async (req, res) => {
  const { id, type, requirement_id } = req.body;
  const renter = await prisma.renter
    .create({
      data: {
        id,
        type,
        requirement_id,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(renter);
});

app.put("/api/renter/:id", async (req, res) => {
  const { id } = req.params;
  const { type, requirement_id } = req.body;
  const renter = await prisma.renter
    .update({
      where: {
        id: Number(id),
      },
      data: {
        type,
        requirement_id,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(renter);
});

app.get("/api/landlord", async (_, res) => {
  const landlords = await prisma.landlord.findMany({
    include: {
      client: {
        select: {
          id: false,
          email: true,
          fname: true,
          lname: true,
          phone_num: true,
          agent_id: true,
        },
      },
    },
  });
  res.json(landlords);
});

app.post("/api/landlord", async (req, res) => {
  const { id } = req.body;
  const landlord = await prisma.landlord
    .create({
      data: { id },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(landlord);
});

app.get("/api/landlord/:id", async (req, res) => {
  const { id } = req.params;
  const landlord = await prisma.landlord
    .findUnique({
      where: {
        id: Number(id),
      },
      include: {
        client: {
          select: {
            id: false,
            email: true,
            fname: true,
            lname: true,
            phone_num: true,
            agent_id: true,
          },
        },
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(landlord);
});

app.get("/api/contact", async (req, res) => {
  const clientId = req.query.client_id;
  let contacts;
  if (clientId) {
    contacts = await prisma.contact.findMany({
      where: {
        client_id: Number(clientId),
      },
    });
  } else {
    contacts = await prisma.contact.findMany();
  }
  res.json(contacts);
});

app.post("/api/contact", async (req, res) => {
  const { id, client_id, email, fname, lname, phone_num, relationship } =
    req.body;

  const contact = await prisma.contact
    .create({
      data: {
        id,
        client_id,
        email,
        fname,
        lname,
        phone_num,
        relationship,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(contact);
});

app.put("/api/contact/:id", async (req, res) => {
  const { id } = req.params;
  const { client_id, email, fname, lname, phone_num, relationship } = req.body;
  const contact = await prisma.contact
    .update({
      where: {
        id: Number(id),
      },
      data: {
        client_id,
        email,
        fname,
        lname,
        phone_num,
        relationship,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(contact);
});

app.get("/api/contact/:id", async (req, res) => {
  const { id } = req.params;
  const contact = await prisma.contact
    .findOne({
      where: {
        id: Number(id),
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(contact);
});

app.get("/api/listing", async (_, res) => {
  const listings = await prisma.listing.findMany();
  res.json(listings);
});

app.post("/api/listing", async (req, res) => {
  const {
    street_number,
    unit_number,
    street_name,
    city,
    postal_code,
    asking_price,
    listing_date,
    strata_cost_per_month,
    parking,
    year_built,
    sq_feet,
    bedrooms,
    bathrooms,
    neighbourhood,
    yard,
    seller_id,
  } = req.body;
  const listing = await prisma.listing
    .create({
      data: {
        street_number,
        unit_number,
        street_name,
        city,
        postal_code,
        asking_price,
        listing_date,
        strata_cost_per_month,
        parking,
        year_built,
        sq_feet,
        bedrooms,
        bathrooms,
        neighbourhood,
        yard,
        seller_id,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(listing);
});

app.put("/api/listing/:id", async (req, res) => {
  const { id } = req.params;
  const {
    street_number,
    unit_number,
    street_name,
    city,
    postal_code,
    asking_price,
    listing_date,
    strata_cost_per_month,
    parking,
    year_built,
    sq_feet,
    bedrooms,
    bathrooms,
    neighbourhood,
    yard,
    seller_id,
  } = req.body;
  const listing = await prisma.listing
    .update({
      where: {
        id: Number(id),
      },
      data: {
        street_number,
        unit_number,
        street_name,
        city,
        postal_code,
        asking_price,
        listing_date,
        strata_cost_per_month,
        parking,
        year_built,
        sq_feet,
        bedrooms,
        bathrooms,
        neighbourhood,
        yard,
        seller_id,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(listing);
});

app.get("/api/listing/:id", async (req, res) => {
  const { id } = req.params;
  const listing = await prisma.listing
    .findOne({
      where: {
        id: Number(id),
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(listing);
});

app.get("/api/rental_property", async (_, res) => {
  const rental_properties = await prisma.rental_property.findMany();
  res.json(rental_properties);
});

app.post("/api/rental_property", async (req, res) => {
  const {
    street_number,
    unit_number,
    street_name,
    city,
    postal_code,
    asking_price,
    listing_date,
    strata_cost_per_month,
    parking,
    year_built,
    sq_feet,
    bedrooms,
    bathrooms,
    neighbourhood,
    yard,
    landlord_id,
  } = req.body;
  const rental_property = await prisma.rental_property
    .create({
      data: {
        street_number,
        unit_number,
        street_name,
        city,
        postal_code,
        asking_price,
        listing_date,
        strata_cost_per_month,
        parking,
        year_built,
        sq_feet,
        bedrooms,
        bathrooms,
        neighbourhood,
        yard,
        landlord_id,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(rental_property);
});

app.put("/api/rental_property/:id", async (req, res) => {
  const { id } = req.params;
  const {
    street_number,
    unit_number,
    street_name,
    city,
    postal_code,
    asking_price,
    listing_date,
    strata_cost_per_month,
    parking,
    year_built,
    sq_feet,
    bedrooms,
    bathrooms,
    neighbourhood,
    yard,
    landlord_id,
  } = req.body;
  const rental_property = await prisma.rental_property
    .update({
      where: {
        id: Number(id),
      },
      data: {
        street_number,
        unit_number,
        street_name,
        city,
        postal_code,
        asking_price,
        listing_date,
        strata_cost_per_month,
        parking,
        year_built,
        sq_feet,
        bedrooms,
        bathrooms,
        neighbourhood,
        yard,
        landlord_id,
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(rental_property);
});

app.get("/api/rental_property/:id", async (req, res) => {
  const { id } = req.params;
  const rental_property = await prisma.rental_property
    .findOne({
      where: {
        id: Number(id),
      },
    })
    .catch(_ => {
      res.sendStatus(400);
    });

  res.json(rental_property);
});

const unknownEndpoint = (req, res) => {
  console.dir(req.params);
  res.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.API_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
