import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        category: { type: String, required: true },
        projectType: { type: String, required: true },
        createdBy: { type: String, required: true },
        date: { type: String, required: true },
        client: { type: String, required: true },
        image: { type: String, required: true },
        previewURL: String,
        sourceCodeUrl: String,
        description: { type: String, required: true },
        features: [String],
        techUsed: [String],
    },
    { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);

export default Project;
