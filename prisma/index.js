const express = require ('express');
const bodyParser = require ('body-parser');
const {PrismaClient} = require('@prisma/client');

const app = express();
const prisma = 