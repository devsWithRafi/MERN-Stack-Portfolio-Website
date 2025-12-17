import Project from '../models/Project.js';

// CREATE NEW PROJECT
export const createNewProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json({ message: 'Project created success!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET ALL PROJECTS DATA
export const getAllProjectsData = async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
};

// GET SINGLE PROJECT
export const getProject = async (req, res) => {
    const project = await Project.findById(req.params.id);
    res.json(project);
};

// DELETE PROJECT
export const deleteProject = async (req, res) => {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project delete successful!' });
};
