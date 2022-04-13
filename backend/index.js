import prismaPkg from "@prisma/client";
import express from "express";
const { PrismaClient } = prismaPkg;

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get("/api/client", async (req, res) => {
  const agentIdQuery = req.query.agent_id;
  let clients;

  if (agentIdQuery) {
    clients = await prisma.client.findMany({
      where: {
        agent_id: Number(agentIdQuery),
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

app.get("api/client/:id", async (req, res) => {
  const { id } = req.params;
  const client = await prisma.client
    .findOne({
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
  const sellers = await prisma.seller.findMany();
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

const unknownEndpoint = (_, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.API_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
