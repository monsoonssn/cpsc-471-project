import prismaPkg from "@prisma/client";
import express from "express";
const { PrismaClient } = prismaPkg;

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.get("/api/client/", async (_, res) => {
  const clients = await prisma.client.findMany();
  res.json(clients);
});

app.post("/api/client/", async (req, res) => {
  const { email, fname, lname, phone_num, agent_email } = req.body;
  const client = await prisma.client.create({
    data: {
      email,
      fname,
      lname,
      phone_num,
      agent_email,
    },
  }).catch((err) => {
    res.status(400).send({ error: "bad request" });
  });

  res.json(client);
});

app.put("/api/client/:email", async (req, res) => {
  const { email } = req.params;
  const { fname, lname, phone_num, agent_email } = req.body;
  const client = await prisma.client.update({
    where: {
      email,
    },
    data: {
      fname,
      lname,
      phone_num,
      agent_email,
    },
  });

  res.json(client);
});

const unknownEndpoint = (_, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.API_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
