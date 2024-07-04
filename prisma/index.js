const express = require ('express');
const bodyParser = require ('body-parser');
const {PrismaClient} = require('@prisma/client');

const app = express();
const prisma = new PrismaClient ();

app.use(bodyParser.json());

app.post ('/users',async (req, res)=>{
    const {name, email} = req.body;
    const user = await prisma.user.create({
        data: {
            name,
            email
        }
    });
    res.json(user);
});

app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
  });

