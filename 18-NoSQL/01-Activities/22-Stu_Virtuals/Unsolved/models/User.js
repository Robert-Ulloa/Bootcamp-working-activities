const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    first: String,
    last: String,
    age: Number,
  },
  {
    toJSON: {
      // TODO: Mongoose will not include virtuals by default, so add a `virtuals` property and set it's value to true
      virtuals: true,
    },
    id: false,
  }
);

// TODO: Create a virtual property `fullName` on the userSchema
userSchema.virtual('fullName')
  .get(function () {
    // Getter to return the full name (first + last)
    return `${this.first} ${this.last}`;
  })
  .set((function (fullname) {
    // Split the full name into first and last, and set them accordingly
    const [first, last] = fullName.split('');
    this.first = first;
    this.last = last;
  }));

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
