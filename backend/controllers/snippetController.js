import Snippet from "../models/Snippet.js";

//@route POST/api/snippet/create
export const createSnippet = async (req, res) => {
    const { title, description, code, language, technology, isPublic } = req.body;
    const userId = req.user._id;

    try{
        const snippet = await Snippet.create({
            title, description, code, language, technology, isPublic, user: userId,
        });

        res.status(201).json(snippet);
    }
    catch (error) {
        res.status(500).json({message: 'Failed to create snippet: ', error: error.message});
    }
};

//@route GET/ap/snippet/getall
export const getAllSnippets = async (req, res) => {
    try {
        const snippets = await Snippet.find({isPublic: true}).sort({createdAt: -1});
        res.status(200).json(snippets);
    }
    catch (err){
        res.status(500).json({ message: 'Failed to fetch snippets', error: err.message });
    }
};

//@route GET/api/snippet/getMySnips
export const getMySnippets = async (req, res) => {
    try{
        const snippets = await Snippet.find({ user: req.user._id});
        res.status(200).json(snippets);
    }
    catch (err){
        res.status(500).json({ message: 'Failed to fetch user snippets', error: err.message });
    }
};

//@route GET/api/snippet/getById
export const getSnippetById = async (req, res) => {
    try{
        const snippet = await Snippet.findById(req.params.id);
        if(!snippet) return res.status(404).json({ message: 'Snippet not found' });
        res.status(200).json(snippet);
    }
    catch (err) {
        res.status(500).json({ message: 'Failed to fetch snippet', error: err.message });
    }
};

//@route PUT/api/snippet/updateSnippet
export const updateSnippet = async (req, res) => {
    try {
      const snippet = await Snippet.findById(req.params.id);
      if (!snippet) return res.status(404).json({ message: 'Snippet not found' });
  
      if (snippet.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
  
      const updated = await Snippet.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updated);
    } catch (err) {
      res.status(500).json({ message: 'Failed to update snippet', error: err.message });
    }
};

//@route DELETE/api/snippet/deleteSnippet
export const deleteSnippet = async (req, res) => {
    try {
      const snippet = await Snippet.findById(req.params.id);
      if (!snippet) return res.status(404).json({ message: 'Snippet not found' });
  
      if (snippet.user.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Unauthorized' });
      }
  
      await snippet.deleteOne();
      res.status(200).json({ message: 'Snippet deleted' });
    } catch (err) {
      res.status(500).json({ message: 'Failed to delete snippet', error: err.message });
    }
  };