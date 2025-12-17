import express from 'express';

import {
    createNewProject,
    getAllProjectsData,
    getProject,
    deleteProject,
} from '../controller/projectController.js';

const router = express.Router();

router.post('/', createNewProject);
router.get('/', getAllProjectsData);
router.get('/:id', getProject);
router.delete('/:id', deleteProject);

export default router;
