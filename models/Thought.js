const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            require: true,
            maxLength: 280
        },
        userName: {
            type: String,
            required: true
        },

    },
    {
        toJSON: {
            getters: true
        }
    }
);

// create a dateFormat