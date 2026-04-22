import express from 'express';
const router = express.Router();
router.get("/", getUsuarios);
export default router;