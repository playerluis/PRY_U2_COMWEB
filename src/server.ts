import express, {Express} from 'express';
import cors from 'cors';

const app: Express = express();
const PORT: Number = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/mensaje', (_req, res) => {
    res.json({message: 'Hola desde la API'});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});