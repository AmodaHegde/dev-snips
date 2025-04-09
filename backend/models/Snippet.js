import mongoose from 'mongoose';

const snippetSchema = new mongoose.Schema({
    title:       { type: String, required: true },
    description: { type: String },
    code:        { type: String, required: true },
    language:    { type: String, required: true },
    technology:  { type: String },
    isPublic:    { type: Boolean, default: false },
    user:        { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
}, { timestamps: true });

const Snippet = mongoose.model('Snippet', snippetSchema);
export default Snippet;