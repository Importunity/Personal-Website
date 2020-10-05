const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Note = require('../../models/Note');

/**
 * @route GET api/notes
 * @desc get all notes
 * @access public
 */
router.get('/', async (request, response) => {
    //response.json({msg: "notes works!"})
    /*Note.find()
        .then(notes => response.json(notes))*/
    try {
        const notes = await Note.find();
        if (!notes)
        { 
            throw Error('No notes');
        }

        response.status(200).json(notes);
    } catch (e) {
        response.status(400).json({ msg: e.message });
    }
});


/**
 * @route POST api/notes
 * @desc Create a note
 * @access private
 */
router.post('/', auth, (request, response) => {
    const newNote = new Note({
        title: request.body.title,
        content: request.body.content
    });

    newNote.save().then(note => response.json(note));
});

/**
 * @route DELETE api/notes
 * @desc DELETE a note
 * @access private
 */

 router.delete('/:id', auth, (request, response) => {
     // fetches id from uri
     Note.findById(request.params.id)
        .then(note => note.remove().then(() => response.json({success: true})))
        .catch(err => response.status(404).json({success: false}))
 })

module.exports = router;