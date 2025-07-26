module.exports = {
  name: String,
  description: String,
  issuedDate: Date,
  expirationDate: Date,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  campsiteVisits: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Visit'
  }],
  badgesEarned: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Badge'
  }]
};