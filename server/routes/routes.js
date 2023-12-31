import express from 'express';
import {register_user, login_user, get_balance, update_balance, get_info, transfer_balance, fixed_deposit, get_transactions, update_fd, get_updated_fd} from '../controllers/user.controller.js'
import passport from 'passport';


const router = express.Router()

router.post('/api/register', register_user)
router.post('/api/login', login_user)
router.get('/api/balance', get_balance)
router.post('/api/balance', update_balance)
router.post('/api/transaction', transfer_balance)
router.get('/api/user', get_info)
router.post('/api/fd', fixed_deposit)
router.get('/api/transaction', get_transactions)
router.post('/api/updatedfd', update_fd)
router.get('/api/updatedfd', get_updated_fd)

const CLIENT_URL = "http://localhost:3000/profile";

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get( "/google/callback", passport.authenticate("google", {successRedirect: CLIENT_URL, failureRedirect: "/login/failed"}));

export default router
