import Note from './../models/note';

const getNote = async ({_id}) => {
    return await Note.findById(_id);
}

const allNotes = async () => {
    return await Note.find();
}

const createNote = async ({input}) => {
    return await Note.create(input);
}

const updateNote = async ({_id, input}) => {
    return await Note.findOneAndUpdate({_id},input,{new: true})
}

const deleteNote = async (root, {_id}) => {
    return await Note.findOneAndRemove({_id});
}

export default { getNote, allNotes, createNote, updateNote, deleteNote }
