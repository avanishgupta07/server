import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';

const router = express.Router();

// Add a route for the root URL
router.get('/', (req, res) => {
    res.send('Welcome to the File Upload API');
});

router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

export default router;
