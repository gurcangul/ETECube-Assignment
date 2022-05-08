import express from 'express'

const login = async(req, res) =>{
    res.send('login user')
}

const register = async(req, res) =>{
    res.send('register ')
}

export {register, login}