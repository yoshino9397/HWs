const mongoose = require('mongoose')
const { Schema, model, SchemaTypes } = mongoose

const commentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subTitle: {
        type: String,
        required: true,
        lowercase: true,
    },
    author: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    content: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: Date,
    comments: [{
        user: {
            type: SchemaTypes.ObjectId,
            ref: 'User',
            required: true,
        },
        content: String
    }]
})

commentSchema.pre('save', function(next){
    const comment = this
    comment.updatedAt = Date.now()
    next()
})


const Comment = model('Comment', commentSchema)
module.exports = Comment