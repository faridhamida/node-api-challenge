const express = require('express');
const projectDb = require("./data/helpers/projectModel");
const router = express.Router();

// Get 
router.get("/", async (req, res) => {
    try {
        const projects = await projectDb.get();
        res.status(200).json(projects);
    } catch {
        res.status(500).json({ error: "error" });
    }
});

//Post

router.post("/", async (req, res) => {
    const newPost = { ...req.body };
    try {
        const success = await projectDb.insert(newPost);
        res.status(201).json(success);
    } catch {
        res.status(500).json({ error: "Invalid Id specified" });
    }
});

//Put

router.put("/:id", async (req, res) => {
    try {
        await projectDb.update(req.params.id, { ...req.body, id: req.params.id });
        const newResult = await projectDb.getById(req.params.id);
        res.status(200).json(newResult);
    } catch {
        res.status(500).json({ error: "500 Error" });
    }
});

//delete

router.delete("/:id", async (req, res) => {

    try {
        const result = await projectDb.remove(req.params.id);
        res
            .status(200)
            .json({ status: `Id: ${result} has been successfully deleted` });
    } catch {
        res.status(500).json({ error: "500 Error" });
    }
});



module.exports = router;